<h1>Context Store</h1>

Context Store, React ile geliştirilmiş bir alışveriş uygulamasıdır. Kullanıcılar, ürünleri kategoriye göre filtreleyebilir, sepete ürün ekleyebilir ve sepetlerinde değişiklik yapabilirler. Uygulama, React Context API ile state yönetimini sağlar.

<h1>Kullanılan Teknolojiler</h1>

- **React**: Uygulama geliştirmek için.
- **React Router**: Sayfalar arası geçiş sağlamak için.
- **React Context API**: Global state yönetimi için.
- **Axios**: API isteklerini gerçekleştirmek için.
- **React Icons**: Simge desteği için.
- **Bootstrap**: Duyarlı tasarım için.
- **React Toastify**: Kullanıcıya işlemler hakkında bilgi vermek için toast bildirimleri.

<h1>Bileşenler</h1>

- **Header**: Üst menü, kategori filtrelemesi ve sepet linkini içerir.
- **Home**: Ürünlerin listelendiği ana sayfa.
- **Basket**: Sepet içeriğinin görüntülendiği sayfa.
- **Card**: Ürünlerin listelendiği kart bileşeni.
- **BasketItem**: Sepet elemanlarının her birinin görüntülendiği bileşen.
- **Total**: Sepetteki ürünlerin toplam fiyatını gösteren bileşen.
- **BasketInfo**: Sepet boş olduğunda gösterilen bilgilendirme bileşeni.

<h1>Context</h1>

- **BasketContext**: Sepetle ilgili işlemleri yönetir.
- **ProductContext**: Ürünlerle ilgili veriyi ve filtrelemeyi yönetir