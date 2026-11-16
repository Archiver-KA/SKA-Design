# Design system — Developer Portfolio Landing Page Template

`SN-W01956` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a bold sans headline in white, its name set in a lighter grey, and a centred short paragraph. A floating pill navigation sits at the top with a small status readout, and a row of social tiles below uses dark cards with muted labels. Green marks availability, and the rest of the page is grey.

**Mood:** friendly, dark, modern, compact, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#27272a` · `#10b981` · `#000000` · `#52525b` · `#e4e4e7` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 16px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Code / terminal (`code-terminal`)
5. Articles (`blog-articles`)
6. About (`about`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in grey within a white headline
- **Do:** Use green (#10b981) only for availability markers
- **Do:** Keep social links as dark tiles with muted labels
- **Don't:** Don't add a light background; the page is near-black
- **Don't:** Don't put green on large surfaces
- **Don't:** Don't use the tiles for primary actions; buttons sit above them

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
