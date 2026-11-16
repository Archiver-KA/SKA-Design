# Design system — Atelier Furniture Landing Page Template

`SN-W01819` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-br`

## Direction

Artisanal and light: a warm cream ground (#f3f1eb) with a large serif headline in deep green-black (#1a2e22) and grey sans body copy. A dark green button and a small product card sit below the hero. The palette stays earthy and quiet, and the serif gives it a crafted tone.

**Mood:** artisanal, warm, quiet, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f1eb` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#1a2e22` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1a2e22` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |

Palette by frequency of use: `#1a2e22` · `#ffffff` · `#f3f1eb` · `#000000` · `#6b7280` · `#16a34a` · `#15803d` · `#f3f4f6` · `#bbf7d0` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[#1A2E22]/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f1eb;
  --color-surface: #000000;
  --color-text: #1a2e22;
  --color-muted: #6b7280;
  --color-border: #1a2e22;
  --color-accent: #16a34a;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f1eb',
    surface: '#000000',
    ink: '#1a2e22',
    muted: '#6b7280',
    line: '#1a2e22',
    accent: '#16a34a',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on warm cream (#f3f1eb)
- **Do:** Use the serif for headlines and grey sans for body copy
- **Do:** Keep product cards on white with the photograph above the caption
- **Don't:** Don't switch to a dark ground; the design is light.
- **Don't:** Don't use bright green fills; the button is deep green
- **Don't:** Don't set headlines in a sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
