# Content map — portfolio rebuild

**Source of truth:** the live deployed page (captured byte-exact as `archive/index-legacy.html`, 232,993 bytes) plus the three case-study pages that actually exist. Nothing below is invented. Every string is quoted from an existing file; anything absent is marked `TODO(orsi)`.

**Why the live page and not the repo:** local `main` is 40 commits behind `origin/main`, and `origin/main` is itself not what is deployed. The live page is the only accurate record of current copy.

---

## Card 01 — Tribe / Human-First NLP

| field | value | source |
|---|---|---|
| `eyebrow` | Human-first NLP · People Matching | live `.cs-num` |
| `title` (landing) | Building enough safety for someone to type the thing they actually want. | live `.cs-title` |
| `finding` (case study's own words) | "Three generations of input validation designed — two cut after synching with developers on latency, token cost, and structural reliability. What shipped earned it." | tribe-case-study-final.html |
| `methods` | ⚠️ see note | tribe-case-study-final.html |
| `description` | "This case study documents the complete MVP architecture and human-AI interaction systems designed for handoff." | tribe-case-study-final.html |
| `readTime` | `TODO(orsi): readTime for Tribe` | not present anywhere |
| `schematicSVG` | existing inline SVG (5-node flow: user intent → validation gap → semantic match → anon. reveal → meet up, with "evaluation apprehension" arc) | live index |
| `screenshot` | `tribe/mockup.png` | live index |
| `href` | `tribe/tribe-case-study-final.html` | live index — resolves 200 ✓ |
| `tags` | MVP · Product Design · Human-AI Interaction | live `.cs-tag` |

**⚠️ Methods note.** The case study's testing sections are labelled **"Proposed Testing Plans · Alpha Phase"**, "Alpha Validation Blueprint", "Pre-Launch Lab Testing" — these are *proposed*, not performed. §1 says methods must be ones "the case study says were done". What was actually done:
- Literature-grounded design — Rosenberg (1965) evaluation apprehension, Clark (1996) common ground
- Three generations of input validation, designed and narrowed to one
- Developer feasibility synch (latency, token cost, structural reliability)

`TODO(orsi): confirm which of these three should appear as method labels, or supply the real ones`

---

## Card 02 — Ethical Guardrail / Multi-Modal Feedback

| field | value | source |
|---|---|---|
| `eyebrow` | Multi-modal Feedback Design · LLM Uncertainty | live `.cs-num` |
| `title` | When AI is most uncertain, humans are least equipped to notice | live `.cs-title` |
| `finding` | `TODO(orsi): finding for Guardrail` | **no case-study page exists** |
| `methods` | `TODO(orsi): methods for Guardrail` | no page |
| `description` | `TODO(orsi): description for Guardrail` | no page |
| `readTime` | n/a — no page | — |
| `schematicSVG` | existing inline SVG (human → AI system → guardrail fires / no intervention → haptic + peripheral signal) | live index |
| `screenshot` | `TODO(orsi): screenshot for Guardrail` | none exists |
| `href` | **none** — card shown without a link (your decision) | — |
| `tags` | Human Factors · Human-AI Interaction · **In progress** | live `.cs-tag`, `.cs-tag-wip` |

Live currently links this to `case-study-guardrail.html`, which returns **404**. The new build drops the link, removing the dead end.

---

## Card 03 — Mindure / Career Anxiety Research

| field | value | source |
|---|---|---|
| `eyebrow` | Career Anxiety Research · Dashboard Design | live `.cs-num` |
| `title` (landing) | Giving someone a clear next move when the future feels automated away. | live `.cs-title` |
| `finding` (case study's own words) | "Built to calm the fear. Realised the data was the threat, not the answer." | case-study-mindure-v3.html |
| `methods` | ⚠️ see note | case-study-mindure-v3.html |
| `description` | "When people are worried about losing their jobs, showing them a screen packed with numbers and alerts doesn't inform them. It confirms the fear." | case-study-mindure-v3.html |
| `readTime` | `TODO(orsi): readTime for Mindure` | not present |
| `schematicSVG` | existing inline SVG (attention curve: anxiety triggers → peak cognitive load → window closes) | live index |
| `screenshot` | `Mindure/workcard_casestudy1_thumbnail_nobackground.png` | live index |
| `href` | `case-study-mindure-v3.html` | live index — resolves 200 ✓ |
| `tags` | Research prototype · Human Factors · Human-AI Interaction | live `.cs-tag` |

**⚠️ Methods note.** The case study states plainly: **"No live users, no A/B test."** It also says *"I would start with stress-state research before touching the information architecture"* — future intent, not work done. What was actually done:
- Secondary research (ManpowerGroup Global Talent Barometer 2026; ADP Research *Today at Work*, March 2026)
- Constraint-system design
- AI-generated vs. human-designed comparison

`TODO(orsi): confirm method labels for Mindure`

---

## Card 04 — Ness / Therapy on Artboard

| field | value | source |
|---|---|---|
| `eyebrow` | Therapy on Artboard with Real Time Guidance | live `.cs-num` |
| `title` (landing) | Reaching someone through what they make, when words won't come. | live `.cs-title` |
| `finding` (case study's own words) | Three research themes: **Expression barrier** — "Many people can't accurately describe how they feel in words." · **Creative processing** — "Drawing and visual expression allow people to access emotions faster than writing." · **AI trust is conditional** — "Observation without labelling was consistently more acceptable than diagnosis." | ness-creative-therapy.html |
| `methods` | **User survey (n=16)** · **Usability Test 1** (5 participants, remote, unmoderated) · **Usability Test 2** (same format, improvements validated) | ness-creative-therapy.html — all performed ✓ |
| `description` | "The making is the session. Words come after." | live index / case study |
| `readTime` | `TODO(orsi): readTime for Ness` | not present |
| `schematicSVG` | existing inline SVG (engagement curve with intervention window; "Johnathan speaks here", defended / disengaged edges) | live index |
| `screenshot` | `ness/ness_thumbnail_no_background_casestudy2.png` | live index |
| `href` | `ness/ness-creative-therapy.html` — **corrected** | live links to `case-study-therapy.html` → **404**; this path resolves 200 ✓ |
| `tags` | Product Design · UX/UI · Branding | live `.cs-tag` |

This is the only project with completed primary research. Note it also carries real figures — "100% icon comprehension in Test 2", "100% panel comprehension in Test 2" — which are permissible under §2 since they appear verbatim in the source.

---

## Cards 05–07 — former Snippets (now separate cards, your decision)

These have **no schematic, no methods, no read time, and no case-study page**. Fields marked ⚠️ below are structural gaps, not oversights.

### 05 — Leica
| field | value |
|---|---|
| `eyebrow` | Physical Product · Client Work · Leica |
| `title` | The third version wasn't asked for. It was the one manufactured. |
| `description` | "Three design variants resolving the same manufacturing constraints differently — logo clearance, hole radius, corner tolerance. Proof that design decisions have physical consequences." |
| `screenshot` | `leica-thumbnail.png` (+ `snippets_leica__technical_drawing_1–3.png`) |
| `href` | none |
| ⚠️ | no schematic · no methods · no readTime |

### 06 — Puzled
| field | value |
|---|---|
| `eyebrow` | Client Work · Puzled · 0→1 |
| `title` | B2B Registration + Dashboard |
| `description` | "No prior users. Wireframed entry flow, dashboard architecture, and deep business analytics from first principles — cognitive load, trust, orientation under uncertainty." |
| `screenshot` | `Puzled_logo_light_background-05.png`, `snippets_puzled_onboarding_thumbnail.png` |
| `href` | none |
| ⚠️ | no schematic · no methods · no readTime |

### 07 — Civic / Nonprofit
| field | value |
|---|---|
| `eyebrow` | Civic Design · Nonprofit |
| `title` | Making public grant eligibility readable by the people it was written for |
| `description` | "Making legal frameworks and public grants approachable for the families who need them the most — but get lost before they ever reach the application." |
| `screenshot` | `CSA-emblema_pozitiv.png`, `workcard3_thumbnail.png` |
| `href` | `https://csaladjainkertalapitvany.hu/` — "Visit live site ↗" (external) |
| ⚠️ | no schematic · no methods · no readTime |

---

## Non-card content (carried over verbatim)

**Hero** — location "Based in Hungary · Open to remote & relocation" · pills "AI Product Designer" / "Human Factors" / "Human-AI Interaction" · headline "I help people feel safe in systems they don't trust yet." · sub "I design the behavior and systems layer — for the moments products forget people exist, and for the problems nobody has named yet. From research to prototype."

**Lens — 4 featured credentials** (name · application · issuer · verify link)
1. Human Factors & Usability Engineering — "Designing for cognitive limits, not ideal users." — Arizona State University · Specialization Certificate · 2026 — `coursera.org/…/specialization/R7MJ6493TV4H`
2. Systems Engineering — "Seeing the whole before any part — structure before interface." — MathWorks · Certificate · 2026 — `…/verify/GTZGIZY1INED`
3. Philosophy of Cognitive Science — "Understanding why attention and timing govern what information lands." — University of Edinburgh · Certificate · 2025 — `…/verify/LDHHF6UTQXGD`
4. Foundations of Human-Centered AI — "Designing trust into AI systems, not assuming it follows from accuracy." — Northeastern University · Certificate · 2025 — `…/verify/CQP07NM0OWTG`

**Lens — 4 further credentials**
- 2025 · Google UX Design — Professional Certificate · Google — `…/specialization/LL9M9F51S9EU`
- 2025 · AI, Empathy and Ethics — Certificate · University of California Santa Cruz — `…/verify/MQX255JM40YY`
- 2025 · KPIs for User Experience: Measuring Success in Design — Certificate · Udemy — `udemy.com/certificate/UC-5c5e00c5-…`
- 2010–14 · Graphic Design — Advanced Diploma · Vocational School of Fine Arts Szombathely — no link

**About — 4 tabs**, full text captured verbatim: *Who I am* (3 paragraphs), *My focus* (2), *Working with me* (2), *What I believe* (3). Plus "Outside work" label and the photo band.

**Photo band** — `about_me_ducks.jpg`, `about_me_ha_giang_lookout.jpg`, `about_me_image_2.png`, `about_me_image_3.png`, `about_me_terrain.jpeg` (5 images, matching §3's "5 images, full bleed").
⚠️ A sixth About image is currently a **base64 data-URI inlined in the HTML** — it is a large share of the 233 KB page weight. Recommend extracting to `about_me_image_1_main.png` (already present on disk) to meet §9's weight budget.

**Contact** — `mailto:orsigorcz@gmail.com` · "Open to opportunities" · "Available for full-time roles · Remote or relocation"

**Résumé** — `resume.pdf` · `TODO(orsi): supply resume.pdf` (currently **404** on live, referenced twice)

---

## TODO(orsi) — full list

| # | item | blocking? |
|---|---|---|
| 1 | `readTime` for Tribe | no — field can be omitted |
| 2 | `readTime` for Mindure | no |
| 3 | `readTime` for Ness | no |
| 4 | `methods` confirmation for Tribe (testing was proposed, not done) | **yes** |
| 5 | `methods` confirmation for Mindure (states "no live users, no A/B test") | **yes** |
| 6 | Guardrail: finding, methods, description, screenshot — no page exists | **yes** |
| 7 | `resume.pdf` — supply file | no — link ships pointing at it |
| 8 | Cards 05–07: no schematic / methods / readTime — need a card variant | **yes** |

---

## Gate check (§1)

> *"Do not proceed if more than two fields per project are TODO."*

| project | TODO fields | passes gate? |
|---|---|---|
| 01 Tribe | readTime, methods | ✅ 2 |
| 02 Guardrail | finding, methods, description, screenshot | ❌ **4** |
| 03 Mindure | readTime, methods | ✅ 2 |
| 04 Ness | readTime | ✅ 1 |
| 05 Leica | methods, readTime, schematic | ❌ **3** |
| 06 Puzled | methods, readTime, schematic | ❌ **3** |
| 07 Civic | methods, readTime, schematic | ❌ **3** |

**Four of seven cards fail the gate.** This is not a content-gathering failure — it is a structural mismatch: §4's card geometry assumes every card has a schematic, method labels, a screenshot and a read time. Cards 02 and 05–07 do not have that content and never did. Resolving this needs a decision before any HTML is written.
