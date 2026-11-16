# Design system — AI ESG Platform Landing Page Template

`SN-W00094` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Veridian is a dark, serious ESG page on a near-black ground with a faint green tint (#020402). The hero headline is a large serif, white, with the middle line set in grey italic and the last word in a pale mint gradient. The layout is centred and quiet, with a glass-style nav bar and a single solid white button for the main action.

**Mood:** serious, dark, editorial, quiet, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020402` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0f0c` · `#020402` · `#f87171` · `#374151` · `#030303` · `#0c0a09` · `#080808` · `#101010`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(16,185,129,1)]`, `shadow-[0_0_30px_rgba(16,185,129,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-brand-green hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020402;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --color-accent-2: #3b82f6;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020402',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#f87171',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in the serif display face, mixing white roman and grey italic lines
- **Do:** Use the mint green gradient only on the final headline phrase
- **Do:** Keep the nav in a rounded glass bar above the hero
- **Don't:** Don't use the red (#f87171) as an accent; green is the accent
- **Don't:** Don't set the headline in sans-serif; the display face is serif
- **Don't:** Don't use more than one solid button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
