import type { Locale } from "@/lib/i18n";

export type ProducersPageContent = {
  demoBadge: string;
  slotHint: string;
  viewProducer: string;
  empty: { title: string; body: string; cta: string };
  demoNote: string;
  guideNote: string;
  branches: string;
  imageCredit: string;
  detail: {
    back: string;
    story: string;
    contact: string;
    address: string;
    openInMaps: string;
    phone: string;
    hours: string;
    products: string;
    links: string;
    noContact: string;
    socials: {
      website: string;
      instagram: string;
      facebook: string;
      x: string;
      youtube: string;
      tiktok: string;
    };
    imageLabel: string;
  };
};

export const producersPage: Record<Locale, ProducersPageContent> = {
  tr: {
    demoBadge: "Örnek içerik",
    slotHint: "Fotoğraf yakında",
    viewProducer: "Üreticiyi gör",
    empty: {
      title: "Üreticiler çok yakında burada",
      body: "GakCoding için hazırlanan kurgusal işletme hikâyeleri burada sergilenir. Projeye bir içerik önerisi gönderebilirsiniz.",
      cta: "Listeye katılın",
    },
    demoNote:
      "Bu işletmelerin adları, hikâyeleri ve ürün sunumları GakCoding için kurgulanmıştır; gerçek kişi veya işletmeleri temsil etmez. Satış ve ödeme yapılmaz.",
    guideNote:
      "İşletme kayıtları proje için hazırlanmış kurgusal örneklerdir. Gerçek firma, patent, tescil veya satış iddiası içermez.",
    branches: "Şubeler",
    imageCredit: "Temsili görsel — yapay zekâ ile üretilmiştir; işletmenin kendi fotoğrafı değildir.",
    detail: {
      back: "Tüm üreticiler",
      story: "Hikâye",
      contact: "İletişim",
      address: "Adres",
      openInMaps: "Haritada aç",
      phone: "Telefon",
      hours: "Çalışma saatleri",
      products: "Ürünler",
      links: "Çevrim içi",
      noContact: "Bu kurgusal işletmenin gerçek adresi, telefonu veya satış kanalı bulunmaz.",
      socials: {
        website: "Web sitesi",
        instagram: "Instagram",
        facebook: "Facebook",
        x: "X",
        youtube: "YouTube",
        tiktok: "TikTok",
      },
      imageLabel: "Üretici fotoğrafı",
    },
  },
  en: {
    demoBadge: "Sample content",
    slotHint: "Photo coming soon",
    viewProducer: "View producer",
    empty: {
      title: "Producers are coming soon",
      body: "Fictional business stories created for GakCoding are presented here. You can send a content suggestion to the team.",
      cta: "Join the list",
    },
    demoNote:
      "These business names, stories and product presentations were created for GakCoding and do not represent real people or businesses. No sales or payments are offered.",
    guideNote:
      "Business records are fictional examples for this project. They do not claim a real company identity, patent, registration or sale.",
    branches: "Branches",
    imageCredit: "Editorial still — generated with AI; not a photograph of the business.",
    detail: {
      back: "All producers",
      story: "Story",
      contact: "Contact",
      address: "Address",
      openInMaps: "Open in maps",
      phone: "Phone",
      hours: "Opening hours",
      products: "Products",
      links: "Online",
      noContact: "This fictional business has no real address, telephone or sales channel.",
      socials: {
        website: "Website",
        instagram: "Instagram",
        facebook: "Facebook",
        x: "X",
        youtube: "YouTube",
        tiktok: "TikTok",
      },
      imageLabel: "Producer photo",
    },
  },
};
