# Design system — Mehendi Artist Landing Page Template

`SN-W03722` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-white page on a soft grey satin backdrop, where a photograph of a henna-decorated hand fills the hero. Navigation is a row of small, widely spaced uppercase labels beside a thin spaced wordmark. Nearly all the colour comes from the photography, so the warm henna pattern carries the design while the interface stays in neutral tones.

**Mood:** soft, elegant, quiet, bridal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f4f4f5` · `#71717a` · `#fafafa` · `#a1a1aa` · `#27272a` · `#e4e4e7` · `#d4d4d8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hover:text-gold-600 transition-colors font-geist bg-white/30 backdrop-blur-sm px-2 py-1 rounded-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Let the hero photograph carry the colour, with the interface kept in neutral tones
- **Do:** Set the wordmark and navigation as small, widely spaced uppercase
- **Do:** Use white and pale grey for panels and backgrounds
- **Don't:** Don't add bright accent colours to the page chrome
- **Don't:** Don't place text over the busiest part of the photograph
- **Don't:** Don't use heavy bold weights for the navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
