# Design system — Digital Studio Landing Page Template

`SN-W01555` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground carries uppercase Montserrat headlines in near-white, with colour coming only from a warm cream (#ede7df) on the primary button and an outlined ghost button beside it. The layout is centred and spacious, with wide letter-spaced labels and a numbered section system such as 01 / Philosophy. Restraint is the signature: no hero imagery, just type and one cream action.

**Mood:** restrained, austere, editorial, spacious, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ede7df` | Primary action and highlights |
| Second accent | `#4a6bb8` | Supporting highlights |

Palette by frequency of use: `#ede7df` · `#ffffff` · `#4a6bb8` · `#000000` · `#0f1113` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 12px · h3 48px · body 12px
- **Weights in use:** light, extralight, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-accent/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="group relative px-8 py-4 text-[0.7rem] uppercase letter-spacing-wide bg-[#EDE7DF] text-black overflow-hidden transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #000000;
  --color-border: #ffffff;
  --color-accent: #ede7df;
  --color-accent-2: #4a6bb8;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#000000',
    line: '#ffffff',
    accent: '#ede7df',
    accent2: '#4a6bb8',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set section labels in uppercase with wide tracking and a numbered prefix
- **Do:** Use the cream (#ede7df) only for the primary call to action
- **Do:** Keep the hero on black with type only and no decorative imagery
- **Don't:** Don't use the blue (#4a6bb8) as a background; it works as an accent only
- **Don't:** Don't set headlines in mixed case; the hero is all capitals
- **Don't:** Don't add colour to the hero beyond the single cream action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
