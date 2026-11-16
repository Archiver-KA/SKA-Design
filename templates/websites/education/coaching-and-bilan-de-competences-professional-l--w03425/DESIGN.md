# Design system — Coaching & Bilan de Compétences Professional Landing Page Template

`SN-W03425` · education · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A warm, earth-toned coaching hero set on a terracotta [#af4b31] field, with a soft gradient darkening towards the bottom. Cream [#f1ebe1] carries the primary button and the light section below, and the headline is a large bold sans-serif in off-white. The page feels grounded and personal, with a pill-shaped navigation bar.

**Mood:** warm, earthy, grounded, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#af4b31` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Accent | `#f1ebe1` | Primary action and highlights |

Palette by frequency of use: `#af4b31` · `#f1ebe1` · `#ffffff` · `#8c3a25` · `#9e432c` · `#8a3924`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-16`, `gap-12`

**Primary button**

```html
<a class="rounded-full bg-[#AF4B31] text-[#F1EBE1] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-transparent hover:text-[#AF4B31] border border-[#AF4B31] transition-colors inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #af4b31;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-accent: #f1ebe1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#af4b31',
    ink: '#f5f5f5',
    muted: '#ffffff',
    accent: '#f1ebe1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the terracotta (#af4b31) as the hero field, with off-white text on top
- **Do:** Set the primary button in cream (#f1ebe1) with dark text
- **Do:** Keep the lower section on cream surfaces for contrast with the hero
- **Don't:** Don't place cool blues or greens beside the terracotta
- **Don't:** Don't use terracotta for body text on the cream areas
- **Don't:** Don't use heavy shadows; keep the hero flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
