# 🧠 MEB YEĞİTEK · Derin Öğrenme Eğitim Serisi

> **Yenilik ve Eğitim Teknolojileri Genel Müdürlüğü**
> Öğretmen ve eğitimciler için **uygulamalı yapay zeka** — sıfırdan ileri seviyeye 5 Jupyter notebook.

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-3-D00000?logo=keras&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-4-F97316)
![License](https://img.shields.io/badge/Lisans-E%C4%9Fitim%20Ama%C3%A7l%C4%B1-blue)

---

## 🎯 Bu Seri Kimler İçin?

Bu seri, **programlama temeli olan ama yapay zeka konusunda yeni** olan herkes için hazırlandı:

- 👩‍🏫 BT / Bilişim öğretmenleri
- 🎓 Akademisyenler ve eğitimciler
- 📚 "Derin öğrenme nasıl çalışıyor?" sorusuna pratik cevap arayanlar
- 🧒 Öğrencileriyle AI projesi yapmak isteyenler

**Ön koşul:** Temel Python bilgisi (değişken, fonksiyon, döngü). Matematik bilmeniz gerekmez — kavramlar günlük hayattan analojilerle anlatılmıştır (terazi, mutfak tarifi, postacı vb.).

---

## 🚀 Tek Tıkla Colab'da Çalıştır

Hiçbir şey yüklemenize gerek yok! Aşağıdaki butonlara tıklayın, doğrudan tarayıcıda açılır.

| # | Notebook | Konu | Süre | Aç |
|---|---|---|---|---|
| 1 | `01_tek_noron_pizza.ipynb` | 🍕 Tek nöron nasıl öğrenir? | ~30 dk | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/DrMuratAltun/meb-yegitek-derin-ogrenme/blob/main/01_tek_noron_pizza.ipynb) |
| 2 | `02_iris_sinir_agi.ipynb` | 🌸 Çok katmanlı sinir ağı (Iris) | ~45 dk | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/DrMuratAltun/meb-yegitek-derin-ogrenme/blob/main/02_iris_sinir_agi.ipynb) |
| 3 | `03_gradio_rakam_tanima.ipynb` | ✍️ Gradio + MNIST rakam tanıma | ~50 dk | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/DrMuratAltun/meb-yegitek-derin-ogrenme/blob/main/03_gradio_rakam_tanima.ipynb) |
| 4 | `04_cnn_giysi_siniflandirma.ipynb` | 👕 CNN ile Fashion-MNIST | ~60 dk | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/DrMuratAltun/meb-yegitek-derin-ogrenme/blob/main/04_cnn_giysi_siniflandirma.ipynb) |
| 5 | `05_kendi_fotograflarinla_egitim.ipynb` | 🌺 Transfer learning (TF Flowers) | ~70 dk | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/DrMuratAltun/meb-yegitek-derin-ogrenme/blob/main/05_kendi_fotograflarinla_egitim.ipynb) |

**Sırayla okumanız önerilir** — her notebook bir öncekinin üstüne inşa edilir.

> 💡 Notebook 04 ve 05 için Colab'da **GPU** açmanızı öneririz: `Çalışma zamanı → Çalışma zamanı türünü değiştir → Donanım hızlandırıcı: T4 GPU`

---

## 📚 Ne Öğreneceksiniz?

| Notebook | Anahtar Kavramlar | Kullanılan Teknoloji |
|---|---|---|
| **1 — Tek Nöron** | Ağırlık, bias, gradyan iniş, öğrenme oranı | NumPy + Matplotlib |
| **2 — MLP** | Katman, aktivasyon, sınıflandırma, train/test split | Keras Sequential |
| **3 — Gradio** | Modeli kaydetme/yükleme, web arayüzü, Sketchpad | Keras + Gradio |
| **4 — CNN** | Konvolüsyon, filtre, pooling, feature map | Keras Conv2D + Gradio |
| **5 — Transfer Learning** | Pretrained model, fine-tuning, data augmentation | MobileNetV2 + Gradio |

---

## ⚙️ Yerel Kurulum (Opsiyonel)

Colab kullanmak istemiyorsanız:

```bash
# Repoyu klonla
git clone https://github.com/DrMuratAltun/meb-yegitek-derin-ogrenme.git
cd meb-yegitek-derin-ogrenme

# Sanal ortam oluştur (önerilen)
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

# Bağımlılıkları yükle
pip install -r requirements.txt

# Jupyter başlat
jupyter notebook
```

> Python **3.10+** önerilir.

---

## 🎓 Pedagojik Yaklaşım

Her notebook şu prensiplere göre tasarlandı:

- ✅ **Az kod, çok açıklama** (markdown / kod oranı ~5:4)
- ✅ Günlük hayattan **analojiler** (basketbol takımı, terazi, postacı...)
- ✅ Her hücre öncesi **"Ne yapıyoruz, neden?"**
- ✅ İnteraktif **"Kendin Dene"** bölümleri
- ✅ Her sonunda **kavram tablosu**
- ✅ Online çekilen veri setleri — kullanıcı dosya indirmek zorunda kalmaz

---

## 🌟 Bu Seriden Sonra Neler Yapabilirsiniz?

- 👨‍🏫 Öğrencileriniz için **kendi AI demolarınızı** geliştirin
- 🏫 Okul/sınıf projelerinde yapay zeka kullanın
- 🌐 [Hugging Face Spaces](https://huggingface.co/spaces) ile modelinizi internete bedava yayınlayın
- 📖 Daha derin konulara geçin: NLP, Transformers, GAN, Pekiştirmeli Öğrenme
- 📚 `kaynaklar.md` dosyasındaki ileri seviye kaynaklarla yolunuza devam edin

---

## 📂 Repo Yapısı

```
meb-yegitek-derin-ogrenme/
├── 01_tek_noron_pizza.ipynb              # Tek nöron temelleri
├── 02_iris_sinir_agi.ipynb               # Çok katmanlı ağ
├── 03_gradio_rakam_tanima.ipynb          # Gradio + model kaydetme
├── 04_cnn_giysi_siniflandirma.ipynb      # CNN
├── 05_kendi_fotograflarinla_egitim.ipynb # Transfer learning
├── README.md
├── requirements.txt                       # Bağımlılıklar
├── kaynaklar.md                          # İleri okuma kaynakları
└── .gitignore
```

---

## ⚖️ Lisans ve Kullanım

Bu seri **MEB YEĞİTEK** kapsamında **eğitim amaçlı** hazırlanmıştır.
Eğitim ortamlarında, öğretmen yetiştirme programlarında ve sınıf içinde serbestçe kullanılabilir.

Kullanılan tüm kütüphaneler (TensorFlow, Keras, Gradio, scikit-learn) açık kaynaktır ve kendi lisanslarına tabidir.

---

## 🤝 Katkıda Bulunma

Hata, öneri veya iyileştirmeleriniz için [Issue açabilirsiniz](https://github.com/DrMuratAltun/meb-yegitek-derin-ogrenme/issues).

---

<div align="center">

**© 2026 MEB YEĞİTEK · Yenilik ve Eğitim Teknolojileri Genel Müdürlüğü**

</div>
