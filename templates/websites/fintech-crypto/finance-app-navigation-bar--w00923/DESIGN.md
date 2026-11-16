# Design system — Finance App Navigation Bar

`SN-W00923` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark finance-app hero on a near-black [#030712] ground, with a cyan [#22d3ee] filled primary button and a cyan-to-green gradient on the second headline line. The first headline line is in a serif, and the right column is a soft grey gradient panel that stands in for a product shot. Trust signals sit under the buttons as small avatars and star ratings.

**Mood:** modern, dark, fresh, fintech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#000000` · `#22d3ee` · `#94a3b8` · `#4ade80` · `#020617` · `#475569` · `#1e293b` · `#0f172a` · `#4b5563` · `#ca8a04`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 from-cyan-400 to-green-400 text-black font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. App download (`app-download`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #000000;
  --color-text: #f3f4f6;
  --color-muted: #94a3b8;
  --color-border: #000000;
  --color-accent: #22d3ee;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#000000',
    ink: '#f3f4f6',
    muted: '#94a3b8',
    line: '#000000',
    accent: '#22d3ee',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in serif and the second in the cyan-to-green gradient
- **Do:** Use cyan (#22d3ee) for the primary button and green (#4ade80) for the secondary accent
- **Do:** Put trust signals under the buttons as small avatars and star ratings
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add a third accent colour beside cyan and green
- **Don't:** Don't swap the grey gradient panel for a photo without checking the contrast of the overlaid text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
