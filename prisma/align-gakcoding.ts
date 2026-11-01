/** Idempotent, scoped content migration. Preserves row IDs, order and unrelated CMS records. */
import { PrismaClient } from "../src/generated/prisma";
import { mkdirSync, writeFileSync } from "node:fs";
import { producers } from "../src/data/producers";
import { identifyItems } from "../src/data/identify";
import { story } from "../src/content/story";
import { producers as homeCopy } from "../src/content/home";
import { flattenStrings } from "../src/lib/cms/flatten";
import tr from "../src/dictionaries/tr.json";
import en from "../src/dictionaries/en.json";

const prisma = new PrismaClient();
const previousSlugs = ["gurbuzler", "ece-cerez", "gundogdu-coskun-usta", "tarihi-leblebici", "saray-kuruyemis", "etak", "elazig-yoresel", "kapali-carsi-esnaf"];
const changedKeys = new Set(["hero.lead", "footer.rights", "pages.producers.lead", "producersTeaser.body", "pages.request.lead", "pages.request.success"]);

async function main() {
  const snapshot = {
    producers: await prisma.producer.findMany(),
    copy: await prisma.copyEntry.findMany(),
    chapters: await prisma.storyChapter.findMany(),
    criteria: await prisma.identifyItem.findMany(),
  };
  mkdirSync(".work/pdf-compliance", { recursive: true });
  const backup = `.work/pdf-compliance/content-before-${Date.now()}.json`;
  writeFileSync(backup, JSON.stringify(snapshot, null, 2), { mode: 0o600 });
  const english = new Map(flattenStrings(en).map((v) => [v.key, v.value]));
  await prisma.$transaction(async (tx) => {
    for (const [index, p] of producers.entries()) {
      const old = snapshot.producers.find((row) => row.slug === p.slug || row.slug === previousSlugs[index]);
      if (!old) throw new Error(`Missing expected content row ${index}; no partial update applied.`);
      await tx.producer.update({ where: { id: old.id }, data: {
        slug: p.slug, name: p.name, demo: true, roleTr: p.role?.tr ?? "", roleEn: p.role?.en ?? "",
        taglineTr: p.tagline.tr, taglineEn: p.tagline.en, storyTr: p.story.tr, storyEn: p.story.en,
        city: p.city, address: null, phone: null, website: null, instagram: null, mapUrl: null,
        branches: [], socials: {}, extraLinks: [], products: p.products ?? [], hoursTr: "", hoursEn: "",
      } });
    }
    for (const item of identifyItems) {
      await tx.identifyItem.updateMany({ where: { slug: item.id }, data: { titleTr: item.title.tr, titleEn: item.title.en, bodyTr: item.body.tr, bodyEn: item.body.en } });
    }
    const chapter = story.tr.chapters.find((item) => item.id === "atolye")!;
    const enChapter = story.en.chapters.find((item) => item.id === "atolye")!;
    await tx.storyChapter.updateMany({ where: { slug: "atolye" }, data: { bodyTr: chapter.body, bodyEn: enChapter.body } });
    for (const row of flattenStrings(tr).filter((r) => changedKeys.has(r.key))) {
      const data = { tr: row.value, en: english.get(row.key) ?? row.value };
      await tx.copyEntry.upsert({ where: { key: row.key }, update: data, create: { key: row.key, group: row.key.split(".")[0], ...data } });
    }
    await tx.copyEntry.upsert({ where: { key: "home.producers.lead" }, update: { tr: homeCopy.lead.tr, en: homeCopy.lead.en }, create: { key: "home.producers.lead", group: "home", tr: homeCopy.lead.tr, en: homeCopy.lead.en } });
    await tx.auditLog.create({ data: { action: "align-gakcoding", entity: "content", detail: "Fictionalised eight existing profiles; aligned bilingual notices and factual copy with event brief." } });
  }, { timeout: 30000 });
  console.log("GakCoding content aligned; eight existing profile IDs and unrelated records preserved. Private backup:", backup);
}
main().finally(() => prisma.$disconnect());
