---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/product-intelligence/school-sentinel-prd-2026-09-22.md
NOTION REFERENCE: Notion / Product Backlog
---

# School Sentinel — PRD (proof of concept)

**Date:** 2026-09-22 (filed live, same session as the EPIC's four sub-sprints)
**Status:** POC — not yet built; this PRD formalizes what was already scoped in `hal-stack/sprint-system/sprint-queue.md` (EPIC: School Sentinel, sub-sprints A/B/C/D)
**Owner:** Aaron Patzalek (single-user, personal — SIMPLICITY FIRST governs; NOT a productized build)
**Origin:** grew out of a live, long-form voice ask about managing school-ecosystem inbox messages — Aaron flagged mid-conversation that the *origin itself* ("I started it and tried to see where it would go") might be worth a later reflection/story, separate from the build itself. That thread is Section 6 below, not the product spec.

---

## 1. Problem (Aaron's own words, paraphrased from voice dictation)

His twins are in grade 2 at a French-language elementary school in St. Thomas, Ontario. School-ecosystem messages (teacher notes, bus dispatch, absence reports, closures) arrive by email into `aaron.patzalek@gmail.com` mixed in with everything else. Two failure modes he wants solved:
1. **Time-critical stuff gets missed or noticed late** — a kid reported absent, a missed call from the school, a bus cancellation, a snow day. These need to reach him *immediately* and escalate if he doesn't see them.
2. **Future-dated stuff (library day, book day, class events) never makes it to the family calendar** — it either gets missed entirely or he has to manually transcribe it.

His explicit non-goal: this is not meant to become a product to sell ("I don't think the community would appreciate that... I think it's more of a storyline thing").

## 2. Goals

- Catch time-critical school messages and get them to Aaron on a channel he actually monitors (not Telegram — see Section 4).
- If unacknowledged in 30 minutes, escalate to a phone call, unmistakably distinct from a normal call.
- Catch date-specific, non-urgent messages and turn them into family calendar reminders + a day-before heads-up, without calendaring everything indiscriminately.
- Never message or call anyone but Aaron. Never send anything automatically on his behalf — proposed replies only, his approval required.
- Cost nothing recurring wherever possible (see Section 4 — this shaped the whole channel decision).

## 3. Non-goals (explicit, so scope doesn't creep)

- Not a multi-user/family product yet — his wife is future scope, "for now it'll be a test for me."
- Not a general inbox-management tool — scoped to school-ecosystem senders only.
- Not a commercial product. No paywall, no "download this" pitch (his own words, Section 6).
- Not solving WhatsApp/SMS/Signal as a general-purpose family communication layer — just enough of a sending channel to make School Sentinel's alerts reach him.

## 4. What already exists / what this reuses (checked before scoping, don't rebuild)

| Piece | Where | State |
|---|---|---|
| Gmail + push-alert intake pattern | `hal-stack/automation/magpie-scribe/` | Proven in production (Magpie's TikTok-intake pipeline) — same shape (poll → triage → alert), different trigger ruleset |
| Telegram send pattern | `hal-stack/integrations/telegram/send-alert.py` | Working, but Telegram is **pull-only for Aaron** — ruled out as the primary alert channel mid-session; kept only as a secondary/logging channel |
| Push-channel decision | `signal-cli` (`AsamK/signal-cli`) | **Chosen over Twilio/WhatsApp live, this session** — free, open-source (AGPL-3.0), self-hosted, no metered billing, matches Aaron's explicit "not an API that can be monetized" requirement. See `S-SCHOOL-SENTINEL-D-PUSH-CHANNEL-001`. |
| Prior-art backlog | `hal-stack/strategy/telegram-alerts-backlog-2026-07-10.md` | Already reasoned through categories/triggers for an inbox-to-alert relay — read before building D's plumbing |

## 5. Scope — maps directly onto the four filed sub-sprints

| Sub-sprint | Delivers |
|---|---|
| `S-SCHOOL-SENTINEL-A-INBOX-ALERTS-001` | Immediate-tier triage + alert (kid absent, missed call, bus cancellation, closure, emergency) |
| `S-SCHOOL-SENTINEL-B-CALENDAR-REMINDERS-001` | Future-dated tier: calendar write + day-before heads-up |
| `S-SCHOOL-SENTINEL-C-CALL-ESCALATION-001` | 30-min-unacknowledged phone escalation (design-only until a call-capable channel is ratified) |
| `S-SCHOOL-SENTINEL-D-PUSH-CHANNEL-001` | The actual send mechanism (`signal-cli`) A/B/C depend on |

A and B are **blocked on D** landing a working send channel before they're real, not just designed.

## 6. Success metrics — for the 6-month retro, not a live dashboard

Aaron's ask: "a kind of a story to reflect back on later... how many interactions, how many emails... without giving any of my private stuff." **Aggregate counts only, no message content, no sender/recipient PII stored in the metric itself:**
- Number of inbox messages classified (total, and split immediate vs. future-dated)
- Number of immediate alerts sent, and how many required the 30-min call escalation (a rate, not a log of what each one was)
- Number of calendar events created from B
- Rough time-to-alert (email received → Signal message sent) as a distribution, not per-incident detail
- Any false positives/negatives Aaron caught and corrected, self-reported, not inferred

**This data must be structurally incapable of leaking content** — count events, don't retain the underlying email bodies in whatever produces the retro numbers.

## 7. The "storyline" thread — separate from the build, gated separately

Aaron flagged that the origin of this ("I started it by complaining to my AI, tried to see where it would go") might be worth a public reflection piece later — an authentic build-story, explicitly NOT a paid product pitch ("I don't think the community would appreciate that... more of a storyline thing"). **This is public-facing storytelling and is NOT decided or drafted here.** Per the standing `LINKEDIN / PUBLIC-STORYTELLING GATE` (`hal-stack/disciplines/credibility-first-storytelling.md`), any actual drafting of this story — whenever it happens — runs through that gate first (room check, story/audience selection, voice tests, PROCEED/HOLD/REWORK verdict) before a word of it is written for anyone but Aaron. This PRD only preserves the intent and the metrics that would feed such a story; it does not authorize writing it.

**Aaron confirmed "nota bene" refers to his existing storytelling archive: `career/two-birds-posts/`** (LinkedIn AI-learning series, DRAFT status, nothing published — `INDEX.md` is the table of contents, `room-state.md` tracks series state). Not a new location — this PRD's Section 7 origin material would feed INTO that existing archive/room when the storytelling gate is actually run, not into a new series.

**Linked, per Aaron live 2026-09-22 (`/clear-precheck` surfaced it):** there is already an almost-identical content idea sitting In Progress in Notion — `Content: The 45-minute setup — honest account of building a job scanning notification system` (page `385a09cf-876a-8170-a164-d9681d02c1b5`, mirrored at `hal-stack/notion-sync/workspace-export/2026-07-17/pages/Content- The 45-minute setup...md`), written for Talon's origin story. Same exact shape as what Section 7 above is reaching for: honest, no-hype, "here's what it actually took, here's the ratio of setup-time-to-value" — direct, first-person, screenshots-and-friction-points-included tone, explicitly NOT a "look how easy AI makes everything" post. **Reuse this format/angle for the School Sentinel retro story rather than inventing a new one** — same author voice, same credibility mechanics, different system. That Notion item is still its own separate, unfinished piece (Talon's story, not School Sentinel's) — not merged into one, just sharing a proven template.

## 8. Rollout plan

1. **Now → overnight, off primary accounts:** build A, B, C (design), D per their filed sprints.
2. **Once D is live and A/B are actually sending real alerts:** informal validation period, Aaron corrects misclassifications as they happen (no formal sprint needed for this — just normal use).
3. **~6 months after go-live (dated re-surface, not a live timer — see the filed retro sprint below):** pull the Section 6 metrics, write a short retro doc, and — only if Aaron wants it at that point — hand the retro + origin notes to the storytelling gate as raw material. The retro sprint itself does NOT draft public content; it only produces the private numbers-and-reflection doc.
