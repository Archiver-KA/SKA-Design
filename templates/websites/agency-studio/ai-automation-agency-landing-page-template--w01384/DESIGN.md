# Design system — AI Automation Agency Landing Page Template

`SN-W01384` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a centred white headline in Inter, where the phrase Real Outcomes has a thin yellow underline stroke beneath it. A solid yellow primary button sits beside a dark outlined secondary, and three small uppercase metrics sit in a row under the buttons. Yellow (#eab308) is the one accent and marks the action and the underline, so the page is stark and direct.

**Mood:** stark, direct, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#e1306c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#030303` · `#25d366` · `#e1306c` · `#facc15` · `#222222` · `#333333` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 48px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-yellow-500 rounded-full text-black font-semibold tracking-wide overflow-hidden transition-transform hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Articles (`blog-articles`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #e1306c;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#e1306c',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in white Inter, centred, with one phrase underlined in yellow (#eab308).
- **Do:** Use yellow for the primary button and the underline stroke only.
- **Do:** Set the metric row in small uppercase grey with wide tracking.
- **Don't:** Don't add more than one underline stroke per headline.
- **Don't:** Don't use yellow as a large section background.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
