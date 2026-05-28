export interface Week {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  section: string;
  sectionColor: string;
  hours: number;
  topics: string[];
  notebooks: { name: string; desc: string; url?: string }[];
  datasets: string[];
  libraries: string[];
  assignments: string[];
  resources: { label: string; url: string }[];
  pptxFile: string;
  pptxDriveId?: string;
}

export function getPdfFileName(pptxFile: string): string {
  return pptxFile.replace('.pptx', '.pdf');
}

export const weeks: Week[] = [
  {
    id: 1,
    slug: '01',
    title: 'Tek Nöron Nasıl Öğrenir?',
    subtitle: 'Bölüm 1 — Temeller (NumPy ile Sıfırdan)',
    section: 'DERİN ÖĞRENME TEMELLERİ',
    sectionColor: 'bg-accent',
    hours: 4,
    topics: [
      'Yapay zekanın doğuşu ve temel kavramlar',
      'Biyolojik nörondan yapay nörona geçiş',
      'Ağırlık (weight) ve sapma (bias) kavramları',
      'Tahmin ve hata hesabı',
      'Gradyan İniş (Gradient Descent) optimizasyonu',
      'Öğrenme oranı (learning rate) ayarı',
      'NumPy ile tek nöronun adım adım kodlanması',
    ],
    notebooks: [
      { name: '01_tek_noron_pizza.ipynb', desc: 'Pizza sipariş tahmin örneği ile tek nöron kodlaması', url: '' }
    ],
    datasets: ['Sentetik pizza sipariş verisi'],
    libraries: ['numpy', 'matplotlib'],
    assignments: [
      'Farklı öğrenme oranları ile modelin yakınsama hızını gözlemleme',
      'Ağırlık ve bias değerlerini elle değiştirerek hata değişimini inceleme',
    ],
    resources: [
      { label: 'Google Colab Başlangıç Rehberi', url: 'https://colab.research.google.com/' },
      { label: 'NumPy Resmi Dokümantasyonu', url: 'https://numpy.org/doc/' }
    ],
    pptxFile: '01_tek_noron_pizza.pptx',
    pptxDriveId: '',
  },
  {
    id: 2,
    slug: '02',
    title: 'Aktivasyon Fonksiyonları',
    subtitle: 'Bölüm 1 — Temeller (NumPy ile Sıfırdan)',
    section: 'DERİN ÖĞRENME TEMELLERİ',
    sectionColor: 'bg-accent',
    hours: 4,
    topics: [
      'Aktivasyon fonksiyonu nedir ve neden gereklidir?',
      'Doğrusallık (lineerlik) tuzağı ve karmaşık verilerin sınırları',
      'Sigmoid fonksiyonu ve matematiksel ifadesi',
      'ReLU (Rectified Linear Unit) ve Leaky ReLU',
      'Tanh (Hiperbolik Tanjant) fonksiyonu',
      'Softmax fonksiyonu ile çoklu sınıflandırma olasılıkları',
      'Keras ile basit aktivasyon karşılaştırmaları',
    ],
    notebooks: [
      { name: '02_aktivasyon_fonksiyonlari.ipynb', desc: 'Sigmoid, ReLU, Tanh ve Softmax grafiksel gösterimleri ve Keras kıyaslamaları', url: '' }
    ],
    datasets: ['Sentetik sınıflandırma verisi'],
    libraries: ['numpy', 'matplotlib', 'keras', 'tensorflow'],
    assignments: [
      'Farklı aktivasyon fonksiyonlarının türevlerini kodlayıp görselleştirme',
      'Lineer aktivasyon kullanıldığında ağın neden çok katmanlı davranamadığını kanıtlama',
    ],
    resources: [
      { label: 'Deep Learning Activation Functions', url: 'https://keras.io/api/layers/activations/' }
    ],
    pptxFile: '02_aktivasyon_fonksiyonlari.pptx',
    pptxDriveId: '',
  },
  {
    id: 3,
    slug: '03',
    title: 'İleri Yayılım (Forward Propagation)',
    subtitle: 'Bölüm 1 — Temeller (NumPy ile Sıfırdan)',
    section: 'DERİN ÖĞRENME TEMELLERİ',
    sectionColor: 'bg-accent',
    hours: 5,
    topics: [
      'Çok katmanlı ağlarda verinin akış yönü',
      'Matris çarpımı ve ağırlık matrislerinin boyut hesabı',
      'Katmanlar arası veri transferi ve formülizasyon',
      'Batch (yığın) işleme mantığı ve CPU/GPU optimizasyonu',
      'XOR Problemi ve tek katmanlı ağların sınırları',
      'Çok katmanlı ağlar ile XOR probleminin çözümü',
    ],
    notebooks: [
      { name: '03_ileri_yayilim.ipynb', desc: 'XOR problemini çözen çok katmanlı sinir ağında ileri yayılım adımları', url: '' }
    ],
    datasets: ['XOR Veri Seti'],
    libraries: ['numpy', 'matplotlib'],
    assignments: [
      '3 katmanlı bir sinir ağının ileri yayılım matris boyutlarını hesaplama',
      'Ağ girdilerini manuel verip ileri yayılım çıktısını hesaplayan NumPy kodu yazma',
    ],
    resources: [
      { label: 'Matrix Multiplication Interactive', url: 'https://matrixmultiplication.xyz/' }
    ],
    pptxFile: '03_ileri_yayilim.pptx',
    pptxDriveId: '',
  },
  {
    id: 4,
    slug: '04',
    title: 'Kayıp (Loss) Fonksiyonları',
    subtitle: 'Bölüm 1 — Temeller (NumPy ile Sıfırdan)',
    section: 'DERİN ÖĞRENME TEMELLERİ',
    sectionColor: 'bg-accent',
    hours: 4,
    topics: [
      'Hata ölçümü: Modelin ne kadar yanlış yaptığını hesaplama',
      'MSE (Mean Squared Error - Ortalama Kare Hata) ve regresyon',
      'Binary Cross-Entropy (İkili Çapraz Entropi) ve olasılık hesabı',
      'Categorical Cross-Entropy (Çoklu Sınıf Çapraz Entropi)',
      'Kayıp fonksiyonlarının matematiksel türevleri',
      'Hata oranının gradyan hesaplamasındaki rolü',
    ],
    notebooks: [
      { name: '04_loss_fonksiyonlari.ipynb', desc: 'MSE, Binary ve Categorical Cross-Entropy hesaplarının elle ve Keras ile karşılaştırılması', url: '' }
    ],
    datasets: ['Sınıflandırma ve Regresyon tahmin verileri'],
    libraries: ['numpy', 'keras', 'tensorflow'],
    assignments: [
      'Binary Cross-Entropy formülünü NumPy kullanarak sıfırdan yazma',
      'Hatalı tahminlerin kayıp değerini nasıl katlanarak artırdığını grafikleme',
    ],
    resources: [
      { label: 'Keras Loss Functions', url: 'https://keras.io/api/losses/' }
    ],
    pptxFile: '04_loss_fonksiyonlari.pptx',
    pptxDriveId: '',
  },
  {
    id: 5,
    slug: '05',
    title: 'Geri Yayılım ve Optimizasyon',
    subtitle: 'Bölüm 1 — Temeller (NumPy ile Sıfırdan)',
    section: 'DERİN ÖĞRENME TEMELLERİ',
    sectionColor: 'bg-accent',
    hours: 6,
    topics: [
      'Geri Yayılım (Backpropagation) algoritması ve zincir kuralı (chain rule)',
      'Hatanın geriye doğru dağıtılması ve ağırlık güncellemeleri',
      'Gradyan hesaplaması ve türevlerin rolü',
      'Temel optimizasyon yöntemleri: SGD (Stochastic Gradient Descent)',
      'Momentum, RMSprop ve Adam optimizasyon teknikleri',
      'Yerel minimum (local minima) ve eyer noktası (saddle point) tuzakları',
    ],
    notebooks: [
      { name: '05_geri_yayilim_optimizasyon.ipynb', desc: 'Zincir kuralı ile geri yayılım hesabı, SGD ve Adam optimizasyon adımları', url: '' }
    ],
    datasets: ['Sentetik doğrusal olmayan veri setleri'],
    libraries: ['numpy', 'matplotlib'],
    assignments: [
      'Basit bir zincir kuralı türev problemini kağıt üzerinde çözme',
      'Adam optimizer kullanan ve SGD kullanan iki modelin eğitim hızlarını karşılaştırma',
    ],
    resources: [
      { label: 'Visualizing Optimization Algorithms', url: 'https://ruder.io/optimizing-gradient-descent/' }
    ],
    pptxFile: '05_geri_yayilim_optimizasyon.pptx',
    pptxDriveId: '',
  },
  {
    id: 6,
    slug: '06',
    title: 'Çok Katmanlı Algılayıcı (MLP) ve Iris Sınıflandırma',
    subtitle: 'Bölüm 2 — Keras ile Uygulama',
    section: 'KERAS İLE UYGULAMA',
    sectionColor: 'bg-secondary',
    hours: 5,
    topics: [
      'Keras Sequential API ile katman tasarımı',
      'Dense (Tam Bağlantılı) katman parametreleri',
      'Veri ön işleme: Train/Test split ve normalizasyon',
      'Modelin derlenmesi (compile): optimizer, loss ve metrikler',
      'Model eğitimi (fit): epochs, batch_size',
      'Iris çiçek veri seti ile 3 sınıflı sınıflandırma uygulaması',
      'Model performansı değerlendirme (evaluate)',
    ],
    notebooks: [
      { name: '06_iris_sinir_agi.ipynb', desc: 'Iris veri seti ile Keras üzerinde ilk MLP modelinin kurulması ve eğitimi', url: '' }
    ],
    datasets: ['Iris Veri Seti (sklearn)'],
    libraries: ['tensorflow', 'keras', 'pandas', 'scikit-learn'],
    assignments: [
      'Model katman sayısını değiştirerek overfitting durumunu tetikleme',
      'Farklı batch size değerlerinin eğitim süresine etkisini raporlama',
    ],
    resources: [
      { label: 'Keras Sequential Model Guide', url: 'https://keras.io/guides/sequential_model/' }
    ],
    pptxFile: '06_iris_sinir_agi.pptx',
    pptxDriveId: '',
  },
  {
    id: 7,
    slug: '07',
    title: 'MNIST Rakam Tanıma ve Gradio Web Arayüzü',
    subtitle: 'Bölüm 2 — Keras ile Uygulama',
    section: 'KERAS İLE UYGULAMA',
    sectionColor: 'bg-secondary',
    hours: 6,
    topics: [
      'MNIST el yazısı rakam veri seti analizi',
      'Görüntü verilerini düzleştirme (Flatten) ve normalize etme',
      'Çok sınıflı sınıflandırmada Softmax ve Categorical Cross-Entropy entegrasyonu',
      'Eğitilen modeli kaydetme (.h5 veya SavedModel formatı)',
      'Kaydedilen modeli yükleme ve yeni tahminler alma',
      'Gradio kütüphanesi ile web arayüzü oluşturma',
      'Gradio Sketchpad ile çizim tanıma arayüzü tasarımı',
    ],
    notebooks: [
      { name: '07_gradio_rakam_tanima.ipynb', desc: 'MNIST rakam sınıflandırma modeli eğitimi, kaydedilmesi ve Gradio arayüzü ile dağıtılması', url: '' }
    ],
    datasets: ['MNIST Veri Seti (tf.keras.datasets)'],
    libraries: ['tensorflow', 'keras', 'gradio', 'numpy'],
    assignments: [
      'Kendi el yazınızı Gradio Sketchpad ile test edip model başarısını ölçme',
      'Modeli h5 formatında kaydedip yerel bilgisayarda Python ile yükleyip tahmin çalıştırma',
    ],
    resources: [
      { label: 'Gradio Resmi Dokümantasyonu', url: 'https://gradio.app/docs/' },
      { label: 'MNIST Dataset Details', url: 'http://yann.lecun.com/exdb/mnist/' }
    ],
    pptxFile: '07_gradio_rakam_tanima.pptx',
    pptxDriveId: '',
  },
  {
    id: 8,
    slug: '08',
    title: 'CNN (Konvolüsyonel Sinir Ağları) ve Giysi Sınıflandırma',
    subtitle: 'Bölüm 3 — İleri (Görüntü İşleme)',
    section: 'İLERİ BİLGİSAYARLI GÖRÜ',
    sectionColor: 'bg-primary',
    hours: 6,
    topics: [
      'Neden MLP görüntüler için yetersiz kalıyor? Parametre patlaması',
      'Konvolüsyon (Evrişim) işlemi ve filtrelerin/kernel\'lerin rolü',
      'Pooling (Ortaklama) katmanı: Max Pooling ve Average Pooling',
      'Feature Map (Özellik Haritası) görselleştirme',
      'Fashion-MNIST giysi sınıflandırma veri seti',
      'Keras Conv2D ve MaxPooling2D katmanları ile CNN tasarımı',
      'CNN ve MLP modellerinin başarı ve parametre karşılaştırması',
    ],
    notebooks: [
      { name: '08_cnn_giysi_siniflandirma.ipynb', desc: 'Fashion-MNIST veri setiyle CNN modeli kurulması, eğitimi ve MLP ile karşılaştırılması', url: '' }
    ],
    datasets: ['Fashion-MNIST Veri Seti (tf.keras.datasets)'],
    libraries: ['tensorflow', 'keras', 'matplotlib', 'numpy'],
    assignments: [
      'Farklı filtre boyutları (3x3 vs 5x5) kullanarak model başarısını kıyaslama',
      'Konvolüsyon katmanından sonra oluşan özellik haritalarını görselleştirme',
    ],
    resources: [
      { label: 'Convolutional Neural Networks (CNNs) Guide', url: 'https://www.tensorflow.org/tutorials/images/cnn' }
    ],
    pptxFile: '08_cnn_giysi_siniflandirma.pptx',
    pptxDriveId: '',
  },
  {
    id: 9,
    slug: '09',
    title: 'Transfer Learning ve Kendi Fotoğraflarınla Eğitim',
    subtitle: 'Bölüm 3 — İleri (Görüntü İşleme)',
    section: 'İLERİ BİLGİSAYARLI GÖRÜ',
    sectionColor: 'bg-primary',
    hours: 6,
    topics: [
      'Transfer Learning (Transfer Öğrenme) nedir? Az veriyle büyük başarı',
      'Önceden eğitilmiş popüler CNN mimarileri: MobileNetV2, ResNet50, VGG16',
      'Feature Extraction (Özellik Çıkarımı) ve Fine-Tuning farkları',
      'Keras Applications API kullanımı',
      'Data Augmentation (Veri Artırma) ile overfitting önleme',
      'Google Colab\'e kendi veri setini yükleme ve eğitme',
      'TF Flowers veri seti ile çiçek sınıflandırma projesi',
    ],
    notebooks: [
      { name: '09_kendi_fotograflarinla_egitim.ipynb', desc: 'MobileNetV2 tabanlı transfer learning modeli ile çiçek sınıflandırması ve veri artırma teknikleri', url: '' }
    ],
    datasets: ['TF Flowers Veri Seti', 'Kullanıcının yükleyeceği özel görseller'],
    libraries: ['tensorflow', 'keras', 'numpy', 'matplotlib'],
    assignments: [
      'Farklı veri artırma yöntemleri (döndürme, yakınlaştırma) ekleyerek modeli eğitme',
      'MobileNetV2 yerine ResNet50 mimarisini kullanarak doğruluk skorlarını karşılaştırma',
    ],
    resources: [
      { label: 'Keras Transfer Learning Guide', url: 'https://keras.io/guides/transfer_learning/' },
      { label: 'TensorFlow Image Augmentation', url: 'https://www.tensorflow.org/tutorials/images/data_augmentation' }
    ],
    pptxFile: '09_kendi_fotograflarinla_egitim.pptx',
    pptxDriveId: '',
  },
];

export function getWeekBySlug(slug: string): Week | undefined {
  return weeks.find(w => w.slug === slug);
}

export const sectionColors: Record<string, string> = {
  'DERİN ÖĞRENME TEMELLERİ':   'text-accent  border-accent',
  'KERAS İLE UYGULAMA':        'text-secondary border-secondary',
  'İLERİ BİLGİSAYARLI GÖRÜ':   'text-primary border-primary',
};
