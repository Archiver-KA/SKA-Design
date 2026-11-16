# Design system — Mikrolapas Multi-Purpose Microsite Template

`SN-W03315` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `lv`

## Direction

A black page with a heavy display sans in white, where the second phrase of the headline sits inside a full-width orange (#e0562a) pill. The orange is the page's only colour and it also marks the primary button in the top bar. Headline size does most of the work, and the type is set large enough to fill the width of the first screen.

**Mood:** bold, loud, dark, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e0562a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e0562a` · `#000000` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#09090b` · `#52525b` · `#18181b` · `#f26e43`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter, Space Grotesk, Space Mono, Geist
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-black`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`, `py-40`
- **Common gaps:** `gap-3`, `gap-5`, `gap-2`

**Primary button**

```html
<a class="rounded-full bg-[#E0562A] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f26e43] font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #e0562a;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#e0562a',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy display sans in white, large, on black.
- **Do:** Use the orange (#e0562a) for the highlight pill and the primary button only.
- **Do:** Set the highlight phrase inside a full-width pill in orange.
- **Don't:** Don't use orange for body text; it stays on the pill and the button.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't soften the headline with light weights; the weight is the identity.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
