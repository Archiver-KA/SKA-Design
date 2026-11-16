# Design system — DJ.Ozi

`SN-W01994` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Romantic event page: a red-washed photograph fills the hero, with a large bold white sans headline stacked on three or four lines and the second phrase fading from light grey to white. The floating nav is a dark rounded bar with a single white circular action. The red wash from the photo sets the mood, and the body copy sits small at the lower left.

**Mood:** romantic, photographic, dramatic, red-washed, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#7f1d1d` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#737373` · `#dc2626` · `#a3a3a3` · `#171717` · `#d4d4d4` · `#050505` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide overflow-hidden rounded-sm transition-all hover:pr-10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Services (`services`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #7f1d1d;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#7f1d1d',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use a photographic hero with a red wash, and place the headline over its darker area
- **Do:** Set the headline in a heavy white sans across three or four lines, with a grey gradient on the second phrase
- **Do:** Keep the floating nav as a dark rounded bar with one white circular action
- **Don't:** Don't place body copy over the brightest part of the photo
- **Don't:** Don't add accent colours beyond the red wash and white
- **Don't:** Don't set small text over the photo without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
