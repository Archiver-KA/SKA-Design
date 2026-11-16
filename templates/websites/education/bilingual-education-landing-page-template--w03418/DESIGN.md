# Design system — Bilingual Education Landing Page Template

`SN-W03418` · education · light mode · Sinera Atlas theme `calm` · language `zh-CN`

## Direction

A light, airy school page on off-white [#f8fafc], with a large headline set in a gradient from purple [#6d00a7] to blue. Purple carries the calls to action, and a soft orange [#f37c02] glow in the corners adds warmth without becoming text colour. The bilingual headline sets an institutional but friendly tone.

**Mood:** bright, institutional, warm, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#6d00a7` | Primary action and highlights |
| Second accent | `#f37c02` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6d00a7` · `#f1f5f9` · `#94a3b8` · `#f37c02` · `#f8fafc` · `#64748b` · `#475569` · `#04b8e0` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Noto Sans SC, Noto Serif SC
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-[#6d00a7] text-white font-medium hover:bg-[#5a008a] transition-all flex items-center gap-2 group shadow-lg shadow-[#6d00a7]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Map / location (`map-location`)
8. Footer (`footer`)
9. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #6d00a7;
  --color-accent-2: #f37c02;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#6d00a7',
    accent2: '#f37c02',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#6d00a7) for primary buttons and key headline words
- **Do:** Set headlines large, with a gradient from purple to blue
- **Do:** Keep the orange (#f37c02) for soft background glow, not for text
- **Don't:** Don't place purple text on purple backgrounds
- **Don't:** Don't use dark section backgrounds in the hero
- **Don't:** Don't set body text in orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
