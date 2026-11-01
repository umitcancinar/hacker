import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type ProducerSocials = {
  instagram?: string;
  facebook?: string;
  x?: string;
  youtube?: string;
  tiktok?: string;
  website?: string;
};

export type ProducerLink = {
  label: Localized;
  url: string;
};

/**
 * Üretici/satıcı veri şeması.
 * Kayıtlar etkinlik kurallarına uygun kurgusal işletme konseptleridir.
 * `demo: true` olan kayıtlar arayüzde "Örnek içerik" etiketi taşır.
 */
export type Producer = {
  slug: string;
  name: string;
  demo?: boolean;
  role?: Localized;
  tagline: Localized;
  story: Localized;
  city: string;
  address?: string;
  branches?: Localized[];
  coordinates?: { lat: number; lng: number };
  website?: string;
  instagram?: string;
  phone?: string;
  image?: string;
  socials?: ProducerSocials;
  extraLinks?: ProducerLink[];
  mapUrl?: string;
  products?: Localized[];
  hours?: Localized;
};

/** GakCoding için özgün olarak kurgulanan işletmeler; gerçek kişi/işletme temsil etmez. */
export const producers: Producer[] = [
  {
    "slug": "gacker-zarhane",
    "name": "Gacker Zarhane",
    "demo": true,
    "role": {
      "tr": "Badem şekeri atölyesi",
      "en": "Almond-candy workshop"
    },
    "tagline": {
      "tr": "Klasik bademin etrafında ince bir hikâye.",
      "en": "A delicate story around a classic almond."
    },
    "story": {
      "tr": "Bu kurgusal atölye, bademin şekerle katman katman kaplanmasını anlatmak için tasarlandı. Klasik beyaz badem şekeri, küçük ikram kutuları ve paylaşma kültürü bu örnek hikâyenin merkezinde. Buradaki ad ve ürün sunumları GakCoding tasarımının parçalarıdır; gerçek bir işletmeyi, reçeteyi veya satış teklifini temsil etmez.",
      "en": "This fictional workshop illustrates almonds coated in delicate sugar layers. Classic white almond candy, small gift boxes and sharing sit at the heart of its story. Its name and product presentations are part of the GakCoding design, not a real business, recipe or sales offer."
    },
    "city": "Elazığ",
    "image": "/producers/prod-white-candy.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-visne-evi",
    "name": "Gacker Vişne Evi",
    "demo": true,
    "role": {
      "tr": "Vişneli ikram konsepti",
      "en": "Sour-cherry confectionery concept"
    },
    "tagline": {
      "tr": "Bademle vişnenin buluştuğu bir kurgu.",
      "en": "An imagined meeting of almonds and sour cherries."
    },
    "story": {
      "tr": "Vişne Evi, Elazığ badem şekerinin vişneli yorumundan esinlenen kurgusal bir işletmedir. Bu konseptte meyvemsi tonlar, küçük tabaklar ve birlikte içilen bir kahve öne çıkar. Hikâye ve ürün seçkisi etkinlik için hazırlanmıştır; herhangi bir gerçek markaya, buluşa, patente veya üretim tesisine ait değildir.",
      "en": "Vişne Evi is a fictional business inspired by the sour-cherry interpretation of Elazığ almond candy. Fruity tones, small dishes and coffee shared together shape the concept. Its story and selection were created for the event and do not belong to a real brand, invention, patent or production facility."
    },
    "city": "Elazığ",
    "image": "/producers/prod-walnut-candy.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-kazan-defteri",
    "name": "Gacker Kazan Defteri",
    "demo": true,
    "role": {
      "tr": "Şekerleme denemeleri",
      "en": "Confectionery exploration"
    },
    "tagline": {
      "tr": "Klasik, vişneli ve limonlu yorumlara açılan bir defter.",
      "en": "A notebook for classic, sour-cherry and lemon interpretations."
    },
    "story": {
      "tr": "Kazan Defteri, badem şekerinin farklı yorumlarını aynı anlatıda buluşturan kurgusal bir atölyedir. Beyaz badem şekeri, vişneli ve limonlu sunum fikirleri bir tasarım seçkisi olarak yan yana gelir. Çeşitler burada gerçek bir işletmenin ürünü olarak tanıtılmaz; fiyat, patent, stok veya sipariş taahhüdü verilmez.",
      "en": "Kazan Defteri is a fictional workshop bringing different almond-candy interpretations into one story. White, sour-cherry and lemon presentation ideas form a design selection. These are not presented as a real business’s products, and no price, patent, stock or ordering commitment is made."
    },
    "city": "Elazığ",
    "image": "/producers/prod-cherry-candy.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-badem-bahcesi",
    "name": "Gacker Badem Bahçesi",
    "demo": true,
    "role": {
      "tr": "Bahçeden ikrama konsepti",
      "en": "Orchard-to-table concept"
    },
    "tagline": {
      "tr": "Daldan tepsiye uzanan temsili bir yolculuk.",
      "en": "An illustrative journey from branch to tray."
    },
    "story": {
      "tr": "Badem Bahçesi, bademin ağaçtaki hâliyle sofradaki ikramını bir araya getiren kurgusal bir dükkândır. Konsept; malzeme seçimi, şeker kaplaması ve özenli sunum üzerine kuruludur. Adı, hikâyesi ve ürün seçkisi proje için oluşturulmuştur. Gerçek bir bahçe, çiftlik veya satış noktası göstermez.",
      "en": "Badem Bahçesi is a fictional shop connecting the almond on its branch with the sweet offered at the table. Ingredient selection, sugar coating and considered presentation shape the concept. Its name, story and selection were created for this project, not to identify a real orchard, farm or shop."
    },
    "city": "Elazığ",
    "image": "/producers/prod-leblebi.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-ikram-odasi",
    "name": "Gacker İkram Odası",
    "demo": true,
    "role": {
      "tr": "Sofra ve hediye konsepti",
      "en": "Table and gifting concept"
    },
    "tagline": {
      "tr": "Bir avuç şeker, paylaşılacak bir sofra.",
      "en": "A handful of sweets and a table to share."
    },
    "story": {
      "tr": "İkram Odası, misafir ağırlama kültürünü badem şekeri üzerinden anlatan kurgusal bir işletmedir. Bir fincan kahvenin yanındaki küçük tabak ve hediye kutusuna yerleşen şekerler, bu tasarımın çıkış noktasıdır. Görseller ve anlatı temsildir; gerçek bir mağaza, teslimat hizmeti veya ticari satış sunulmaz.",
      "en": "İkram Odası is a fictional business exploring hospitality through almond candy. A small dish beside a coffee and sweets tucked into a gift box are its starting points. Its images and story are illustrative, not a real shop, delivery service or commercial sale."
    },
    "city": "Elazığ",
    "image": "/producers/prod-kazan.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-sofra-birligi",
    "name": "Gacker Sofra Birliği",
    "demo": true,
    "role": {
      "tr": "Birlikte üretme fikri",
      "en": "A shared-craft concept"
    },
    "tagline": {
      "tr": "Elazığ’ın ikram kültürüne ortak bir bakış.",
      "en": "A shared look at Elazığ’s serving traditions."
    },
    "story": {
      "tr": "Sofra Birliği, yöresel ikramların aynı sofrada buluşmasını anlatan kurgusal bir topluluktur. Badem şekeri ve şehrin diğer tatları, dayanışma ve paylaşma fikri çevresinde ele alınır. Adı ve hikâyesi yalnızca GakCoding projesine aittir; gerçek bir kooperatif, sertifika veya coğrafi işaret sahibi kuruluşu temsil etmez.",
      "en": "Sofra Birliği is a fictional collective bringing regional treats to one table. Almond candy and other city flavours are explored through sharing and collaboration. Its name and story belong to the GakCoding project, not a real cooperative, certification body or geographical-indication owner."
    },
    "city": "Elazığ",
    "image": "/producers/prod-orcik.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-yol-kutusu",
    "name": "Gacker Yol Kutusu",
    "demo": true,
    "role": {
      "tr": "Hediye kutusu konsepti",
      "en": "Gift-box concept"
    },
    "tagline": {
      "tr": "Şehrin hatırasını taşıyan temsili bir kutu.",
      "en": "An imagined box carrying a memory of the city."
    },
    "story": {
      "tr": "Yol Kutusu, yolculuk sonunda sevdiklerine bir ikram götürme düşüncesinden doğan kurgusal bir girişimdir. Klasik ve vişneli badem şekeri, örnek hediye sunumlarında bir araya gelir. İşletme adı, hikâye ve kutular tasarım amacıyla hazırlanmıştır; gerçek bir e-ticaret sitesi, kargo veya sipariş hizmeti bulunmaz.",
      "en": "Yol Kutusu is a fictional venture imagined around taking a treat home to someone you love. Classic and sour-cherry almond candy meet in illustrative gift presentations. The name, story and boxes are design concepts, not a real online store, shipping or ordering service."
    },
    "city": "Elazığ",
    "image": "/producers/prod-gift.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  },
  {
    "slug": "gacker-carsi-duragi",
    "name": "Gacker Çarşı Durağı",
    "demo": true,
    "role": {
      "tr": "Çarşı kültürü konsepti",
      "en": "Bazaar-culture concept"
    },
    "tagline": {
      "tr": "Bir selamla başlayan tatlı bir mola.",
      "en": "A sweet pause that begins with a greeting."
    },
    "story": {
      "tr": "Çarşı Durağı, Elazığ çarşı kültüründeki sohbeti ve ikramı canlandıran kurgusal bir tezgâhtır. Badem şekerinin hazırlanışı ve paylaşılması, özgün bir işletme hikâyesi içinde yorumlanır. Gerçek bir esnafı veya belirli bir dükkânı anlatmaz. Ziyaret edilecek bir adres ya da kullanılacak satış bağlantısı yoktur.",
      "en": "Çarşı Durağı is a fictional stall evoking conversation and hospitality in Elazığ’s bazaar culture. Preparing and sharing almond candy are interpreted through an original business story. It does not describe a real trader or shop and has no visit address or sales link."
    },
    "city": "Elazığ",
    "image": "/producers/prod-bazaar.jpg",
    "products": [
      {
        "tr": "Klasik badem şekeri · temsili sunum",
        "en": "Classic almond candy · illustrative presentation"
      },
      {
        "tr": "Vişneli badem şekeri · temsili sunum",
        "en": "Sour-cherry almond candy · illustrative presentation"
      }
    ]
  }
];

export const getProducer = (slug: string): Producer | undefined =>
  producers.find((p) => p.slug === slug);

export const mapsUrl = (p: Producer): string | undefined => {
  if (p.demo) return undefined;
  if (p.mapUrl) return p.mapUrl;
  const query = p.coordinates
    ? `${p.coordinates.lat},${p.coordinates.lng}`
    : [p.address, p.city].filter(Boolean).join(", ");
  if (!query) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

export function splitPhones(phone?: string): string[] {
  if (!phone) return [];
  return phone.split(/\s*\/\s*/).map((p) => p.trim()).filter(Boolean);
}
