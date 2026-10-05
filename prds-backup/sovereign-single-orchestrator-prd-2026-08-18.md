---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/strategy/PRD-sovereign-single-orchestrator-2026-08-18.md
NOTION REFERENCE: Notion / Strategy Backlog
---

# PRD — Sovereign single orchestrator (Codex/OpenCode/Claude consolidation)

**Status: LIVE REQUIREMENTS DOCUMENT. Read this before any work on the Codex/OpenCode/orchestrator initiative — do not ask Aaron to restate his position, check here first.**

Origin: Aaron, live, 2026-08-18, in a sustained back-and-forth he himself called "a healthy argument, positive friction." His explicit instruction: capture this once, durably, so it doesn't need repeating, and so future work can be checked against it rather than re-litigated. This is that document. Verbatim source quotes: `hal-stack/strategy/aaron-stated-requirements-verbatim-2026-08-18.md`. Narrative of how this session unfolded: `hal-stack/strategy/session-narrative-codex-opencode-sovereignty-2026-08-18.md`.

## Problem statement

Aaron paid for Codex CLI and OpenCode on top of his existing Claude Max plan — partly cost-reduction, partly genuine interest in orchestration. Using them immediately threatened to reintroduce the exact multi-vendor entanglement that 8 months of deliberate HAL Stack architecture was built to avoid. He wants the value of what he paid for, without giving up the sovereignty the whole system exists to protect.

## Non-negotiable requirements

1. **Sovereignty.** "The whole point of building things this way [is] so I'm not stuck with a vendor... Sovereignty is absolutely critical in this field. A non-sovereign move is against the grain on everything we've built, and that's not okay." Not open to silent trade-away. May be *temporarily* and *explicitly* compromised if he agrees to it in the moment (see Negotiable section) — never assumed on his behalf.
2. **One interface.** "I need to have one single orchestrator, period." He does not want to manage multiple tools/logins day to day. Doesn't care if it's an aggregator/router under the hood — the downstream models can be "dumb" — but his own daily surface must stay singular and low-friction.
3. **Low friction, not a burden.** "I don't wanna inject difficulty for me in terms of how I do the work... It feels like it's creating a burden on me. I'm not looking for that." Any recommendation that adds day-to-day complexity for him personally fails this requirement regardless of its technical merits.
4. **Leverage what's already built.** "I expect the architecture we've built to be leveraged almost fully with these new tools that I've now paid for." A recommendation that discards or duplicates existing HAL Stack infrastructure needs a specific justification, not a default.
5. **Research-grounded, not trained-knowledge assumption.** Repeated, forcefully, this session: "I really don't believe I'm the first person on the planet to do what I'm doing." Any claim that something isn't already solved elsewhere must be backed by live search, not model priors — and he was right to push on this; the first pass under-researched it (see narrative file, Goose finding).
6. **Real usage/adoption evidence, not hype.** "All research based, all in volume of usage validated." Tool recommendations need real numbers (stars, production deployments, security track record) — the Goose validation (44K stars, Block's own 12,000-employee production deployment, a fixed red-team-found vuln) is the bar to match going forward, not a one-off.
7. **State compromises out loud.** "Compromises have to be had to get what I'm asking for. I'm not happy about it [but accepts it if named]." An unstated compromise (a "solved" answer that's actually still locked-in, or still a burden) is a worse failure than an honestly-flagged one.
8. **Capacity-respecting.** He hit a real monthly spend-limit wall mid-session tonight — this is a live constraint, not hypothetical. "I can't hit the hundred percent usage ceiling. So let's be measured in what we execute." Research/planning is fine to run against the clock; heavy build/execution should be sequenced to avoid re-hitting the wall, ideally offloaded to Codex/OpenCode's own separate quotas where the shape of the work allows it.
9. **Don't make him repeat himself.** This document exists because of this exact requirement — check it before asking him to restate position on this initiative.

## Negotiable, but only if named explicitly

- Temporary sovereignty compromise, if a genuinely superior free/OSS-first option isn't available for a specific piece — he said he'd consider it but is "not keen," and prefers free/open-source over a paid non-sovereign shortcut if a compromise is truly required.
- Claude Code remaining his literal daily-typing interface (with Codex/OpenCode as backends/fallback capacity) is an acceptable shape for requirement #2 **if stated as the deliberate answer**, per Fable's review — Opus's first pass never actually said this out loud, which was itself a defect, not a neutral omission.

## Explicitly rejected / high bar to clear

- **OpenClaw** (formerly Clawdbot/Moltbot) — real, validated as genuinely high-risk: MIT/OSS, but text-message-triggered, full shell + browser + file + calendar + email access, viral/unvetted growth (100K+ stars in one week). Aaron named it himself as "the actual dangerous product" and said he'd only go there out of desperation. Current recommendation: **not needed** — Goose covers the legitimate orchestration need without this blast radius. Do not propose adopting it without a fresh, explicit conversation with Aaron, not a default fallback.
- Hand-building a custom orchestrator when validated OSS prior art (Goose) exists and hasn't yet been ruled out by the sovereignty check — building first and checking prior art second is the exact mistake this session corrected.

## Process requirements going forward (how this gets enforced)

- Any sprint under this initiative (`S-GOOSE-SOVEREIGNTY-EVAL-001`, `S-CODEX-OPENCODE-DEEP-RETRO-001`, and any successor sprint for the actual build) must open this PRD first, not just the narrative file — the narrative is what happened, this is what's required.
- The deep root-cause retrospective (`S-CODEX-OPENCODE-DEEP-RETRO-001`, gated to 2026-08-21 ~21:00 EDT) should explicitly check its own findings against every numbered requirement above, not just narrate the story.
- If a future recommendation conflicts with any non-negotiable item above, that conflict must be surfaced to Aaron explicitly — do not resolve it silently in the write-up.

## Definition of done for the overall initiative

He has one interface he actually uses day to day; the existing HAL Stack automation continues to run on it without a rebuild; the newly-paid-for tools (Codex, OpenCode) are doing real, validated work rather than sitting idle; no vendor can unilaterally strand him; and he has not had to personally manage multiple logins/tools to get there.
