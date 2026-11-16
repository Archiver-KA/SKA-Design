# Design system — Solflare Real Estate Landing Page Template

`SN-W03383` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark remodelling landing page built on a full-bleed interior photograph under a dark overlay. A large white headline reads across the top of the image, with one phrase in amber (#f59e0b) for emphasis. Amber is the only accent colour and is reserved for that phrase and the primary button, so the layout stays restrained and the image sets the mood.

**Mood:** moody, restrained, photographic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#0b0b0c` · `#000000` · `#64748b` · `#94a3b8` · `#475569` · `#fcd34d` · `#e2e8f0` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Satisfy
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-amber-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full bg-amber-500 hover:bg-amber-400 text-[#0b0b0c] font-medium py-3 rounded-full transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Listings (`listings`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline in white (#ffffff) and colour only one phrase in amber (#f59e0b).
- **Do:** Lay the photo full-bleed under a dark overlay so the headline sits on a calm area.
- **Do:** Limit amber to the primary button and the highlighted phrase.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't place body copy directly over the brightest part of the photo.
- **Don't:** Don't set the highlight phrase in a heavier weight than the rest of the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
