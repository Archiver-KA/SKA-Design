# Design system — EdVenture Education Guidance Landing Page Template

`SN-W03458` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold landing page where a royal blue ground (#213b97) carries the whole hero, and yellow (#febd17) marks the key headline words and every primary call to action. Large, tight sans headlines lead, with glass-style panels and gradient fills adding depth. Black cards for case studies and stats sit on the blue ground, giving strong contrast without extra colours.

**Mood:** bold, premium, confident, dark, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#213b97` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#febd17` | Primary action and highlights |
| Second accent | `#213b97` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#febd17` · `#9ca3af` · `#000000` · `#213b97` · `#d1d5db` · `#6b7280` · `#f472b6` · `#1a2f7c` · `#86efac`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 bg-[#febd17] text-[#213b97] rounded-full hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #213b97;
  --color-surface: #000000;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #febd17;
  --color-accent-2: #213b97;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#213b97',
    surface: '#000000',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#febd17',
    accent2: '#213b97',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep yellow (#febd17) to key headline words and primary buttons only
- **Do:** Set the page ground in royal blue (#213b97) across the hero and sections
- **Do:** Use black (#000000) cards for case studies and stats
- **Don't:** Don't place yellow text on light backgrounds
- **Don't:** Don't dim the blue ground with grey overlays
- **Don't:** Don't add a second bright accent beside the yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
