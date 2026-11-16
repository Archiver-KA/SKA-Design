# Design system — Alpine Dental Clinic Landing Page Template

`SN-W02315` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm cream page with a large serif headline in near-black, where the middle word is set in italic. A black pill button leads, with a text link beside it, and the hero photograph sits in an arch-topped frame with small floating cards for treatment and booking details. The layout is editorial and hospitality-led, using dark ink and grey photography rather than colour.

**Mood:** editorial, hospitality, warm, refined, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebe8e0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d4efa8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1a1a1a` · `#4b5563` · `#d4efa8` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#ebe8e0` · `#fbf9f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 bg-[#D4EFA8] text-black rounded-lg text-sm font-semibold hover:bg-[#c2e090] hover:shadow-[0_0_15px_rgba(212,239,168,0.4)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ebe8e0;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #4b5563;
  --color-border: #000000;
  --color-accent: #d4efa8;
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
    background: '#ebe8e0',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#4b5563',
    line: '#000000',
    accent: '#d4efa8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large serif with the middle word in italic
- **Do:** Use a black pill for the primary button and a text link beside it
- **Do:** Frame the hero photograph with an arched top and small floating cards
- **Don't:** Don't use the pale lime (#d4efa8) as a button fill.
- **Don't:** Don't set the headline in sans
- **Don't:** Don't use saturated colour in the photography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
