# Design system — Latin Barbershop Landing Page Template

`SN-W02766` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A loud, high-contrast barbershop template on a near-black ground (#0a0a0a). The hero headline is stacked in four heavy caps lines, each colour-coded: white, red (#cc1f1f), white and cyan (#00cfcf). Red carries the nav and primary button, and cyan is kept for one word per hero, so the page reads as a bold poster rather than a quiet luxury site.

**Mood:** bold, loud, high-contrast, graphic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#aaaaaa` | Secondary copy, captions |
| Border | `#161616` | Hairlines, dividers, outlines |
| Accent | `#cc1f1f` | Primary action and highlights |
| Second accent | `#00cfcf` | Supporting highlights |

Palette by frequency of use: `#00cfcf` · `#cc1f1f` · `#ffffff` · `#aaaaaa` · `#161616` · `#0a0a0a` · `#1a0505` · `#000000` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(204,31,31,0.15)]`, `shadow-[0_0_15px_rgba(204,31,31,0.5)]`, `shadow-[0_0_20px_rgba(204,31,31,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center bg-[#CC1F1F] text-white font-semibold rounded-md px-6 py-2.5 text-base hover:bg-[#CC1F1F]/90 hover:shadow-[0_0_20px_rgba(204,31,31,0.5)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Call to action (`cta`)
6. Services (`services`)
7. Booking form (`booking`)
8. Map / location (`map-location`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #161616;
  --color-text: #ffffff;
  --color-muted: #aaaaaa;
  --color-border: #161616;
  --color-accent: #cc1f1f;
  --color-accent-2: #00cfcf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#161616',
    ink: '#ffffff',
    muted: '#aaaaaa',
    line: '#161616',
    accent: '#cc1f1f',
    accent2: '#00cfcf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in heavy caps, colouring one word per line in white, red (#cc1f1f) or cyan (#00cfcf).
- **Do:** Keep the page on near-black (#0a0a0a) with white text.
- **Do:** Use red for the primary button and cyan for one highlight per section.
- **Don't:** Don't set long body copy in red or cyan.
- **Don't:** Don't add light section backgrounds; the page stays dark.
- **Don't:** Don't use more than one cyan word in a single headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
