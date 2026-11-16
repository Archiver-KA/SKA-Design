# Design system — Spiritual Movement Landing Page Template

`SN-W03650` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet, spacious opening screen on a warm cream ground with a faint radial glow at its centre. The navigation is restrained, with a small, letter-spaced serif wordmark on the left and a warm gold button on the right as the one highlight. The first screen is nearly empty, so the design's character comes from the soft ground, the spare navigation and the airy typography the page sets below it.

**Mood:** quiet, warm, spacious, reverent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#44403c` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#57534e` · `#78716c` · `#e7e5e4` · `#10b981` · `#d6d3d1` · `#292524` · `#059669` · `#a8a29e` · `#d1fae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-glow-card`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:block btn-glow bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-500 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 relative z-10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Video / media (`video-media`)
7. Bento grid (`bento-grid`)
8. Timeline (`timeline`)
9. Product grid (`product-grid`)
10. Contact form (`contact-form`)
11. Newsletter signup (`newsletter`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #44403c;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f4',
    ink: '#44403c',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground warm and softly lit, with the glow kept faint
- **Do:** Set the wordmark in a small, letter-spaced serif
- **Do:** Use the gold navigation button as the one warm highlight
- **Don't:** Don't add hard-edged graphics to the hero
- **Don't:** Don't place text over the glow without enough contrast
- **Don't:** Don't use the green accent (#10b981) for buttons in the navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
