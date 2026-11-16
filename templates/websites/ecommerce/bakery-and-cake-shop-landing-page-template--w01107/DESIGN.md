# Design system — Bakery & Cake Shop Landing Page Template

`SN-W01107` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A friendly local-bakery page on pale cream (#fff7ed), with a heavy dark sans headline centred over a short grey lead. The primary action is a solid green button that points to an ordering platform, and the secondary is an outlined dark button, so ordering is the one colour decision. A small orange-dotted eyebrow pill is the only other accent.

**Mood:** friendly, local, warm, approachable, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff7ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#bbf7d0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#44403c` · `#f5f5f4` · `#ea580c` · `#bbf7d0` · `#a8a29e` · `#78716c` · `#292524` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Space Grotesk, Nunito
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. FAQ (`faq`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff7ed;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ea580c;
  --color-accent-2: #bbf7d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff7ed',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ea580c',
    accent2: '#bbf7d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green for the ordering button only
- **Do:** Keep the eyebrow tag small, with an orange dot (#ea580c)
- **Do:** Keep hero headlines to two lines at most, centred
- **Don't:** Don't use orange for buttons
- **Don't:** Don't set body text lighter than the grey already in use on cream
- **Don't:** Don't put a menu grid above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
