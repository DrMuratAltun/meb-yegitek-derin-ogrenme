const fs = require('fs');
const path = require('path');
const T = require('/Users/drmurataltun/.claude/pptx-template.js');

// Sunumların kaydedileceği dizin
const outputDir = path.join(__dirname, '..', 'sunumlar');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 9 haftalık detaylı ve zengin müfredat verileri, pedagojik analojiler, detaylı kodlar
const presentationData = [
  {
    id: 1,
    title: 'Tek Nöron Nasıl Öğrenir?',
    subtitle: 'Derin Öğrenme Temelleri — Bölüm 1',
    section: 'DL TEMELLERİ',
    analogy: {
      problem: "Tahmin Tutarsızlığı: Bir restoranda pizza sipariş süresini tahmin etmek istiyoruz. Kurye mesafesi ve hava durumuna göre elimizde veri var fakat sabit bir tahmin modeli kuramıyoruz.",
      approach: "Terazi Dengesi Analojisi: Ağırlıkları (W) ve sapmayı (b) terazinin kefeleri gibi düşünüp, her yanlış tahminde teraziyi hatanın yönüne doğru milimetrik olarak kaydıracağız.",
      solution: "Gradyan İniş Uygulaması: Her pizza teslimatında gerçek süre ile tahmin arasındaki hatayı hesaplayıp, ağırlıkları hata oranında güncelleyerek hata payını sıfıra yaklaştırıyoruz."
    },
    topics: [
      { emoji: '🧠', title: 'Yapay Nöron', desc: 'Girdileri ağırlıklarla çarpan, bias ekleyen ve transfer fonksiyonundan geçiren matematiksel model.' },
      { emoji: '⚖️', title: 'Ağırlık (Weight)', desc: 'Girdinin çıktı üzerindeki önem derecesini belirleyen katsayı. Öğrenilen ana unsurdur.' },
      { emoji: '➕', title: 'Bias (Sapma)', desc: 'Girdiler sıfır olduğunda bile nöronun bir eşik değeriyle ateşlenmesini sağlayan ek sabit.' },
      { emoji: '📏', title: 'Hata (Error)', desc: 'Gerçekleşen değer ile tahmin arasındaki fark. Optimizasyonun yönünü ve gücünü belirler.' },
      { emoji: '📉', title: 'Gradyan İniş', desc: 'Hata fonksiyonunu en dik iniş yönünde adım adım azaltarak minimum noktaya ulaşma algoritması.' },
      { emoji: '⚡', title: 'Öğrenme Oranı', desc: 'Güncellemelerin hızını belirleyen katsayı (Alpha). Çok büyük veya küçük olması eğitimi bozar.' }
    ],
    timeline: [
      { year: 'Adım 1', title: 'Girdi & Ağırlık', desc: 'X girdisi ile W ağırlığı çarpılır.' },
      { year: 'Adım 2', title: 'Eşik Ekleme', sub: 'Bias eklenerek z skoru oluşturulur.' },
      { year: 'Adım 3', title: 'Hata Hesabı', desc: 'Gerçek değerden tahmin çıkarılır.' },
      { year: 'Adım 4', title: 'Türev / Yön', desc: 'Hatanın gradyanı (türevi) hesaplanır.' },
      { year: 'Adım 5', title: 'Güncelleme', desc: 'W ve b değerleri ters gradyan yönünde değiştirilir.' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Girdiler (X)', sub: 'Mesafe, Hava Durumu' },
      { emoji: '✖️', label: 'Ağırlık Çarpımı', sub: 'X * W (Önem Katsayısı)' },
      { emoji: '➕', label: 'Bias (Eşik)', sub: 'z = (X*W) + b' },
      { emoji: '📏', label: 'Kayıp Hesabı', sub: 'Kayıp = (Y - Y_pred)^2' },
      { emoji: '🔄', label: 'Gradyan İniş', sub: 'Ağırlıkları hataya göre düzelt' }
    ],
    code: `import numpy as np
import matplotlib.pyplot as plt

# 1. Sentetik Pizza Dağıtım Verisi (Mesafe km vs Süre dk)
X = np.array([1.0, 2.0, 3.0, 4.0, 5.0]) # km
y = np.array([12.0, 18.0, 24.0, 32.0, 38.0]) # dakika

# 2. Parametrelerin Başlatılması
w = 0.5   # Ağırlık başlangıç
b = 0.0   # Bias başlangıç
lr = 0.01 # Öğrenme oranı (Learning Rate)

# 3. Eğitim Döngüsü (Gradyan İniş)
for epoch in range(100):
    for i in range(len(X)):
        # İleri yayılım (Tahmin)
        y_pred = X[i] * w + b
        # Hata hesaplama
        error = y[i] - y_pred
        
        # Gradyan güncelleme (Türevsel adımlar)
        w += lr * error * X[i]
        b += lr * error
    
    if epoch % 20 == 0:
        total_loss = np.mean((y - (X * w + b)) ** 2)
        print(f"Epoch {epoch}: W={w:.2f}, b={b:.2f}, Loss={total_loss:.4f}")`,
    takeaways: [
      { text: 'Yapay sinir ağlarında tek bir nöron y = wx + b doğrusunu çizen doğrusal bir regresyon modelidir.', color: T.C.acc },
      { text: 'Ağırlık (W) doğrunun eğimini, Bias (b) ise y-eksenini kestiği noktayı belirler.', color: T.C.sec },
      { text: 'Gradyan iniş, hata dağındaki en dik yokuştan aşağıya doğru adım adım inme algoritmasıdır.', color: T.C.pri }
    ],
    quote: 'Yapay sinir ağları, karmaşık doğrusal olmayan fonksiyonları öğrenebilmek için milyarlarca tek nöronun bir araya gelmesiyle oluşur.',
    filename: '01_tek_noron_pizza.pptx'
  },
  {
    id: 2,
    title: 'Aktivasyon Fonksiyonları',
    subtitle: 'Derin Öğrenme Temelleri — Bölüm 1',
    section: 'DL TEMELLERİ',
    analogy: {
      problem: "Doğrusallık Çıkmazı: Sadece doğrusal (lineer) işlemler yapabilen bir ağ, ne kadar derin olursa olsun, karmaşık eğrileri ve sınırları asla öğrenemez. Sadece düz çizgiler çizebilir.",
      approach: "Baraj Kapakları Analojisi: Su belirli bir seviyeyi (eşiği) aşana kadar kapak açılmaz. Seviye aşıldığında ise su geçişine izin verilir. Bu geçiş doğrusal değildir.",
      solution: "Aktivasyon Entegrasyonu: Nöronun net girdisini alıp Sigmoid, ReLU gibi doğrusal olmayan süzgeçlerden geçirerek ağın bükülme ve kıvrılma yeteneği kazanmasını sağlıyoruz."
    },
    topics: [
      { emoji: '⚡', title: 'Aktivasyon Rolü', desc: 'Nöronun çıktı üretip üretmeyeceğini ve çıktının şiddetini belirleyen filtre.' },
      { emoji: '📉', title: 'Doğrusalsızlık', desc: 'Ağın girdiler ile çıktılar arasındaki doğrusal olmayan karmaşık ilişkileri öğrenmesini sağlar.' },
      { emoji: '🧬', title: 'Sigmoid Süzgeci', desc: 'Girdiyi 0 ile 1 arasına sıkıştırır. Olasılık hesaplarında ve ikili sınıflandırmada kullanılır.' },
      { emoji: '📐', title: 'ReLU Standardı', desc: 'Negatif değerleri sıfırlar, pozitifleri olduğu gibi bırakır. Derin ağlarda gradyan yok olmasını önler.' },
      { emoji: '📈', title: 'Tanh & Softmax', desc: 'Tanh çıktıyı -1 ile 1 arasına alır. Softmax ise çoklu sınıflar için olasılık dağılımı üretir.' },
      { emoji: '⚠️', title: 'Ölü Nöron Sorunu', desc: 'ReLU aktivasyonunda negatif girdiler yüzünden bazı nöronların tamamen pasif kalması (Dying ReLU).' }
    ],
    timeline: [
      { year: 'Nöron Girdisi', title: 'Doğrusal Toplam', desc: 'z = WX + b hesaplanır' },
      { year: 'Aktivasyon', title: 'Doğrusal Olmayan Filtre', desc: 'a = f(z) hesaplanır' },
      { year: 'Çıktı Aktarımı', title: 'Sonraki Katmana İletim', desc: 'a değeri sonraki nöronlara girdi olur' },
      { year: 'Geriye Doğru', title: 'Türev Çarpımı', desc: 'Gradyan akışında f\'(z) değeri çarpım olarak eklenir' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Net Girdi (z)', sub: 'WX + b doğrusal toplam' },
      { emoji: '⚡', label: 'Sigmoid / Tanh', sub: 'Olasılıksal veya simetrik sıkıştırma' },
      { emoji: '📐', label: 'ReLU Süzgeci', sub: 'Negatifleri budama, pozitifleri aktarma' },
      { emoji: '📤', label: 'Softmax Dağılımı', sub: 'Çoklu sınıf olasılık toplamı = 1.0' },
      { emoji: '🔄', label: 'Gradyan Yok Olması', sub: 'Türevi sıfıra yakın aktivasyonların tespiti' }
    ],
    code: `import numpy as np

# Aktivasyon fonksiyonlarının NumPy ile formülizasyonu
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def relu(z):
    return np.maximum(0, z)

def tanh(z):
    return np.tanh(z)

def softmax(z):
    exp_z = np.exp(z - np.max(z)) # Sayısal kararlılık için max çıkarılır
    return exp_z / np.sum(exp_z, axis=0)

test_data = np.array([-2.0, -0.5, 0.0, 1.5, 3.0])
print("Sigmoid Çıktısı:", sigmoid(test_data))
print("ReLU Çıktısı:", relu(test_data))`,
    takeaways: [
      { text: 'Aktivasyon fonksiyonları ağa bükülme ve kıvrılma (doğrusal olmama) yeteneği kazandırır.', color: T.C.acc },
      { text: 'ReLU, türevi pozitif bölgede sabit 1 olduğu için derin öğrenme modellerinin gizli katmanlarında standarttır.', color: T.C.sec },
      { text: 'Aktivasyon fonksiyonunun türevi ne kadar büyükse, ağ o kadar hızlı ve kararlı öğrenir.', color: T.C.pri }
    ],
    quote: 'Aktivasyon fonksiyonları olmasaydı, derin öğrenme sadece devasa bir matris çarpımı oyunundan ibaret kalırdı.',
    filename: '02_aktivasyon_fonksiyonlari.pptx'
  },
  {
    id: 3,
    title: 'İleri Yayılım (Forward Propagation)',
    subtitle: 'Derin Öğrenme Temelleri — Bölüm 1',
    section: 'DL TEMELLERİ',
    analogy: {
      problem: "Doğrusal Ayrışamayan Sınıflar: Klasik XOR probleminde (0-0 ve 1-1 aynı sınıf, 0-1 ve 1-0 farklı sınıf) tek bir doğru çizerek sınıfları ayıramıyoruz. Tek katmanlı ağlar kilitleniyor.",
      approach: "Katmanlı Fabrika Analojisi: Ham madde (girdiler) fabrikaya girer. İlk istasyon (gizli katman) ham maddeyi birleştirip yeni parçalar üretir. Son istasyon (çıktı) parçaları birleştirip ürünü çıkarır.",
      solution: "Gizli Katman Ekleme: Girdilerin boyutunu gizli katmanla yükseltip (XOR verisini 3D uzayda büküp) doğrusal olarak ayrılabilir hale getiriyoruz."
    },
    topics: [
      { emoji: '➡️', title: 'Verinin Yolculuğu', desc: 'Girdi katmanından başlayıp gizli katmanlar üzerinden geçerek çıktıya ulaşma.' },
      { emoji: '📐', title: 'Matris Mimarisi', desc: 'Nöron hesaplamalarının hızlanması için tüm girdilerin matris çarpımlarına dökülmesi.' },
      { emoji: '⚙️', title: 'Gizli Katmanlar', desc: 'Girdi verisindeki gizli kalıpları ve özellikleri öğrenen ara katmanlar.' },
      { emoji: '❌', title: 'XOR Sınırı', desc: 'Tek katmanlı perceptronların sınırını gösteren ve yapay zeka kışını başlatan klasik problem.' },
      { emoji: '🛠️', title: 'XOR Çözümü', desc: 'En az bir gizli katman eklenerek doğrusal olmayan sınırların başarıyla çözülmesi.' },
      { emoji: '📦', title: 'Batch Boyutu', desc: 'Ağa aynı anda verilen örnek sayısı. Bellek ve hız optimizasyonu sağlar.' }
    ],
    timeline: [
      { year: 'Girdi Katmanı', title: 'Veri Girişi', desc: 'X girdileri matris olarak yüklenir' },
      { year: 'Gizli Katman', title: 'Özellik Çıkarımı', desc: 'z1 = X.W1 + b1 ve a1 = relu(z1)' },
      { year: 'Çıktı Katmanı', title: 'Karar / Tahmin', desc: 'z2 = a1.W2 + b2 ve y_pred = sigmoid(z2)' },
      { year: 'Hata Değerlendirme', title: 'Kayıp Karşılaştırması', desc: 'Tahminlerin gerçek etiketlerle kıyaslanması' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Girdi Matrisi (X)', sub: 'Boyut: [Batch, Girdi_Sayısı]' },
      { emoji: '✖️', label: 'Ağırlık Matrisi W1', sub: 'Girdileri gizli nöronlara bağlar' },
      { emoji: '⚡', label: 'Aktivasyon (ReLU)', sub: 'Doğrusal olmama filtresi' },
      { emoji: '✖️', label: 'Ağırlık Matrisi W2', sub: 'Gizli katmanı çıktıya bağlar' },
      { emoji: '📤', label: 'Çıktı Vektörü (Y_pred)', sub: 'Tahmin olasılıkları' }
    ],
    code: `import numpy as np

# Çok katmanlı ağda İleri Yayılım (Forward Propagation)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]]) # Girdiler (XOR)
y = np.array([[0], [[1]], [[1]], [0]])          # Hedef Çıktılar

# Ağırlıkların rastgele başlatılması (Rastgelelik öğrenme için şarttır)
np.random.seed(42)
W1 = np.random.randn(2, 3) # 2 girdi -> 3 gizli nöron
b1 = np.zeros((1, 3))
W2 = np.random.randn(3, 1) # 3 gizli nöron -> 1 çıktı nöron
b2 = np.zeros((1, 1))

# İleri yayılım fonksiyonu
def forward_prop(X):
    z1 = np.dot(X, W1) + b1
    a1 = np.maximum(0, z1) # ReLU
    z2 = np.dot(a1, W2) + b2
    a2 = 1 / (1 + np.exp(-z2)) # Sigmoid
    return a1, a2

a1, y_pred = forward_prop(X)
print("Gizli Katman Çıktısı:\\n", a1)
print("Final Tahminleri:\\n", y_pred)`,
    takeaways: [
      { text: 'İleri yayılım, modelin mevcut parametrelerle girdi verisinden tahmin üretme işlemidir.', color: T.C.acc },
      { text: 'Ağırlık matrislerinin boyut eşleşmesi (dot product kuralları) mimari tasarımın temelidir.', color: T.C.sec },
      { text: 'Gizli katmanlar, girdi uzayını bükerek karmaşık sınıfları doğrusal ayrışabilir hale getirir.', color: T.C.pri }
    ],
    quote: 'Derin öğrenmenin gücü, her gizli katmanın bir önceki katmanın çıktısını daha soyut bir kavrama dönüştürmesinde yatar.',
    filename: '03_ileri_yayilim.pptx'
  },
  {
    id: 4,
    title: 'Kayıp (Loss) Fonksiyonları',
    subtitle: 'Derin Öğrenme Temelleri — Bölüm 1',
    section: 'DL TEMELLERİ',
    analogy: {
      problem: "Kör Eğitim: Model tahmin yapıyor ama yaptığı hatanın büyüklüğünü ve yönünü tam olarak ölçemiyoruz. Ağırlıkları ne kadar değiştireceğimiz belirsiz.",
      approach: "Hedef Tahtası Analojisi: Ok atan bir sporcunun merkeze olan uzaklığı hatadır. Merkeze yaklaştıkça hata azalır. Hatayı sadece 'ıskaladın' diye değil, '12 cm soldasın' diye ölçmeliyiz.",
      solution: "Kayıp Matematiksel Formülü: Regresyonda mesafelerin karesiyle (MSE), sınıflandırmada olasılıkların logaritmasıyla (Cross-Entropy) hatayı kesin olarak ölçüyoruz."
    },
    topics: [
      { emoji: '📉', title: 'Kayıp Fonksiyonu', desc: 'Modelin yaptığı hatayı tek bir skora indirgeyen matematiksel fonksiyon.' },
      { emoji: '📐', title: 'MSE (Ortalama Kare Hata)', desc: 'Tahmin ve gerçek değer farklarının karelerinin ortalaması. Regresyonda standarttır.' },
      { emoji: '🧬', title: 'Binary Cross-Entropy', desc: '0 veya 1 şeklindeki ikili sınıflandırmada olasılık kaybını hesaplar.' },
      { emoji: '📊', title: 'Categorical Cross-Entropy', desc: 'Çok sınıflı problemlerde (örneğin kedi, köpek, kuş) olasılık kaybını ölçer.' },
      { emoji: '⚡', title: 'Logaritmik Ceza', desc: 'Yanlış sınıfa %99 güvenle tahmin yapan modele katlanarak artan ceza puanı kesilmesi.' },
      { emoji: '⚙️', title: 'Gradyan Uyumu', desc: 'Türevi kolay hesaplanabilen fonksiyonlar seçilerek optimizasyonun kolaylaştırılması.' }
    ],
    timeline: [
      { year: 'Hata Ölçümü', title: 'Tahmin ve Gerçek Karşılaştırması', desc: 'y ve y_pred farkı hesaplanır' },
      { year: 'Kare Alma / Log', title: 'Hatanın Cezalandırılması', desc: 'Hata büyükse ceza katlanarak artırılır' },
      { year: 'Ortalama Alma', title: 'Genel Hata Skoru', desc: 'Tüm batch için tek bir kayıp skoru üretilir' },
      { year: 'Türev (Gradyan)', title: 'Geriye Doğru Yön tayini', desc: 'Kayıp fonksiyonunun türevi parametrelere taşınır' }
    ],
    pipeline: [
      { emoji: '📤', label: 'Tahmin Olasılıkları', sub: '[0.1, 0.7, 0.2] gibi softmax çıktıları' },
      { emoji: '🎯', label: 'One-Hot Etiketler', sub: '[0, 1, 0] gerçek sınıf' },
      { emoji: '⚖️', label: 'Cross-Entropy Formülü', sub: '-sum(y_true * log(y_pred))' },
      { emoji: '📉', label: 'Kayıp Skoru (Loss)', sub: 'Sıfıra ne kadar yakınsa o kadar iyi' },
      { emoji: '🔄', label: 'Türev Akışı', sub: 'y_pred - y_true gradyanı ile güncelleme' }
    ],
    code: `import numpy as np

# Kayıp fonksiyonları ve NumPy uygulamaları
def mean_squared_error(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

def binary_cross_entropy(y_true, y_pred):
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15) # Sıfır logaritma hatasını engellemek için
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

def categorical_cross_entropy(y_true, y_pred):
    y_pred = np.clip(y_pred, 1e-15, 1.0)
    return -np.sum(y_true * np.log(y_pred)) / y_true.shape[0]

# Örnek Test
y_t = np.array([[0, 1, 0]]) # Gerçek: Sınıf 2
y_p = np.array([[0.05, 0.85, 0.10]]) # Tahmin: Sınıf 2 yüksek güven
print("Categorical Cross-Entropy Loss:", categorical_cross_entropy(y_t, y_p))`,
    takeaways: [
      { text: 'Kayıp fonksiyonu, ağın ne kadar iyi öğrendiğini ölçen objektif bir kriterdir.', color: T.C.acc },
      { text: 'MSE, aykırı değerleri (outliers) kare alma işleminden dolayı çok daha sert cezalandırır.', color: T.C.sec },
      { text: 'Doğru kayıp fonksiyonu seçilmezse, model doğru yönde güncellenemez ve öğrenme gerçekleşmez.', color: T.C.pri }
    ],
    quote: 'Kayıp fonksiyonu, modelin kendi hatalarını görerek onları düzeltmesini sağlayan aynadır.',
    filename: '04_loss_fonksiyonlari.pptx'
  },
  {
    id: 5,
    title: 'Geri Yayılım ve Optimizasyon',
    subtitle: 'Derin Öğrenme Temelleri — Bölüm 1',
    section: 'DL TEMELLERİ',
    analogy: {
      problem: "Karmaşık Hata Dağıtımı: Çıktıdaki hatayı biliyoruz fakat bu hatadan 3 katman gerideki bir nöronun ne kadar sorumlu olduğunu bulamıyoruz.",
      approach: "Haber Zinciri Analojisi: Genel müdür (çıktı) bir hata fark eder. Hatayı müdüre (katman 2), müdür şefe (katman 1), şef ise işçiye (girdi) zincirleme olarak aktarır. Herkes kendi payına düşen uyarıyı alır.",
      solution: "Zincir Kuralı & Adam: Zincirleme türev alarak (Chain Rule) hatayı geriye doğru taşırız. Adam optimizer ile her parametrenin güncelleme hızını kendi gradyan geçmişine göre ayarlarız."
    },
    topics: [
      { emoji: '🔄', title: 'Geri Yayılım', desc: 'Çıktı hatasını geriye doğru katman katman dağıtarak tüm ağırlıkların hatadaki payını hesaplama.' },
      { emoji: '🧬', title: 'Zincir Kuralı (Chain Rule)', desc: 'Matematikte bileşik fonksiyonların türevi. Gradyanların geriye doğru çarpılarak iletilmesini sağlar.' },
      { emoji: '📉', title: 'SGD Optimizasyonu', desc: 'Ağırlıkları gradyanın gösterdiği en hızlı azalış yönünde güncelleyen temel algoritma.' },
      { emoji: '⚡', title: 'Momentum Kavramı', desc: 'Önceki güncellemelerin hızını koruyarak yerel minimumlardan (local minima) kurtulmayı sağlayan ivme.' },
      { emoji: '🚀', title: 'Adam Algoritması', desc: 'Momentum ve RMSprop kütüphanelerinin adaptif öğrenme hızı birleşimi.' },
      { emoji: '⚠️', title: ' Gradyan Patlaması', desc: 'Türev çarpımlarının çok büyümesi veya çok küçülerek ağın öğrenmeyi durdurması.' }
    ],
    timeline: [
      { year: 'Hata Dağıtımı', title: 'Çıkış Katmanı Gradyanı', desc: 'dL/dY_pred hesaplanır' },
      { year: 'Zincir Çarpımı', title: 'Gizli Katman Gradyanları', desc: 'Katman türevleri geriye doğru çarpılır' },
      { year: 'Parametre Gradyanı', title: 'Ağırlık ve Bias Türevleri', desc: 'dL/dW ve dL/db hesaplanır' },
      { year: 'Optimizer Adımı', title: 'Güncelleme ve Kayıt', desc: 'Ağırlıklar yeni değerlerine güncellenir' }
    ],
    pipeline: [
      { emoji: '➡️', label: 'İleri Yayılım', sub: 'Kayıp değeri hesaplanır' },
      { emoji: '📐', label: 'Zincir Kuralı', sub: 'Türevlerin çarpılması' },
      { emoji: '🔄', label: 'Gradyan Hesaplama', sub: 'W ve b için türevler' },
      { emoji: '⚡', label: 'Momentum & RMSprop', sub: 'Hız ve ölçeklendirme' },
      { emoji: '💾', label: 'Güncelleme', sub: 'W = W - lr * m / sqrt(v)' }
    ],
    code: `import numpy as np

# Basit bir geriye yayılım ve SGD/Adam güncelleme adımları
W = np.random.randn(2, 2)
dW = np.random.randn(2, 2)  # Hesaplanan gradyanlar
lr = 0.01

# 1. Stochastic Gradient Descent (SGD)
W_sgd = W.copy()
W_sgd -= lr * dW

# 2. Adam Optimizer (Basit Akış)
m = np.zeros_like(W)
v = np.zeros_like(W)
beta1, beta2 = 0.9, 0.999
eps = 1e-8

m = beta1 * m + (1 - beta1) * dW
v = beta2 * v + (1 - beta2) * (dW ** 2)
m_hat = m / (1 - beta1) # Bias düzeltmeleri
v_hat = v / (1 - beta2)
W_adam = W - lr * m_hat / (np.sqrt(v_hat) + eps)
print("Adam Güncellemesi Sonrası W:\\n", W_adam)`,
    takeaways: [
      { text: 'Geri yayılım (Backpropagation) bir öğrenme algoritması değil, sadece verimli gradyan hesaplama yöntemidir.', color: T.C.acc },
      { text: 'Optimizasyon, gradyanları kullanarak hatayı minimize edecek parametreleri bulma sürecidir.', color: T.C.sec },
      { text: 'Gradyan yok olması (vanishing gradients) aktivasyon fonksiyonları ve ağırlık ilklendirmeleriyle çözülür.', color: T.C.pri }
    ],
    quote: 'Geri yayılım, sinir ağlarının geçmiş hatalarını analiz ederek gelecekte daha doğru kararlar almasını sağlayan mekanizmadır.',
    filename: '05_geri_yayilim_optimizasyon.pptx'
  },
  {
    id: 6,
    title: 'MLP ve Iris Sınıflandırma',
    subtitle: 'Keras ile Uygulama — Bölüm 2',
    section: 'KERAS UYGULAMA',
    analogy: {
      problem: "Manuel Kodlama Zorluğu: Büyük ağlarda matris türevlerini ve ileri/geri yayılımı elle kodlamak hataya çok açık ve binlerce satır kod gerektiriyor.",
      approach: "Lego Seti Analojisi: Keras bize hazır tuğlalar (katmanlar, optimizerlar, kayıp fonksiyonları) sunar. Biz sadece bu lego parçalarını üst üste dizerek modeli inşa ederiz.",
      solution: "Keras Sequential & Iris: Iris veri setini yükleyip, Keras Sequential API ile 3 katmanlı bir MLP modeli kuruyoruz. model.fit() ile eğitimi tek satırda başlatıyoruz."
    },
    topics: [
      { emoji: '🏗️', title: 'Keras Yapısı', desc: 'TensorFlow üzerinde çalışan, hızlı deneme ve prototipleme sağlayan yüksek seviyeli kütüphane.' },
      { emoji: '📋', title: 'Sequential API', desc: 'Katmanların tek bir sıra halinde, uç uca eklendiği en basit model mimarisi.' },
      { emoji: '🧬', title: 'Dense Katmanı', desc: 'Tam bağlantılı (fully-connected) katman. Her nöron bir önceki katmanın tüm çıktılarını girdi olarak alır.' },
      { emoji: '🧹', title: 'Veri Ön İşleme', desc: 'Iris veri setinin normalizasyonu ve etiketlerin One-Hot encoding ile kategorik matrise dönüştürülmesi.' },
      { emoji: '🏋️', title: 'Model Derleme', desc: 'Compile adımında optimizer (adam), loss (categorical_crossentropy) ve metriklerin (accuracy) atanması.' },
      { emoji: '📊', title: 'Eğitim & Test', desc: 'Fit fonksiyonu ile epochs (tekrar sayısı) ve batch_size (yığın boyutu) belirtilerek modelin eğitilmesi.' }
    ],
    timeline: [
      { year: 'Veri Hazırlama', title: 'Normalizasyon & Bölme', desc: 'Veriler ölçeklenir ve Train/Test olarak ayrılır' },
      { year: 'Model Kurma', title: 'Sequential Katmanlar', desc: 'Dense katmanları modele eklenir' },
      { year: 'Derleme (Compile)', title: 'Parametre Eşleme', desc: 'Optimizer, Loss ve Metrikler tanımlanır' },
      { year: 'Eğitim (Fit)', title: 'Modelin Eğitilmesi', desc: 'Epochs ve Batch parametreleriyle eğitim başlar' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Veri Kümesi', sub: 'Iris çiçeği 4 özellik (çanak, taç yaprak boy/en)' },
      { emoji: '🧹', label: 'Ön İşleme', sub: 'MinMax / Standart Ölçekleme ve One-Hot Kodlama' },
      { emoji: '🏗️', label: 'Model Tasarımı', sub: 'Input(4) -> Dense(10, relu) -> Dense(3, softmax)' },
      { emoji: '🚀', label: 'Compile & Fit', sub: 'Adam + Categorical Crossentropy ile eğitim' },
      { emoji: '📤', label: 'Metrik Analizi', sub: 'Doğruluk (Accuracy) ve Kayıp grafikleri' }
    ],
    code: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# 1. Veri Hazırlama ve Ön İşleme
iris = load_iris()
scaler = StandardScaler()
X = scaler.fit_transform(iris.data) # Girdileri normalize et
encoder = OneHotEncoder(sparse_output=False)
y = encoder.fit_transform(iris.target.reshape(-1, 1)) # One-Hot encoding

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Keras Model Mimarisi
model = Sequential([
    Dense(8, activation='relu', input_shape=(4,)),
    Dense(8, activation='relu'),
    Dense(3, activation='softmax') # 3 Çiçek sınıfı olasılığı
])

# 3. Derleme ve Eğitim
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=80, batch_size=4, validation_split=0.1)`,
    takeaways: [
      { text: 'Keras, derin öğrenme projelerinde geliştirme süresini 10 kat kısaltan standart bir endüstri aracıdır.', color: T.C.acc },
      { text: 'Sınıflandırma modellerinde son katmanda mutlaka sınıfların sayısı kadar nöron ve uygun aktivasyon olmalıdır.', color: T.C.sec },
      { text: 'Aşırı öğrenmeyi (overfitting) engellemek için eğitim verisinin bir kısmı validasyon (doğrulama) için ayrılmalıdır.', color: T.C.pri }
    ],
    quote: 'Keras, karmaşıklığı soyutlayarak geliştiricinin mimari tasarıma ve probleme odaklanmasını sağlar.',
    filename: '06_iris_sinir_agi.pptx'
  },
  {
    id: 7,
    title: 'MNIST Rakam Tanıma & Gradio',
    subtitle: 'Keras ile Uygulama — Bölüm 2',
    section: 'KERAS UYGULAMA',
    analogy: {
      problem: "Terminal Sınırı: Eğittiğimiz model sadece python terminalinde siyah ekran üzerinde çalışıyor. Gerçek kullanıcılar çizim yaparak modeli test edemiyor.",
      approach: "Resim Çizim Tahtası Analojisi: Kullanıcının önüne bir tuval koyacağız. Kullanıcı fareyle rakam çizecek, biz arka planda resmi piksel matrisine çevirip modele soracağız.",
      solution: "Gradio Arayüzü: Keras ile el yazısı rakam tanıma (MNIST) modelini eğitip kaydediyoruz. Gradio Sketchpad bileşeniyle internet tarayıcısında çalışan bir demo açıyoruz."
    },
    topics: [
      { emoji: '✍️', title: 'MNIST Klasik Verisi', desc: 'Yapay zekanın "Hello World"ü. 28x28 boyutunda 70.000 el yazısı rakam görüntüsü.' },
      { emoji: '🧹', title: 'Görüntü Normalizasyonu', desc: 'Piksel değerlerini (0-255) 255\'e bölerek 0.0 - 1.0 arasına sıkıştırma.' },
      { emoji: '📦', title: 'Flatten (Düzleştirme)', desc: '2D piksel matrisini Dense katmanının anlayacağı 784 elemanlı düz bir vektöre açma.' },
      { emoji: '💾', title: 'Model serialization', desc: 'Eğitilen modeli tüm ağırlıkları ve katman yapısıyla h5 veya keras formatında diske kaydetme.' },
      { emoji: '🚀', title: 'Gradio Kütüphanesi', desc: 'Python kodlarıyla hızlıca web arayüzleri ve interaktif demolar oluşturma kütüphanesi.' },
      { emoji: '🎨', title: 'Sketchpad Entegrasyonu', desc: 'Kullanıcının çizdiği resmi anlık olarak alan ve model tahminiyle eşleyen web bileşeni.' }
    ],
    timeline: [
      { year: 'Veri & Eğitim', title: 'MNIST MLP Eğitimi', desc: '28x28 görüntülerle model eğitilir' },
      { year: 'Kaydetme', title: 'Modeli Diske Yazma', desc: 'model.save("mnist_model.h5")' },
      { year: 'Arayüz Fonksiyonu', title: 'Köprü Fonksiyonu Yazma', desc: 'Resmi alıp model formatına sokan python kodu' },
      { year: 'Gradio Launch', title: 'Yerel Sunucu Başlatma', desc: 'Tarayıcıda arayüzün açılması' }
    ],
    pipeline: [
      { emoji: '📥', label: 'MNIST Görüntü', sub: '784 girdi pikseli' },
      { emoji: '🏗️', label: 'MLP Modeli', sub: 'Dense(128, relu) -> Dense(10, softmax)' },
      { emoji: '💾', label: 'Model Kaydetme', sub: 'h5 dosyası olarak diske yazım' },
      { emoji: '🎨', label: 'Gradio Arayüz', sub: 'Sketchpad girdisi' },
      { emoji: '📤', label: 'Tahmin Etiketi', sub: 'En yüksek olasılıklı rakam' }
    ],
    code: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
import gradio as gr

# 1. MNIST Model Eğitimi ve Kaydedilmesi
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.mnist.load_data()
X_train, X_test = X_train / 255.0, X_test / 255.0

model = Sequential([
    Flatten(input_shape=(28, 28)),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=5, batch_size=32)
model.save('mnist_model.h5')

# 2. Gradio Web Arayüzü Bağlantısı
loaded_model = tf.keras.models.load_model('mnist_model.h5')

def predict_digit(image):
    # Gradio görüntüyü 28x28 numpy array olarak geçirir
    image = image.reshape(1, 28, 28) / 255.0
    preds = loaded_model.predict(image)[0]
    return {str(i): float(preds[i]) for i in range(10)}

gr.Interface(fn=predict_digit, inputs="sketchpad", outputs="label").launch()`,
    takeaways: [
      { text: 'Flatten katmanı, görüntü verilerinin mekansal yapısını düzleştirir fakat parametre sayısını çok artırır.', color: T.C.acc },
      { text: 'Model kaydetme ve yükleme işlemleri, modelin canlı sistemlere (production) entegrasyonunda zorunludur.', color: T.C.sec },
      { text: 'Gradio, yapay zeka modellerini teknik olmayan paydaşlara sunmak ve test ettirmek için ideal bir araçtır.', color: T.C.pri }
    ],
    quote: 'Kullanıcının dokunabildiği ve test edebildiği yapay zeka uygulamaları, gerçek dünya değerini bulmuş demektir.',
    filename: '07_gradio_rakam_tanima.pptx'
  },
  {
    id: 8,
    title: 'CNN ve Giysi Sınıflandırma',
    subtitle: 'İleri Görüntü İşleme — Bölüm 3',
    section: 'BİLGİSAYARLI GÖRÜ',
    analogy: {
      problem: "Parametre Patlaması & Konum Hassasiyeti: MLP modellerinde resimdeki nesnenin yeri biraz değiştiğinde model şaşırır. Ayrıca büyük resimlerde milyonlarca ağırlık oluşur.",
      approach: "Büyüteçli Dedektif Analojisi: Dedektif resmin tamamına birden bakmaz. Küçük bir büyüteçle (filtre) resmin üzerinde adım adım gezinerek kenarları, dokuları ve desenleri arar.",
      solution: "Conv2D & Pooling: Resmin üzerinde gezinen filtrelerle (Conv2D) yerel özellikleri çıkarıp, MaxPooling ile bu özellikleri küçülterek Fashion-MNIST giysilerini CNN ile sınıflandırıyoruz."
    },
    topics: [
      { emoji: '👕', title: 'Fashion-MNIST', desc: '10 farklı giysi kategorisinden oluşan, MNIST\'e göre daha zorlu görsel sınıflandırma veri seti.' },
      { emoji: '⚠️', title: 'MLP Yetersizliği', desc: 'Düzleştirilmiş görüntülerde mekansal (spatial) komşuluk bilgisinin tamamen kaybolması.' },
      { emoji: '🔍', title: 'Conv2D (Evrişim)', desc: 'Görüntünün üzerinde gezinen filtreler sayesinde kenar, köşe, doku gibi özellikleri yakalama.' },
      { emoji: '📐', title: 'MaxPooling2D', desc: 'Resmin boyutunu yarıya indirerek hem işlem yükünü azaltma hem de öteleme dayanıklılığı sağlama.' },
      { emoji: '🏗️', label: 'Feature Maps', desc: 'Filtrelerin görüntüden çıkardığı özellik haritaları. Modelin neyi gördüğünü gösterir.' },
      { emoji: '📊', title: 'Mimarilerin Kıyası', desc: 'CNN modellerinin MLP\'ye göre çok daha az parametreyle çok daha yüksek başarı elde etmesi.' }
    ],
    timeline: [
      { year: 'Görüntü Girişi', title: '3 Boyutlu İmaj matrisi', desc: 'Genişlik, Yükseklik ve Kanal (RGB/Gray)' },
      { year: 'Evrişim (Conv)', title: 'Filtre Gezdirme', desc: 'Kenarlar ve temel desenler tespit edilir' },
      { year: 'Havuzlama (Pool)', title: 'Özellik Küçültme', desc: 'En belirgin piksel seçilerek boyut küçültülür' },
      { year: 'Tam Bağlantı', title: 'Sınıflandırma Aşaması', desc: 'Özellikler düzleştirilip Dense katmanına aktarılır' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Girdi Görüntüsü', sub: '28x28 grayscale Fashion image' },
      { emoji: '🔍', label: 'Conv2D Katmanı', sub: '32 adet 3x3 boyutunda özellik filtresi' },
      { emoji: '📐', label: 'MaxPooling', sub: '2x2 havuzlama ile boyut 14x14 e düşer' },
      { emoji: '🧹', label: 'Flatten Katmanı', sub: 'Özellikleri tek boyuta düzleştir' },
      { emoji: '📤', label: 'Dense & Softmax', sub: '10 giysi sınıfı için olasılıklar' }
    ],
    code: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

# Fashion-MNIST için CNN Mimarisi
model = Sequential([
    # Girdi: 28x28 boyutunda tek kanallı (grayscale) görüntüler
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)), # Görüntüyü 13x13 e düşürür
    
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)), # Görüntüyü 5x5 e düşürür
    
    Flatten(), # 5x5x64 = 1600 elemanlı vektör
    Dense(64, activation='relu'),
    Dense(10, activation='softmax') # 10 sınıf
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()`,
    takeaways: [
      { text: 'CNN, görüntünün piksel konumlarından bağımsız olarak nesneleri tanıma (translation invariance) yeteneğine sahiptir.', color: T.C.acc },
      { text: 'İlk konvolüsyon katmanları kenarları öğrenirken, derinleştikçe göz, tekerlek gibi karmaşık şekilleri öğrenir.', color: T.C.sec },
      { text: 'MaxPooling, parametre sayısını dramatik şekilde düşürerek modelin aşırı öğrenmesini engeller.', color: T.C.pri }
    ],
    quote: 'Evrişim katmanları yapay zekaya göz, havuzlama katmanları ise odaklanma yeteneği verir.',
    filename: '08_cnn_giysi_siniflandirma.pptx'
  },
  {
    id: 9,
    title: 'Transfer Learning & Özel Veri Setleri',
    subtitle: 'İleri Görüntü İşleme — Bölüm 3',
    section: 'BİLGİSAYARLI GÖRÜ',
    analogy: {
      problem: "Veri Kıtlığı: Kendi çektiğimiz sadece 100 çiçek fotoğrafıyla sıfırdan bir CNN eğitmek istiyoruz. Model hemen overfitting (ezberleme) oluyor, doğruluk %40\'ı geçmiyor.",
      approach: "Usta-Çırak Analojisi: Dünyadaki tüm nesneleri (araba, kedi, insan) görmüş ve tanımış usta bir ressamın (Imagenet modeli) görsel tecrübesini alıp, çırağa sadece çiçekleri ayırt etmeyi öğretiyoruz.",
      solution: "MobileNetV2 Transferi: Milyonlarca resimle eğitilmiş MobileNetV2\'nin ağırlıklarını dondurup, üstüne kendi çiçek sınıflandırma katmanımızı ekliyoruz. Data Augmentation ile veriyi çoğaltıp eğitiyoruz."
    },
    topics: [
      { emoji: '🔄', title: 'Transfer Learning', desc: 'Önceden çok büyük veri setlerinde (Imagenet) eğitilmiş modellerin bilgilerini yeni problemlere taşıma.' },
      { emoji: '🧬', title: 'Imagenet Modelleri', desc: 'MobileNetV2 (mobil uyumlu), ResNet50 (derin artık ağlar), VGG16 gibi ödüllü mimariler.' },
      { emoji: '❄️', title: 'Ağırlıkları Dondurma', desc: 'Hazır modelin eğitilmiş alt katmanlarının (özellik çıkarıcı) ağırlıklarını güncellemeye kapatma (Freeze).' },
      { emoji: '🔥', title: 'Fine-Tuning', desc: 'Modelin alt katmanlarını çok küçük bir öğrenme oranıyla (learning rate) kendi verimiz için hassas eğitme.' },
      { emoji: '🌱', title: 'Data Augmentation', desc: 'Resimleri döndürerek, büyüterek, kaydırarak yapay olarak veri setini zenginleştirme.' },
      { emoji: '🌸', title: 'Özel Veri Setleri', desc: 'Google Colab\'e dışarıdan kendi veri setimizi yükleme ve transfer öğrenme ile eğitme adımları.' }
    ],
    timeline: [
      { year: 'Base Model Seçimi', title: 'Pretrained Mimarinin Yüklenmesi', desc: 'MobileNetV2 ağırlıklarıyla indirilir' },
      { year: 'Dondurma (Freeze)', title: 'Alt Katmanları Koruma', desc: 'base_model.trainable = False' },
      { year: 'Kafa Ekleme', title: 'Yeni Çıktı Katmanı', desc: 'Kendi sınıf sayımıza uygun Dense eklenir' },
      { year: 'Veri Çoğaltma', title: 'Data Augmentation', desc: 'Eğitim verisine rastgele dönüşümler uygulanır' }
    ],
    pipeline: [
      { emoji: '📥', label: 'Özel Görüntüler', sub: 'Az sayıda çiçek/nesne fotoğrafı' },
      { emoji: '🌱', label: 'Augmentation Katmanı', sub: 'Rastgele döndürme, yatay çevirme ve zoom' },
      { emoji: '❄️', label: 'Dondurulmuş MobileNetV2', sub: 'Imagenet özellik çıkarıcı katmanları' },
      { emoji: '➕', label: 'Sınıflandırma Kafası', sub: 'GlobalAveragePooling + Dense(128) + Softmax' },
      { emoji: '📤', label: 'Hassas Eğitim', sub: 'Çok düşük öğrenme oranıyla (lr=1e-4) eğitim' }
    ],
    code: `import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.applications import MobileNetV2

# 1. Önceden Eğitilmiş Taban Modelin Yüklenmesi
base_model = MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights='imagenet')
base_model.trainable = False  # Taban modelin ağırlıklarını dondur

# 2. Veri Artırma (Data Augmentation) Katmanları
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal_and_vertical"),
    layers.RandomRotation(0.2),
    layers.RandomZoom(0.2),
])

# 3. Yeni Model Mimarisi Oluşturma
inputs = layers.Input(shape=(224, 224, 3))
x = data_augmentation(inputs)
x = tf.keras.applications.mobilenet_v2.preprocess_input(x)
x = base_model(x, training=False)
x = layers.GlobalAveragePooling2D()
x = layers.Dense(128, activation='relu')
outputs = layers.Dense(5, activation='softmax') # 5 çiçek sınıfı

model = models.Model(inputs, outputs)
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
              loss='sparse_categorical_crossentropy', metrics=['accuracy'])`,
    takeaways: [
      { text: 'Transfer öğrenme, veri setinin çok küçük olduğu durumlarda bile overfittingi önleyerek yüksek başarı getirir.', color: T.C.acc },
      { text: 'Sıfırdan eğitmek yerine önceden eğitilmiş model kullanmak eğitim süresini ve maliyetini %90 azaltır.', color: T.C.sec },
      { text: 'Fine-tuning yapmadan önce model tabanındaki ağırlıkların dondurulduğundan emin olunmalıdır.', color: T.C.pri }
    ],
    quote: 'Bilgi birikimini aktarmak: Transfer öğrenme, insan zihninin bir alandaki tecrübesini başka bir alana uyarlama yeteneğinin yapay zekadaki karşılığıdır.',
    filename: '09_kendi_fotograflarinla_egitim.pptx'
  }
];

// Sunumları üret
presentationData.forEach(p => {
  console.log(`Detaylı Sunum oluşturuluyor: ${p.title}`);
  const pres = T.createPres(p.title, "Dr. Murat Altun");

  // 1. Cover Slide
  T.addCoverSlide(pres, p.title, p.subtitle, "Dr. Murat Altun", [
    { value: `${p.id}`, label: "UYGULAMA" },
    { value: `${p.topics.length}`, label: "TEMEL KAVRAM" },
    { value: "44", label: "TOPLAM SAAT" }
  ], p.section);

  // 2. Topics Grid Slide (addIconGrid)
  T.addIconGrid(pres, "Eğitim Konuları ve Anahtar Kavramlar", p.section, p.topics);

  // 3. Analoji Slaytı (Pedagojik Yaklaşım - addCaseStudySlide)
  T.addCaseStudySlide(pres, "Pedagojik Yaklaşım: Günlük Hayattan Analoji", p.section, p.analogy);

  // 4. Yol Haritası Slaytı (addTimelineSlide veya addComparisonMatrix)
  T.addTimelineSlide(pres, "Uygulama Adımları ve Yol Haritası", p.section, p.timeline);

  // 5. İş Akış Şeması (Pipeline - addPipelineDiagram)
  T.addPipelineDiagram(pres, "Veri İşleme ve Model Akış Şeması (Pipeline)", p.section, p.pipeline);

  // 6. Kod Slaytı (Koyu Tema Syntax Highlighting)
  const codeSlide = pres.addSlide();
  T.slideHeader(pres, codeSlide, "Python / Keras Uygulama Kodu", p.section, T.C.cream);
  T.addCard(pres, codeSlide, 0.5, 1.1, 9.0, 4.1, { topColor: T.C.pri });
  T.cardTitle(codeSlide, 0.8, 1.3, 8.4, "Jupyter Notebook Kod Örneği", T.C.pri);
  T.addCodeBlock(pres, codeSlide, 0.8, 1.8, 8.4, 3.1, p.code);

  // 7. Çalışmalar & Görevler (addInfoCard3Col)
  T.addInfoCard3Col(pres, "Uygulama Çalışmaları ve Pratik Görevler", p.section, [
    {
      emoji: '🎯',
      title: 'Çalışma Zamanı Görevleri',
      desc: 'Ders esnasında Colab üzerinde tamamlanması gereken görevler.',
      color: T.C.acc,
      items: p.topics.slice(0, 3).map(t => t.title)
    },
    {
      emoji: '📝',
      title: 'Pratik Ev Ödevleri',
      desc: 'Konunun pekişmesi için ders sonrasında yapılacak pratikler.',
      color: T.C.sec,
      items: [
        'Notebook kodlarını baştan sona çalıştırıp doğruluğu gözlemlemek.',
        'Öğrenme parametrelerini (W, b, lr, epochs) değiştirip sonuçları tabloya dökmek.',
        'Olası hataları analiz edip yorum satırlarıyla açıklamak.'
      ]
    },
    {
      emoji: '🚀',
      title: 'Zorlu Challenge Görevleri',
      desc: 'Kendini geliştirmek isteyenler için ek ileri seviye ödevler.',
      color: T.C.pri,
      items: [
        'Kod bloklarındaki algoritmaları fonksiyonel sınıflara (class) dönüştürmek.',
        'Kendi bulduğunuz benzer veri setleri üzerinde modeli test etmek.',
        'Eğitilen modeli GitHub portföyünüze ekleyip README yazmak.'
      ]
    }
  ]);

  // 8. İstatistikler & Özet Skoru (addStatsRow)
  T.addStatsRow(pres, "Uygulama Metrikleri ve Hedefler", p.section, [
    { value: `${p.id * 10}%`, label: "Öğrenme Yoğunluğu", sub: "Konu derinliği" },
    { value: "4.8", label: "Zorluk Derecesi", sub: "10 üzerinden zorluk" },
    { value: "98%", label: "Hedeflenen Başarı", sub: "Model doğruluğu hedefi" }
  ]);

  // 9. Kapanış & Önemli Çıkarımlar (addClosingSlide)
  T.addClosingSlide(pres, "Uygulama Özeti ve Önemli Çıkarımlar", p.takeaways, p.quote, "Dr. Murat Altun");

  // Sunumu kaydet
  const outputPath = path.join(outputDir, p.filename);
  pres.writeFile({ fileName: outputPath })
    .then(file => {
      console.log(`Detaylı sunum kaydedildi: ${file}`);
    })
    .catch(err => {
      console.error(`Kaydederken hata oluştu: ${p.filename}`, err);
    });
});
