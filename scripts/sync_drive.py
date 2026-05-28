import os
import re
import sys
import requests

def extract_folder_id(url):
    match = re.search(r'folders/([a-zA-Z0-9_-]+)', url)
    if match:
        return match.group(1)
    return url

def fetch_drive_folder_files(folder_id):
    # Public drive folder URL
    url = f"https://drive.google.com/embeddedfolderview?id={folder_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    print(f"Drive klasörü okunuyor: {url}")
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Hata: Sayfa yüklenemedi (HTTP {response.status_code})")
            return []
        
        html = response.text
        files = []
        seen_ids = set()
        
        # 1. Regex (WIZ Array Format)
        pattern = r'\["([a-zA-Z0-9_-]{25,})","([^"]+)"'
        matches = re.findall(pattern, html)
        for file_id, name in matches:
            if file_id not in seen_ids:
                seen_ids.add(file_id)
                name = name.encode().decode('unicode-escape', errors='ignore') if '\\u' in name else name
                files.append({"id": file_id, "name": name})
                print(f"Bulundu (WIZ): {name} -> {file_id}")
                
        # 2. Regex (Embedded folderview modern HTML format)
        if not files:
            pattern_html = r'href="https://drive\.google\.com/file/d/([a-zA-Z0-9_-]{25,})/view[^"]*".*?class="flip-entry-title">([^<]+)</div>'
            matches_html = re.findall(pattern_html, html, re.DOTALL)
            for file_id, name in matches_html:
                if file_id not in seen_ids:
                    seen_ids.add(file_id)
                    files.append({"id": file_id, "name": name.strip()})
                    print(f"Bulundu (HTML): {name.strip()} -> {file_id}")
                    
        # 3. Regex (Alternatif href formatı)
        if not files:
            pattern_alt = r'href="/file/d/([a-zA-Z0-9_-]+)/view[^"]*"\s*[^>]*>([^<]+)'
            matches_alt = re.findall(pattern_alt, html)
            for file_id, name in matches_alt:
                if file_id not in seen_ids:
                    seen_ids.add(file_id)
                    files.append({"id": file_id, "name": name.strip()})
                    print(f"Bulundu (Alt): {name.strip()} -> {file_id}")
                    
        return files
    except Exception as e:
        print(f"Klasör okunurken hata oluştu: {e}")
        return []

def update_curriculum_ts(files):
    curriculum_path = os.path.join(os.path.dirname(__file__), "..", "web", "src", "data", "curriculum.ts")
    if not os.path.exists(curriculum_path):
        print(f"Hata: curriculum.ts bulunamadı: {curriculum_path}")
        return
    
    with open(curriculum_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    updated = False
    
    # 1. Update pptxDriveId based on file name matching
    # Search for weeks entries in curriculum.ts
    for file in files:
        name = file['name']
        file_id = file['id']
        
        # Eşleşme kontrolü (pptx için)
        if name.endswith('.pptx') or name.endswith('.pdf'):
            base_name = name.replace('.pdf', '').replace('.pptx', '')
            # curriculum.ts'deki pptxFile adıyla eşleştirelim
            # Örn: 01_tek_noron_pizza.pptx veya hafta01_python_temelleri.pptx
            
            # pptxFile alanlarını bulalım
            # pptxFile: '01_tek_noron_pizza.pptx',
            # pptxDriveId: '',
            # regex ile bu bloğu yakalayıp drive id'yi güncelleyelim.
            pattern = rf"(pptxFile:\s*['\"]{re.escape(base_name)}\.(pptx|pdf)['\"],\s*pptxDriveId:\s*['\"])([^'\"]*)(['\"])"
            
            def replace_pptx(match):
                nonlocal updated
                old_id = match.group(3)
                if old_id != file_id:
                    print(f"Güncelleniyor: {name} -> Yeni ID: {file_id}")
                    updated = True
                return f"{match.group(1)}{file_id}{match.group(4)}"
            
            content = re.sub(pattern, replace_pptx, content)
            
        # Eşleşme kontrolü (notebooks (.ipynb) için)
        elif name.endswith('.ipynb'):
            # curriculum.ts içinde notebook adı: name: '01_tek_noron_pizza.ipynb', desc: '...', url: '...'
            # url alanını güncelleyeceğiz: url: 'https://colab.research.google.com/drive/FILE_ID'
            colab_url = f"https://colab.research.google.com/drive/{file_id}"
            
            pattern = rf"(name:\s*['\"]{re.escape(name)}['\"],\s*desc:\s*['\"].*?['\"],\s*url:\s*['\"])([^'\"]*)(['\"])"
            
            def replace_notebook(match):
                nonlocal updated
                old_url = match.group(2)
                if old_url != colab_url:
                    print(f"Güncelleniyor: {name} -> Yeni Colab URL: {colab_url}")
                    updated = True
                return f"{match.group(1)}{colab_url}{match.group(3)}"
                
            content = re.sub(pattern, replace_notebook, content)

    if updated:
        with open(curriculum_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("curriculum.ts başarıyla güncellendi.")
    else:
        print("Herhangi bir güncelleme yapılmadı (dosyalar zaten güncel veya eşleşen dosya bulunamadı).")

def main():
    if len(sys.argv) < 2:
        print("Kullanım: python sync_drive.py <Google_Drive_Klasör_URL_veya_ID>")
        sys.exit(1)
        
    target = sys.argv[1]
    folder_id = extract_folder_id(target)
    print(f"Klasör ID: {folder_id}")
    
    files = fetch_drive_folder_files(folder_id)
    if not files:
        print("Klasörden dosya listesi alınamadı veya klasör boş.")
        return
        
    print(f"Toplam {len(files)} dosya bulundu. curriculum.ts güncelleniyor...")
    update_curriculum_ts(files)

if __name__ == "__main__":
    main()
