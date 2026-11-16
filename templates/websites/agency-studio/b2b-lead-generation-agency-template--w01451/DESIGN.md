# Design system — B2B Lead Generation Agency Template

`SN-W01451` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#111111]) with a coral italic phrase ([#fb7185]) inside a large white serif headline. The headline runs to three centred lines with a thin rule under the key words, and a single pill button sits in the nav. The layout is restrained: one accent colour, no gradients, and generous space around the copy.

**Mood:** restrained, serif-led, dark, direct, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#fb7185` · `#111111` · `#6b7280` · `#0a0a0a` · `#881337` · `#000000` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter, Montserrat, JetBrains Mono
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-2 md:px-5 md:py-2.5 hover:bg-gray-200 transition-colors shrink-0 text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Team (`team`)
9. FAQ (`faq`)
10. Video / media (`video-media`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --color-accent-2: #10b981;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb7185',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Use coral (#fb7185) for the italic highlight phrase only
- **Do:** Set headlines in a serif at large size with a thin underline on the key words
- **Do:** Keep the nav as a plain bar with one white pill button
- **Don't:** Don't add gradients to the headline
- **Don't:** Don't use the coral for buttons
- **Don't:** Don't use a light ground for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
