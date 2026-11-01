# GakCoding konu belgesiyle uyum

1 Kasım 2026 tarihli, dört sayfalık “Badem Şekeri — Konu 15” belgesine göre yapılan sınırlı içerik güncellemesi.

| Gereksinim | Uygulama |
| --- | --- |
| Gerçek firma/üretici adı ve ürünü kullanılmaması | Sekiz mevcut kayıt, özgün kurgusal adlar ve kısa iki dilli hikâyelerle değiştirildi. Gerçek telefon, adres, sosyal hesap ve satış bağlantıları bu kayıtlardan kaldırıldı. |
| Kurgunun açık olması | Her profil örnek olarak işaretlenir. Her sayfanın footer’ında Türkçe/İngilizce zorunlu bildirim bulunur; CMS metni bunu kaldıramaz. |
| Örnek çalışma ibaresi | “GakCoding örnek çalışmasıdır” ve İngilizce karşılığı görünürdür. |
| Vişneli çeşit ve limonlu yenilikler | Hikâye bilgi kartlarına konu belgesine bağlantılı açıklamalar eklendi. Gerçek markaya reçete/patent atfedilmez. |
| Başvuru ile tescilin ayrılması | C2026/000095, konu belgesinde aktarılan başvuru olarak açıklanır. Güncel tescil iddiası yapılmaz; resmî portal belirtilir. |
| Logo/amblem ve sağlık iddiası kullanılmaması | Gerçek firma logosu veya coğrafi işaret amblemi eklenmedi. Ürün okuryazarlığı metinlerindeki kesin köken, şeker türü ve kalite genellemeleri düzeltildi. Mevcut alerjen/etiket bilgileri korundu. |
| Özgünlük ve kapsam | Tasarım, animasyonlar, galeri, gezi rehberi, quiz, admin ve talep formları korundu. PDF’de açıkça örnek olarak sunulan sepet/fiyat şeması zorunlu özellik sayılmadı; ödeme eklenmedi. |

Gakkocan aynı kurgu kapsamını kullanır; profilleri gerçek işletme olarak tavsiye etmez. Etkinlik sürümünde kamuya açık üretici sorgusu yalnızca örnek/kurgu kayıtlarını getirir. Yeni kayıtlarda örnek işareti varsayılan açıktır ve admin formunda kural açıklanır.

`prisma/align-gakcoding.ts` mevcut veritabanında kapsamı sınırlı, tekrar çalıştırılabilir bir içerik geçişidir. Önce `.work/pdf-compliance/` altında özel yedek alır; sonra tek transaction ile sekiz profilin kimliklerini ve sırasını koruyarak içeriklerini değiştirir. İlgisiz kayıt, iletişim mesajı veya başvuru silmez. Yeni kurulumun seed kayıtları da aynı kurgusal içeriği kullanır.

Kontrol: `node --import tsx scripts/verify-gakcoding.ts`. Derleme: `npm run build`.
