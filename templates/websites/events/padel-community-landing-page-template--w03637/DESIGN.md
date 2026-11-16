# Design system — Padel Community Landing Page Template

`SN-W03637` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, sporty community page built from rounded feature cards that carry photographs under dark gradient overlays, with white titles at the bottom. The navigation is a clean white bar with a solid black pill button, and the sections sit on a pale grey ground. Contrast comes from the dark image cards, and the page uses almost no colour apart from the photography.

**Mood:** clean, sporty, minimal, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#4b5563` · `#f2f2f2` · `#d1d5db` · `#1f2937` · `#a6db00` · `#84cc16`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-lob-black/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 bg-lob-black text-white dark:bg-lob-neon dark:text-lob-black text-sm font-bold rounded-full hover:bg-gray-800 dark:hover:bg-[#a6db00] transition-colors flex items-center gap-2 shadow-lg shadow-lob-black/20 dark:shadow-lob-neon/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Booking form (`booking`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set card titles in bold white over a dark gradient on each photograph
- **Do:** Use solid black pill buttons for the primary action
- **Do:** Keep section grounds white or pale grey and separate cards with soft rounded corners
- **Don't:** Don't put white titles on light photographs without a gradient
- **Don't:** Don't use lime as a card background
- **Don't:** Don't mix sharp square corners with the rounded cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
