# Design system — Photography Portfolio Landing Page Template

`SN-W02163` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Clean and mobile-first: rounded white cards sit on a pale ground (#f9fafb) with Geist type in near-black (#171717) and grey captions. The brand comes from the black pill navigation bar and the dark bottom action bar rather than colour, so most of the page stays neutral. Image tiles are cropped square with generous gaps, and each card carries one short heading.

**Mood:** clean, mobile-first, neutral, airy, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#e5e5e5` · `#000000` · `#525252` · `#f5f5f5` · `#404040` · `#262626` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium backdrop-blur bg-white/90 text-neutral-900">…</a>
```

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Hero (`hero`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use Geist for all text, with headings in near-black (#171717)
- **Do:** Use the black pill navbar and dark bottom bar as the only dark elements
- **Do:** Crop gallery images square and keep gaps even
- **Don't:** Don't add gradients or glow blobs; the page is flat
- **Don't:** Don't use coloured accents on the cards; keep them neutral
- **Don't:** Don't add a second heading level inside each card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
