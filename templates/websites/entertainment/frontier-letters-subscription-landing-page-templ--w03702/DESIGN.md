# Design system — Frontier Letters Subscription Landing Page Template

`SN-W03702` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Warm black ground with a serif display headline in off-white capitals, where the second line is set in amber (#d97706) and picks up a gold gradient. A small uppercase eyebrow and a quiet wordmark frame the page, and the primary button is a solid amber block beside a plain outlined secondary. The palette is warm and restrained, so the amber carries the emphasis and the stationery mood.

**Mood:** warm, literary, ceremonial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#d97706` · `#0c0a09` · `#f5f5f4` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#e7e5e4` · `#292524` · `#ffffff` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Crimson Pro
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(180,83,9,0.4)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="bg-stone-100 text-stone-900 px-5 py-2.5 rounded hover:bg-amber-350 transition-colors font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif, with the key phrase in amber (#d97706)
- **Do:** Use the amber fill only for the primary button and the headline accent
- **Do:** Keep eyebrow labels small, uppercase and widely tracked
- **Don't:** Don't use a cool blue or neon colour on the page
- **Don't:** Don't set the headline in a geometric sans
- **Don't:** Don't add a second filled button beside the primary one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
