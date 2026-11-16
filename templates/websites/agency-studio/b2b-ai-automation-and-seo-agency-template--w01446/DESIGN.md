# Design system — B2B AI Automation & SEO Agency Template

`SN-W01446` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm cream ground ([#e8dbc8]) with deep plum ([#4a0f2f]) headline type and an orange-terracotta ([#d96c3f]) italic word for emphasis. The headline is a large serif in tight, stacked lines, with a small outlined pill as the eyebrow. Contrast is soft and the page reads as an editorial brand rather than a software product.

**Mood:** editorial, warm, literary, soft, distinctive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8dbc8` | Page ground |
| Surface | `#2a081a` | Cards, panels, raised areas |
| Text | `#4a0f2f` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d96c3f` | Primary action and highlights |
| Second accent | `#d96c3f` | Supporting highlights |

Palette by frequency of use: `#4a0f2f` · `#d96c3f` · `#e8dbc8` · `#ffffff` · `#10a37f` · `#2a081a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Sans
- **Body:** Instrument Sans
- **Loaded families:** Fraunces, Instrument Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn bg-[#4A0F2F] text-[#E8DBC8] px-8 py-4 rounded-full font-normal hover:bg-[#D96C3F] transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8dbc8;
  --color-surface: #2a081a;
  --color-text: #4a0f2f;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d96c3f;
  --color-accent-2: #d96c3f;
  --font-display: "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8dbc8',
    surface: '#2a081a',
    ink: '#4a0f2f',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#d96c3f',
    accent2: '#d96c3f',
  },
  fontFamily: { display: ['Instrument Sans'], sans: ['Instrument Sans'] },
} }
```

## Do and don't

- **Do:** Use the orange (#d96c3f) italic for one emphasised word per headline
- **Do:** Set headlines in a large serif with tight leading in plum (#4a0f2f)
- **Do:** Keep the ground warm cream (#e8dbc8), not white
- **Don't:** Don't set the headline in sans-serif
- **Don't:** Don't use pure black for text
- **Don't:** Don't put bright blue or green in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
