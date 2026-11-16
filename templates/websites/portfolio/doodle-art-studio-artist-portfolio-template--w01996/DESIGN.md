# Design system — Doodle Art Studio Artist Portfolio Template

`SN-W01996` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Gallery-like dark page: a warm near-black ground (#141215) with a large serif headline, Emotion in Every Stroke, set in cream (#f3efe7). The primary button is a plum (#3c1b4e) fill beside a thin outlined secondary button. Teal (#2aafa8) appears only as small status dots, and the large artwork frame on the right is the visual focus.

**Mood:** literary, gallery-like, warm, dark, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141215` | Page ground |
| Surface | `#171519` | Cards, panels, raised areas |
| Text | `#f3efe7` | Headings and primary copy |
| Border | `#f3efe7` | Hairlines, dividers, outlines |
| Accent | `#2aafa8` | Primary action and highlights |
| Second accent | `#3c1b4e` | Supporting highlights |

Palette by frequency of use: `#f3efe7` · `#2aafa8` · `#3c1b4e` · `#141215` · `#ffffff` · `#171519` · `#1a171b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_10px_30px_rgba(60,27,78,0.35)]`, `shadow-[0_14px_38px_rgba(60,27,78,0.45)]`, `shadow-[0_28px_80px_rgba(0,0,0,0.55)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden rounded-full border border-[#F3EFE7]/10 bg-white/0 px-4 py-2 text-xs font-medium text-[#F3EFE7]/80 transition hover:border-[#2AAFA8]/40 hover:text-[#F3EFE7] md:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141215;
  --color-surface: #171519;
  --color-text: #f3efe7;
  --color-border: #f3efe7;
  --color-accent: #2aafa8;
  --color-accent-2: #3c1b4e;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141215',
    surface: '#171519',
    ink: '#f3efe7',
    line: '#f3efe7',
    accent: '#2aafa8',
    accent2: '#3c1b4e',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Set headlines and body text in the serif face, in cream (#f3efe7)
- **Do:** Use plum (#3c1b4e) for the primary button and teal (#2aafa8) only for status dots
- **Do:** Keep the artwork frame large on the right as the focus of the page
- **Don't:** Don't set body copy in a sans; the serif carries the voice
- **Don't:** Don't use teal for buttons or large fills
- **Don't:** Don't use pure white for text; the cream is the text colour here

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
