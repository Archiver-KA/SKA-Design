# Design system — Animation Studio Landing Page Template

`SN-W01789` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full violet page ([#6d28d9]) with an oversized white sans headline spanning the width and a 3D-style figure in the centre. White cards with small type sit on the right and bottom left, and a black circular button closes the lower right. The violet ground is the whole identity, and the white cards keep the content readable against it.

**Mood:** saturated, bold, graphic, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#6d28d9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6d28d9` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6d28d9` · `#171717` · `#4ade80` · `#a3a3a3` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 72px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group mt-12 w-full py-4 px-6 bg-white text-[#6D28D9] font-semibold text-sm tracking-wide rounded-sm flex items-center justify-between hover:bg-white/90 transition-all shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Case studies (`case-studies`)
4. Video / media (`video-media`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #6d28d9;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6d28d9;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#6d28d9',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6d28d9',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet (#6d28d9) as the full page ground.
- **Do:** Set the headline in oversized white sans across the width.
- **Do:** Keep the content on white cards so it stays readable on violet.
- **Don't:** Don't place body text directly on the violet; use the white cards.
- **Don't:** Don't use a dark page background; the violet ground is the identity.
- **Don't:** Don't add a second saturated colour beside the violet.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
