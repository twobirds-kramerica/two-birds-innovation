---
BACKUP NOTICE: Point-in-time snapshot backup created 2026-10-04 for Two Birds Innovation.
STATUS: Static archive snapshot (may be stale).
LIVE SOURCE OF TRUTH: The live, active documents are maintained in Notion and git at twobirds-kramerica/two-birds-portfolio.
CANONICAL REPO PATH: two-birds-portfolio/hal-stack/research/agent-workflow-observability-prd-2026-08-06.md
NOTION REFERENCE: https://app.notion.com/p/3b4a09cf876a811d8a8fffa5708c6e42?pvs=204
---

# Agent Workflow Observability — Research + PRD
**Filed:** 2026-08-06, Aaron voice request (second of "two net new products" — the accountability app is the first, tracked separately). **This document = the research + PRD Aaron asked for "now." The actual build is a separate P3 backlog item, run when picked up.**

## 1. What Aaron actually asked for, restated precisely

A simple, low-cost, local visualization that shows Aaron **the live path of Claude Code's own work** — from the moment he types something in the CLI, through every agent it spawns, every skill it invokes, every MCP it hits (NotebookLM, etc.) — in real time, and lets him **audit it after the fact** (history, not just a live view). Two stated purposes, in his words: it's not to look cool for other people, it's for *him* to see and understand — a learning tool. He specifically wants a **jargon-translation layer**: this stack has its own internal names for things (whatever Two Birds calls its own patterns), and he wants the UI to also show what each thing is actually called in the outside world, so watching it teaches him the real vocabulary.

**Stated constraints, verbatim intent:**
- Cheap. Explicitly "not token heavy," "I'm not rich, I'm trying to be cheap." The tool itself must not burn meaningful LLM tokens to run — it should be a passive observer, not another agent.
- **Don't build from scratch — adopt and customize an existing free/open-source tool with real GitHub traction**, self-hostable, runs locally.
- Show: real-time flow visualization, aggregate stats (tokens used, which LLM is used most, concurrent project count, peak usage times, which project is getting the most attention, which projects are stale/orphaned — red/yellow/green), and a history/audit trail (this has a real data/storage component, not just a live view).
- Toggleable, not always-on by default — something Aaron clicks to activate.
- Accessible two ways: a permanent link near the CLI ("click to watch in action") and a link from Command Deck (aaron-deck.pages.dev) — could be a new tab/page there.
- Full-screen capable — he may run it on a second monitor and just watch.
- A "little character" or similar visual charm is welcome, not required.
- **Full autonomy on how to build/organize this.** Same posture as the accountability app: research-based taste calls, minimal Aaron involvement.
- He referenced wanting this run under the same Fable/Opus/Sonnet dispatch-mix posture as the accountability app.

## 2. Research — what already exists (live-verified 2026-08-06, not training knowledge)

This is a real, named category: **AI agent / LLM observability**. It has a mature enterprise tier (Langfuse, Arize Phoenix, OpenLIT, Helicone, Manifest, Latitude) built for teams running production LLM apps — and a much newer, smaller tier built specifically for the thing Aaron is actually asking for: **watching your own local coding-CLI agent sessions.**

### 2.1 The enterprise tier — considered, not recommended as primary

| Tool | Stars/maturity | Self-host shape | Verdict |
|---|---|---|---|
| **Langfuse** | Largest, most GitHub love of the group | ClickHouse + Postgres + Redis — a real multi-container stack | **Too heavy.** This fleet already hit this exact wall tonight on an unrelated evaluation (Khoj, RAGFlow) — a multi-daemon stack on modest laptop hardware is the wrong shape. Overkill for one person watching their own CLI. |
| **Arize Phoenix** | Solid, OpenTelemetry-native from the ground up | Lighter — can run single-process, notebook-friendly | Better fit than Langfuse, but still built for "evaluate my production LLM app," not "watch my coding CLI's agent tree." |
| **OpenLIT** | Real, active (github.com/openlit/openlit), broad integrations (50+ providers), includes GPU monitoring/guardrails/prompt management | Single Docker container, OTel-native | Legitimate lighter option, but still general-purpose LLM-app observability, not coding-CLI-specific. |
| **Manifest** (github.com/mnfst/manifest) | Real, confirmed repo, local-first dashboard, OTLP ingestion, self-hosted | Docker-based | Built around cost/routing across 28+ models for apps calling LLMs directly — adds LLM-routing/fallback features Aaron doesn't need. Not coding-CLI-aware. |

None of these know what a "Claude Code sub-agent dispatch" or "a Skill invocation" or "an MCP tool call" *is* out of the box — they observe raw LLM API calls. Aaron's ask is one level up: the *orchestration* structure of a coding CLI session, not just token counts on individual completions.

### 2.2 The tier that actually matches — two real, small, purpose-built tools

Both found live via search, both verified directly against their GitHub pages (not summarized secondhand):

| | **tobilg/ai-observer** | **mishanefedov/agentwatch** |
|---|---|---|
| Stars | **265** | **16** |
| License | MIT | MIT |
| Names Claude Code explicitly? | **Yes** — "Works with Claude Code, Gemini CLI, OpenAI Codex CLI, GitHub Copilot, and OpenCode" | **Yes** — "one local timeline for every coding agent you run — Claude Code, Codex, Gemini CLI, Cursor, Hermes, OpenClaw" |
| Install | Single ~54MB binary, embedded frontend, or Docker (~97MB) | `npm i -g` package, ~220KB, Node ≥ 20 |
| Database | Embedded **DuckDB** — no separate DB service | None — reads local JSON/SQLite files directly |
| Platform | Linux/amd64, linux/arm64 (Docker); binary likely broader | **macOS or Linux only** — no Windows. Matters: if Aaron ever wants to watch from a Windows daily driver directly (not just SSH into a Linux box), this is out. |
| Token/cost tracking | Per-session token usage, cost, API latency, error rates | Per-session cost **with cache accounting**, true USD cost per turn, model-specific rate tables |
| Visual flow | "Traces View" with span visualization; architecture captures "API calls, tool executions, session timelines" | **"Live multi-agent timeline"** + **"call graphs (d3-hierarchy SVG)"** for drilling into agent execution flow — closer, literally, to "show me the path" |
| Network | OpenTelemetry-compatible backend | Zero network calls unless `AGENTWATCH_OTLP_ENDPOINT` is explicitly set — opt-in only |

**Both are genuinely new (2026-era) and small in absolute terms** — this is not a mature, 10k-star category yet. Treat both as early tools, not battle-tested infrastructure.

### 2.3 Recommendation

**Primary: `tobilg/ai-observer`.** Reasons: 16x the GitHub traction of the alternative (lower bus-factor-1 risk, though still small in absolute terms), explicit OpenTelemetry-standard architecture (means it composes with the enterprise tier later if this ever needs to scale up), single embedded DuckDB — genuinely the lightest real "traces + metrics + history" combination found, and broader tool coverage (also picks up Codex/Gemini CLI/Copilot/OpenCode for free, which matches tonight's separate multi-model dispatch work).

**Borrow, don't adopt: `agentwatch`'s visualization approach.** Its "live multi-agent timeline" and d3 call-graph view is the closer literal match to what Aaron described ("running two or three agents, then skills, then MCP") — if ai-observer's own Traces view doesn't read as a clear narrative path when this gets built, agentwatch's UI is the reference to imitate, or agentwatch itself can be run as a second, even-lighter option since installation cost is trivial (single npm package).

**Neither tool understands this repo's own concepts (Agent tool dispatch, Skill invocation, MCP tool call, subagent-dispatch-conventions.md's ledger) natively.** A thin ingestion adapter is real, necessary build work regardless of which backend is chosen — see §4.

## 3. The jargon-translation layer — Aaron's specific ask, not covered by any existing tool

Neither tool ships a "what we call it internally vs. what it's really called" layer — this is bespoke, and small. Concretely: a simple lookup table (JSON or a small config file) mapping this repo's own vocabulary to the real-world industry term, surfaced as a label or tooltip next to each event in the timeline. Examples to seed it with (real terms, verified against this repo's own usage tonight):

| Two Birds says | Real-world term |
|---|---|
| "dispatching an Agent" | Sub-agent spawn / multi-agent orchestration |
| "a Skill" | A packaged prompt-and-tool preset (industry umbrella term: an agent "workflow" or "macro") |
| "MCP" / "an MCP tool" | Model Context Protocol — this one IS the real-world name, Anthropic's own open standard |
| "the Notion MCP connector" | An MCP server (a tool-provider process implementing MCP) |
| "next-sprint.py locking a sprint" | Task queue claim/lock pattern (general software term: optimistic locking) |
| "the ledger" (subagent-dispatch-conventions.md) | An audit log / dispatch registry |

This table should live as its own small file the build sprint extends over time, not something either OSS tool needs to know about.

## 4. Architecture sketch (for the build sprint to execute, not decided further here)

1. **Ingestion**: verify exactly how ai-observer's "Claude Code support" works (session-transcript parsing vs. a hook-based emitter) before building anything custom. If it needs an emitter, this repo already has a working hook pattern (`.claude/settings.json` PreToolUse hooks — `secret-scanner.js`, `destructive-guard.js` — same mechanism, new hook).
2. **Aggregate stats Aaron wants (concurrent projects, peak usage, most-attended project, stale/orphaned red-yellow-green)** — do NOT reinvent staleness tracking. This repo already has `hal-stack/scripts/domain-freshness-check.py` + `freshness-policy.json` (S-DASHBOARD-FRESHNESS-SYSTEM-001) for exactly this concept elsewhere in the stack. The new tool should pull from that existing system for "what's stale," not build a second one.
3. **Hosting**: the tool makes zero LLM calls itself (pure local observability), so it has near-zero ongoing token cost by construction — directly answers Aaron's "cheap" worry regardless of which machine it runs on. Simplest v1: run locally on whichever machine Aaron is actively working on. Do NOT expose it via a public URL (e.g., tunnelled through Command Deck's Cloudflare Pages) — that would repeat tonight's own P1 incident class (an internal-only surface accidentally made reachable). The "link from Command Deck" Aaron wants should point at `localhost:<port>`, which only resolves when he's on the machine running it — flag this limitation to him plainly when built, don't silently make it "work" by exposing it.
4. **CLI-adjacent access ("click to watch in action")**: likely a line in the terminal's own status/welcome output or launch script, not a new product surface.
5. **"Little character"**: cosmetic, last-priority, only if time allows.

## 5. Open items for the build sprint

- Confirm ai-observer's exact Claude Code integration mechanism before committing to it as primary.
- Decide whether to also run agentwatch alongside it (cheap to try, single npm install) rather than choosing definitively now.
- Wire the jargon-translation table as its own maintainable file, seed it, let it grow.
- Confirm hosting machine once the M73 tower (referenced elsewhere tonight) is actually stood up — until then, local-machine-only is correct and sufficient.
- This is a genuinely new architectural surface (a new local service, a new data store) — file an ADR when the build sprint runs.

---
*Model-dispatch note: Aaron asked this run under the same Sonnet-execution/Fable-judgment posture referenced for the accountability app — see that item's Notion page for the same caveat (the underlying CLAUDE.md rule is proposed, not yet ratified).*
