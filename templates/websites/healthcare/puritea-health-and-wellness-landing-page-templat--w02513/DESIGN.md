# Design system — Puritea Health & Wellness Landing Page Template

`SN-W02513` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A warm supplement hero on cream (#fbf9f7) with soft peach glows, where a near-black headline holds two key phrases in brick red (#d24929). The same red fills the header button and the one primary action, so the colour is used sparingly. Small rounded white benefit chips line the lower edge and frame a phone mockup.

**Mood:** warm, wellness, bold, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1715` | Headings and primary copy |
| Muted text | `#6a625c` | Secondary copy, captions |
| Border | `#e7e2dd` | Hairlines, dividers, outlines |
| Accent | `#d24929` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d24929` · `#6a625c` · `#4a443f` · `#1a1715` · `#e7e2dd` · `#d5cec7` · `#f9af96` · `#ae3a1f` · `#fdc7b5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-[0_1px_2px_rgba(26,23,21,.04),0_4px_12px_rgba(26,23,21,.05)]`, `shadow-[0_16px_40px_rgba(174,58,31,.18)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="rounded-full bg-[#D24929] px-4 py-3 font-['Poppins'] text-xs font-semibold tracking-[0.08em] text-white transition hover:bg-[#AE3A1F] sm:px-5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f7;
  --color-surface: #ffffff;
  --color-text: #1a1715;
  --color-muted: #6a625c;
  --color-border: #e7e2dd;
  --color-accent: #d24929;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f7',
    surface: '#ffffff',
    ink: '#1a1715',
    muted: '#6a625c',
    line: '#e7e2dd',
    accent: '#d24929',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrases of the headline in brick red (#d24929) and keep the rest near-black
- **Do:** Use brick red for the header button and the single primary action
- **Do:** Set benefit chips as white rounded cards with a short bold lead word
- **Don't:** Don't use brick red for body copy; it is for emphasis and actions only
- **Don't:** Don't place red text on the peach glows; contrast drops
- **Don't:** Don't add cool colours; the palette stays warm throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
