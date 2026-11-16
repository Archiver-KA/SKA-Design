# Design system — iOS Music App Landing Page Template

`SN-W00469` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, phone-sized music UI with a black ground and rounded panels, showing coloured category tiles in pink, green, purple and orange. Geist sets the headings in a clean sans with small grey metadata. The album art and the tiles provide the colour while the chrome stays neutral. This is a phone mockup, so the layout is built for a narrow screen and not for a desktop page.

**Mood:** clean, app-like, dark, colourful tiles, neutral chrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3aeaf3` | Primary action and highlights |
| Second accent | `#3c69ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#9ca3af` · `#111827` · `#6b7280` · `#3c69ff` · `#3aeaf3` · `#000000` · `#f97316` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 30px · h2 18px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-md`
- **Common gaps:** `gap-1`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #3aeaf3;
  --color-accent-2: #3c69ff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#3aeaf3',
    accent2: '#3c69ff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the ground black and the chrome neutral so the tiles carry the colour
- **Do:** Set section titles in Geist at a medium weight with a More link
- **Do:** Use rounded corners for tiles and cards
- **Don't:** Don't add colour to navigation or body text
- **Don't:** Don't use square tile corners
- **Don't:** Don't present it as a desktop page; the design is a phone frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
