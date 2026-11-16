# Design system — 4Bizz SaaS Micro-Site Builder Template

`SN-W00006` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `lv`

## Direction

A warm light-grey page with a very heavy, tightly set black headline in Latvian fills the first screen. The orange-red (#e0562a) is kept for the brand dot and the numbered steps, and the primary action is a solid black pill beside a white outline pill. The headline is a heavy grotesque.

**Mood:** bold, direct, warm, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ecedee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#232427` | Headings and primary copy |
| Muted text | `#5b5d61` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e0562a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e0562a` · `#171719` · `#000000` · `#5b5d61` · `#ecedee` · `#f0754e` · `#202024` · `#2e3034` · `#232427`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-[-0.03em]`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[28px]` (28px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-[1440px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="mt-8 flex justify-center rounded-full bg-[#E0562A] py-3 text-sm font-semibold transition hover:bg-[#F0754E]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ecedee;
  --color-surface: #ffffff;
  --color-text: #232427;
  --color-muted: #5b5d61;
  --color-border: #000000;
  --color-accent: #e0562a;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ecedee',
    surface: '#ffffff',
    ink: '#232427',
    muted: '#5b5d61',
    line: '#000000',
    accent: '#e0562a',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Keep the primary button solid black and the secondary a white pill
- **Do:** Use the orange-red (#e0562a) for step numbers and the brand dot only
- **Do:** Set the hero headline heavy and tightly tracked, centred
- **Don't:** Don't use the orange-red as a button fill
- **Don't:** Don't add decorative shadows to the step cards
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
