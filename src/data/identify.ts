import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type IdentifyItem = {
  id: string;
  title: Localized;
  body: Localized;
};

/**
 * Genel ürün okuryazarlığı; kalite, köken veya sağlık garantisi verilmez.
 */
export const identifyCopy: Record<Locale, { title: string; lead: string; source: string }> = {
  tr: { title: "Bir badem şekerini seçerken", lead: "Kaplama, malzeme ve etiket üzerine üç soru. Bunlar bir tescil ya da özgünlük testi değildir; reçeteler ürüne göre değişir.", source: "Gacker · Ürünü tanıma notları" },
  en: { title: "When choosing almond candy", lead: "Three questions about coating, ingredients and labelling. These are not registration or authenticity tests; recipes vary between products.", source: "Gacker · Getting to know the product" },
};
export const identifyItems: IdentifyItem[] = [
  { id: "zar", title: { tr: "Kaplamanın dokusu", en: "The coating’s texture" }, body: { tr: "Elazığ üzerine üretim haberlerinde ince, gevrek şeker kaplaması anlatılır. Kaplamanın kalınlığı ve dokusu reçeteye göre değişebilir; görünüş tek başına köken veya kalite belgesi sayılmaz.", en: "Reports on production in Elazığ describe a thin, crisp sugar coating. Thickness and texture vary with the recipe; appearance alone does not certify origin or quality." } },
  { id: "badem", title: { tr: "Bademin kaynağı", en: "The almond’s source" }, body: { tr: "Bademin çeşidi ve yetiştiği yer hakkında etiket veya üretici açıklamasına bakın. Yerli ya da ithal olmasından tek başına bir kalite sonucu çıkarılamaz; bütün ürünlerin aynı bademi kullandığı varsayılmaz.", en: "Check the label or producer’s information for the almond variety and source. Local or imported origin alone does not establish quality, and different products may use different almonds." } },
  { id: "pancar", title: { tr: "İçindekiler ve alerjenler", en: "Ingredients and allergens" }, body: { tr: "Şeker türü, aroma ve diğer bileşenler ürüne göre değişir. İçindekiler listesini ve badem dahil sert kabuklu meyve alerjenlerini kontrol edin. Pancar şekeri veya başka bir şeker türü kullanılması sağlık yararı ya da tescil anlamına gelmez.", en: "Sugar type, flavourings and other ingredients vary. Check the ingredient list and tree-nut allergens, including almond. Using beet sugar or another sugar does not imply a health benefit or registered status." } },
];
