# Design system — Seniors Resource Directory Template

`SN-W02522` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm, trust-first directory landing page: a deep navy hero (#123d64) carries large white headlines, and the warm yellow (#f6cc61) is reserved for one highlighted phrase and a thin announcement bar. The stance is reassuring rather than clinical, and the recognisable device is the yellow phrase closing each headline.

**Mood:** reassuring, warm, institutional, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#123d64` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f6cc61` | Primary action and highlights |
| Second accent | `#173b5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f6cc61` · `#173b5e` · `#087554` · `#0f172a` · `#e2e8f0` · `#0a709f` · `#123d64` · `#475569` · `#fff9e8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.13em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-black/15`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f6cc61] px-6 py-4 text-base font-semibold text-[#173b5e] shadow-lg shadow-black/15 transition hover:bg-[#ffda78]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Logo cloud (`logo-cloud`)
6. Services (`services`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #123d64;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f6cc61;
  --color-accent-2: #173b5e;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#123d64',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f6cc61',
    accent2: '#173b5e',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use #f6cc61 for one highlighted headline phrase and the top announcement bar only
- **Do:** Keep the hero on the solid navy ground (#123d64) with white headlines
- **Do:** Place the announcement bar above the navigation in the warm yellow
- **Don't:** Don't use the yellow for body text or for large fills outside the hero highlight
- **Don't:** Don't introduce a second bright accent colour
- **Don't:** Don't place hero copy over busy photography; the navy ground stays flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
