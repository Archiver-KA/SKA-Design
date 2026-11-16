# Design system — AI Automation Portfolio Landing Page Template

`SN-W01773` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a very large, heavy white name set in Inter as the headline, followed by a grey supporting paragraph and a row of small buttons. The primary button is a dark pill with a blue edge, and the secondary is plain text. The layout is centred and symmetrical, and the purple logo tile in the nav is the only other colour.

**Mood:** bold, centred, dark, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#3b82f6` · `#000000` · `#60a5fa` · `#d4d4d4` · `#8b5cf6` · `#050505` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex w-full justify-center items-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium mb-8">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. 3D / canvas scene (`3d-canvas`)
5. Case studies (`case-studies`)
6. Pricing (`pricing`)
7. About (`about`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #8b5cf6;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name as a single heavy white headline, centred on black.
- **Do:** Keep the primary button dark with a blue edge, and the secondary as plain text.
- **Do:** Use the purple logo tile (#8b5cf6) as the only colour in the nav.
- **Don't:** Don't add a second heavy typeface; the page uses Inter throughout.
- **Don't:** Don't use a light background; the page is black.
- **Don't:** Don't fill the primary button with solid blue; it is dark with an edge.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
