import assert from "node:assert/strict";
import { producers, mapsUrl } from "../src/data/producers";
import { identifyItems } from "../src/data/identify";
import { candyFacts } from "../src/data/candy-info";
import { projectNotice } from "../src/content/project-notice";
import { buildSystemPrompt } from "../src/lib/assistant-prompt";
import tr from "../src/dictionaries/tr.json";
import en from "../src/dictionaries/en.json";

const oldBrands = /gürbüzler|gurbuzler|ece çerez|ececerez|gündoğdu|gundogdu|coşkun ceylan|saray kuruyemiş|saraykuruyemis|\betak\b|songül sarı|elazigyoresel|tarihi elazığ leblebicisi/i;
assert.equal(producers.length, 8, "Existing directory size is preserved");
assert.equal(new Set(producers.map((p) => p.slug)).size, 8);
for (const p of producers) {
  assert.equal(p.demo, true);
  assert.ok(!oldBrands.test(JSON.stringify(p)));
  assert.ok(!p.website && !p.phone && !p.instagram && !p.address && !mapsUrl(p));
  for (const lang of ["tr", "en"] as const) {
    assert.ok(p.story[lang].trim().split(/\s+/).length <= 80);
    assert.ok(p.tagline[lang]);
    assert.ok(p.story[lang]);
  }
}
assert.ok(projectNotice.tr.includes("GakCoding örnek çalışmasıdır"));
assert.ok(projectNotice.tr.includes("gerçek kişi veya işletmeleri temsil etmez"));
assert.ok(projectNotice.en.includes("fictional"));
assert.ok(candyFacts.some((f) => f.id === "what-elazig-cherry"));
assert.ok(candyFacts.some((f) => f.id === "what-elazig-lemon"));
assert.ok(candyFacts.some((f) => f.body.tr.includes("C2026/000095") && f.body.en.includes("C2026/000095")));
assert.ok(!/kaliteli üreticiler glikoz|ithal bademler.*kuru|hakiki Elazığ/i.test(JSON.stringify(identifyItems)));
for (const lang of ["tr", "en"] as const) {
  const prompt = buildSystemPrompt(lang);
  assert.ok(!oldBrands.test(prompt));
  assert.ok(prompt.includes("fictional"));
}
assert.ok(tr.pages.producers.lead.includes("kurgulanmış"));
assert.ok(en.pages.producers.lead.includes("fictional"));
console.log("GakCoding checks passed: 8 fictional profiles, no real contacts, bilingual notices, original short stories, cherry/lemon and application context, safe product copy, aligned assistant.");
