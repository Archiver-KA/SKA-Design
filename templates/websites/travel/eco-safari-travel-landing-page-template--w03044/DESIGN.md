# Design system — Eco Safari Travel Landing Page Template

`SN-W03044` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page built around photography: a dark nav pill floats at the top, and a large white sans headline sits beside a lion photograph in a rounded card. The second headline line is grey, and a saturated blue primary button does the work, while a dark trip-summary card overlaps the photo at the right. Blue is the only colour in the first screen.

**Mood:** photographic, dark, precise, wild

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#171717` · `#262626` · `#d4d4d4` · `#737373` · `#0a0a0a` · `#60a5fa` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-neutral-200 hover:bg-white text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #60a5fa;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#60a5fa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, with the second line in grey
- **Do:** Use blue (#60a5fa) for the primary button only
- **Do:** Overlap a dark summary card onto the edge of the photograph
- **Don't:** Don't use blue for headings; it is reserved for buttons
- **Don't:** Don't add warm colours to the chrome; the page is black, white and grey
- **Don't:** Don't push the photograph below the fold; it leads the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
