# Design system — RevRelay - B2B Appointment Setting for Businesses

`SN-W01680` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark, cinematic B2B page set in a serif display face, with white headlines and the key phrase in italic coral (#fb7185). Content sits in a large near-black panel with a thin rounded frame on a darker outer ground, and the navbar is a floating pill. The result reads as premium and sober, with coral used for the one phrase the reader must notice.

**Mood:** premium, sober, cinematic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
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
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
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
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#fb7185',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display face, and italicise the one emphasised phrase in coral (#fb7185).
- **Do:** Keep the page on near-black (#0a0a0a) with white headings and grey (#9ca3af) body text.
- **Do:** Float the navbar as a rounded pill over the hero.
- **Don't:** Don't use coral for more than one phrase or button per section.
- **Don't:** Don't add light sections to the hero; the first screen is dark.
- **Don't:** Don't set the headlines in a sans-serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
