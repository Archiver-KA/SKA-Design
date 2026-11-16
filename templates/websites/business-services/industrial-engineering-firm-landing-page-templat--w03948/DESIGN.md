# Design system — Industrial Engineering Firm Landing Page Template

`SN-W03948` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A confident industrial-modern page on a white ground (#ffffff). Heavy uppercase sans-serif headlines in near-black stack across the hero, with the middle line set in light grey for contrast. Orange (#ea580c) is the single accent, used for the contact button, small square marks and the status bar on the dark product panel, and faint grid lines behind the hero give the layout a drafted, engineered feel.

**Mood:** engineered, bold, precise, industrial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ea580c` · `#e5e5e5` · `#737373` · `#171717` · `#f97316` · `#a3a3a3` · `#000000` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)]`, `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-neutral-900 text-white text-xs uppercase tracking-widest font-medium px-6 py-3 hover:bg-orange-600 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, with one line in light grey
- **Do:** Use orange (#ea580c) for the contact button and small status accents only
- **Do:** Place dark product panels against the white ground to create contrast
- **Don't:** Don't use orange for large backgrounds or body text
- **Don't:** Don't round the corners of panels or buttons
- **Don't:** Don't remove the faint grid texture behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
