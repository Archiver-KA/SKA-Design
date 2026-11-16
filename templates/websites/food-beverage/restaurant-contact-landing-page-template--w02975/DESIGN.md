# Design system — Restaurant Contact Landing Page Template

`SN-W02975` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black contact page with a centred Forum serif heading at large size, a muted grey subtitle, and a filled burnt-orange (#c65a1e) primary button beside a dark outlined secondary button. The rust is the only colour, which gives the page a restrained tavern tone. Below the hero the layout splits into an address column and a framed form card on a dark surface.

**Mood:** restrained, tavern, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#c65a1e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c65a1e` · `#18181b` · `#a1a1aa` · `#71717a` · `#27272a` · `#09090b` · `#3f3f46` · `#e4e4e7` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Forum
- **Body:** Forum
- **Loaded families:** Forum, Open Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_0_100px_rgba(9,9,11,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 bg-[#C65A1E] text-white hover:bg-[#a54a18] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Map / location (`map-location`)
5. Call to action (`cta`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #c65a1e;
  --font-display: "Forum", sans-serif;
  --font-body: "Forum", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#c65a1e',
  },
  fontFamily: { display: ['Forum'], sans: ['Forum'] },
} }
```

## Do and don't

- **Do:** Use the burnt orange (#c65a1e) for the primary button only.
- **Do:** Set headings in Forum at a large size, centred over the hero.
- **Do:** Frame forms and address blocks in dark surface cards with a thin border.
- **Don't:** Don't fill secondary buttons with colour; use a dark outline.
- **Don't:** Don't introduce bright colours beyond the rust accent.
- **Don't:** Don't set body text in a sans-serif; Forum is used throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
