# DESIGN.md — agent-watch

**Source:** DesignMD Catalog (designmd.co) · Asana Design System
**Brand:** agent-watch · applied through Asana system tokens
**Slug:** asana

---

## Design System: Asana (from DesignMD Catalog)

### Core Philosophy
Productivity-first. Light theme. Clean hierarchy. Every element serves function.
The Asana system is built for focus — surfaces that get out of the way so people can do work.

---

## Color Tokens

### Semantic Palette
| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#F06A6A` | Coral — Asana brand, primary CTAs |
| `--color-primary-hover` | `#E05555` | Hover state |
| `--color-primary-light` | `#FFF3F2` | Tinted surfaces, pill highlights |
| `--color-ui-primary` | `#646F79` | UI slate — nav, headings, table headers |
| `--color-ui-secondary` | `#8D9BAB` | Secondary UI, icon fills |
| `--color-text-primary` | `#1E2228` | Primary content — body, headings |
| `--color-text-secondary` | `#646F79` | Secondary content — captions, labels |
| `--color-text-muted` | `#8D9BAB` | Placeholder, metadata |
| `--color-bg-base` | `#FFFFFF` | Page background |
| `--color-bg-soft` | `#F9FAFB` | Subtle section alternation |
| `--color-bg-tinted` | `#F4F5F7` | Card backgrounds, input fills |
| `--color-border` | `#E2E4E9` | Default borders |
| `--color-border-strong` | `#C8CDD5` | Emphasized borders |
| `--color-success` | `#00C2A8` | Positive states |
| `--color-warning` | `#F8B84E` | Warning states |
| `--color-error` | `#E8534A` | Error / destructive |
| `--color-info` | `#4573D2` | Info, links |

---

## Typography

### Font Stack
| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display/Hero | Ghost (Sharp Type) | 700–800 | Marketing headings — fallback: system-ui serif |
| Body + UI | TWK Lausanne (Weltkern) | 300–600 | All body, UI labels — fallback: 'DM Sans' |
| Code / Mono | 'JetBrains Mono' | 400–500 | Commands, file paths |

**Google Fonts (TWK Lausanne fallback stack):**
```css
/* TWK Lausanne is licensed — use DM Sans as visual proxy */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap');
```

### Type Scale
| Token | Size | Line Height | Use |
|-------|------|-------------|-----|
| `--text-xs` | 11px | 1.45 | Micro labels, badges |
| `--text-sm` | 13px | 1.5 | Secondary UI, captions |
| `--text-base` | 15px | 1.6 | Body copy |
| `--text-md` | 17px | 1.55 | Lead paragraphs |
| `--text-lg` | 20px | 1.45 | Card headings |
| `--text-xl` | 24px | 1.35 | Section subheadings |
| `--text-2xl` | 30px | 1.25 | Section headings |
| `--text-3xl` | 38px | 1.15 | Sub-hero |
| `--text-4xl` | 48px | 1.08 | Page titles |
| `--text-hero` | clamp(52px, 6vw, 72px) | 1.05 | Hero h1 |

---

## Spacing — 4px Grid

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Tight gaps |
| `--space-3` | 12px | Component internal |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section element gap |
| `--space-10` | 40px | |
| `--space-12` | 48px | Section separator |
| `--space-16` | 64px | Section padding |
| `--space-20` | 80px | Large sections |
| `--space-24` | 96px | Hero padding |

---

## Shape & Elevation

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, tags |
| `--radius` | 6px | Cards, inputs, buttons |
| `--radius-lg` | 10px | Modals, large cards |
| `--radius-xl` | 16px | Hero cards |
| `--radius-full` | 9999px | Pills, avatars |

| Elevation | Value | Use |
|-----------|-------|-----|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Subtle card lift |
| `--shadow` | `0 2px 8px rgba(0,0,0,0.10)` | Cards, dropdowns |
| `--shadow-md` | `0 4px 20px rgba(0,0,0,0.10)` | Modals, menus |
| `--shadow-lg` | `0 8px 40px rgba(0,0,0,0.12)` | Hero cards |

---

## Motion

Asana motion: purposeful, fast, functional. Never decorative delay.

| Element | Duration | Easing | Notes |
|---------|----------|--------|-------|
| Hover state | 120ms | ease | Color, bg |
| Focus ring | 80ms | ease-out | Accessibility |
| Dropdown open | 160ms | cubic-bezier(0.2,0,0,1) | Slide + fade |
| Modal | 220ms | cubic-bezier(0.2,0,0,1) | Scale + fade |
| Page transition | 180ms | ease | Fade |
| Tooltip | 100ms | ease | |

---

## Component Patterns

### Buttons
- **Primary:** Coral fill `#F06A6A`, white text, 6px radius, 14px 24px padding
- **Secondary:** White fill, `#646F79` border `1px`, coral text on hover
- **Ghost:** Transparent, coral text, no border
- **Danger:** `#E8534A` fill

### Cards
- White bg, `#E2E4E9` border 1px, 6px radius, 24px padding
- Hover: `--shadow-sm` lifts to `--shadow`
- Active/selected: left 3px border `#F06A6A`

### Nav
- White bg, 1px bottom border, 64px height
- Logo left, nav links center-right, CTA button right
- Links: 15px, `#646F79`, hover coral underline

### Data Tables
- Striped rows: `#FFFFFF` / `#F9FAFB`
- Header: `#F4F5F7` bg, `#646F79` uppercase 11px 600 weight
- Row hover: `#FFF3F2`
- Sort arrows: `#8D9BAB`

### Forms / Inputs
- 36px height, `#F4F5F7` bg, `#E2E4E9` border, 6px radius
- Focus: `#F06A6A` 2px outline, white bg

---

## Voice

- Direct, human, action-first. Never passive voice.
- Headlines name the outcome, not the feature. "Watch any video" > "Video analysis capability"
- Metrics in headers. "50+ agents" > "many agents"
- No marketing fluff: no "powerful", "seamless", "robust", "streamline"
