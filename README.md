# CloudShop - Bulut Tabanlı E-Ticaret Uygulaması

## Proje Hakkında

CloudShop, Bulut Bilişim ve Uygulamaları dersi kapsamında geliştirilmiş bir e-ticaret uygulamasıdır. Proje Node.js, Express.js ve MongoDB Atlas teknolojileri kullanılarak geliştirilmiş ve AWS EC2 üzerinde yayınlanmıştır.

Bu proje ile bulut tabanlı uygulama geliştirme, veritabanı yönetimi ve bulut ortamında dağıtım süreçleri uygulanmıştır.

---

# Tanıtım Videosu
- [İzlemek İçin Tıklayınız.](https://youtu.be/795b_Hu9JM0)

---

## Kullanılan Teknolojiler

### Backend
- Node.js
- Express.js

### Veritabanı
- MongoDB Atlas
- Mongoose

### Bulut Servisleri
- AWS EC2
- MongoDB Atlas

### Versiyon Kontrol
- Git
- GitHub

---

## Proje Özellikleri

### Ürün Yönetimi
- Ürün listeleme
- Yeni ürün ekleme
- Ürün detaylarını görüntüleme

### Sepet İşlemleri
- Sepete ürün ekleme
- Sepetten ürün çıkarma

### Sipariş Yönetimi
- Sipariş oluşturma
- Siparişlerin MongoDB üzerinde saklanması

### Yönetim Paneli
- Admin paneli
- Yeni ürün ekleme ekranı

---

## Proje Yapısı

```text
BLM3522-Proje4
│
├── config/
├── middleware/
├── models/
│   ├── Product.js
│   └── Order.js
│
├── public/
│   ├── app.js
│   └── style.css
│
├── routes/
│   ├── products.js
│   ├── orders.js
│   └── admin.js
│
├── views/
│
├── server.js
├── package.json
├── package-lock.json
└── .env
```

---

## Kurulum

### Projeyi Klonlayın

```bash
git clone https://github.com/muhammetsah1n/BLM3522-Proje4.git
cd BLM3522-Proje4
```

### Bağımlılıkları Kurun

```bash
npm install
```

### Ortam Değişkenlerini Ayarlayın

Proje dizininde `.env` dosyası oluşturun:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### Uygulamayı Çalıştırın

```bash
node server.js
```

veya

```bash
npm run dev
```

---

## API Endpointleri

### Ürünler

#### Tüm Ürünleri Listele

```http
GET /api/products
```

#### Yeni Ürün Ekle

```http
POST /api/products
```

Örnek JSON:

```json
{
  "name": "Laptop",
  "description": "Yüksek performanslı dizüstü bilgisayar",
  "price": 25000,
  "stock": 5
}
```

---

### Siparişler

#### Sipariş Oluştur

```http
POST /api/orders
```

#### Tüm Siparişleri Listele

```http
GET /api/orders
```

---

## AWS Dağıtımı

Proje AWS EC2 üzerinde çalıştırılmıştır.

Kullanılan AWS bileşenleri:

- Amazon EC2
- Security Groups
- Public IPv4 Address

---

## MongoDB Atlas

Proje verileri MongoDB Atlas üzerinde saklanmaktadır.

Kullanılan özellikler:

- Cloud Database
- Cluster Yapısı
- Network Access
- Database Users

