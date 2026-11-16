# Design system — Consulting Framework Landing Page Template

`SN-W01472` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grey ground ([#e4e4e7]) with a single white card centred on the page, holding a large dark headline in two weights and a short coral rule beneath it. The card is the only object in the hero, and a vertical dot indicator on the right edge shows section progress. The palette is neutral and the card corners are generously rounded.

**Mood:** minimal, calm, neutral, card-led, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e4e4e7` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#a1a1aa` · `#f4f4f5` · `#ffffff` · `#e4e4e7` · `#d4d4d8` · `#27272a` · `#18181b` · `#71717a` · `#10b981` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · body 10px
- **Weights in use:** bold, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[420px]`, `max-w-[280px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-8 bg-white text-zinc-900 hover:bg-zinc-200 transition-all rounded-full px-8 py-3 text-sm font-semibold tracking-wide hover:shadow-lg hover:-translate-y-1 duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e4e4e7;
  --color-surface: #d4d4d8;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #10b981;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e4e4e7',
    surface: '#d4d4d8',
    ink: '#27272a',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#10b981',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep one white card centred on the light grey ground (#e4e4e7)
- **Do:** Set the headline in Inter in two weights, with the second line in lighter grey
- **Do:** Use a short rule under the headline as the only decorative mark
- **Don't:** Don't add more than one card to the hero
- **Don't:** Don't use a dark background for the hero
- **Don't:** Don't use heavy shadows on the card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
