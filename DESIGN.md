# DESIGN.md — agent-watch

> **Design Source of Truth** for [github.com/menotbobbybrown/agent-watch](https://github.com/menotbobbybrown/agent-watch)

---

## Memorable Thing

> **"This is how an AI agent finally sees."**

Every design decision serves this. The visual language must feel like precision instrumentation — a viewfinder locking onto a target frame — not a generic SaaS dashboard.

---

## Aesthetic Direction: Retro-Futuristic / Industrial Cyber-Minimalist

CRT viewport precision meets modern engineering austerity. The product is a machine that sees — so the design should feel like looking through a camera lens or a terminal monitor. High-contrast dark canvas, monospace timestamp accents, viewfinder crosshairs, signal-green/cyan precision marks.

**Not:** purple gradients, bubbly border-radius, centered hero + 3-column icon grid, generic SaaS.
**Is:** tight grid discipline, 1px structural borders, explicit `[t=00:32]` markers, frame-counter badges, decoration tied to function.

---

## Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg-void` | `#070A0F` | Page background |
| `--bg-deep` | `#0D131F` | Viewport panels |
| `--bg-surface` | `#141C2E` | Cards, code blocks |
| `--border` | `#1E293B` | 1px structural borders |
| `--border-lit` | `#2D4A6B` | Hover/focus borders |
| `--cyan` | `#00F0FF` | Primary — viewfinder cyan |
| `--emerald` | `#10B981` | Success, active |
| `--amber` | `#FFB800` | Warning, CRT highlight |
| `--text-primary` | `#F8FAFC` | Headlines |
| `--text-secondary` | `#CBD5E1` | Body copy |
| `--text-muted` | `#64748B` | Metadata |

**Color rule:** Cyan is rare and meaningful. Appears on primary CTAs and active indicators only. Emerald is for install success. Amber is for warnings and CRT accent. Color as function, not decoration.

---

## Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Hero | Syne | 700–800 |
| Headings / Body | Plus Jakarta Sans | 400–700 |
| Code / Timestamps | JetBrains Mono | 400–600 |

No Inter. No Space Grotesk. No Poppins.

---

## Spacing

Base unit: `8px`. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

---

## Decoration

**Allowed:** 1px solid borders, CRT scanline overlay (4% opacity), viewfinder corner brackets (CSS pseudo-elements), frame-counter badges, dot-grid backgrounds (5% opacity), cyan glow on CTAs.

**Never:** gradient-fill buttons, purple overlays, uniform `border-radius: 16px`, stock photo backgrounds, animated gradient blobs.

---

## Motion

Intentional-functional only. State change, not decoration.

- Copy success: scale 0.95→1.0, flash emerald — 150ms
- Terminal typing: 40ms per character
- Frame chip pop-in: 80ms stagger
- Tab switch: fade + 4px slide — 180ms

---

## Voice

- Lead with the action. "Give Any AI Agent Eyes & Ears." — not "agent-watch is a powerful tool."
- Frame numbers and timestamps are identity. `[t=00:32]`, `Frame 0042`, `50 frames · 9.8k tokens`.
- No hype. No "seamless", "powerful", "robust", "streamline".
- Monospace for every command, path, and number.
