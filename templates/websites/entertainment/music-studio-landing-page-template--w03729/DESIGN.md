# Design system — Music Studio Landing Page Template

`SN-W03729` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Charcoal-black ground with a very large bold sans headline in white, set in two centred lines above a short paragraph. A warm beige (#c8bda5) fills the primary button and the navigation's booking action, and a small emblem of three vertical bars sits above the title. The palette is restrained, so the beige gives the studio a classic, warm tone without ornament.

**Mood:** classic, warm, confident, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#dcd3c1` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8bda5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#111111` · `#c8bda5` · `#dcd3c1` · `#262626` · `#737373` · `#1a1a1a` · `#151515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Inter, Manrope, Space Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 30px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1500px]`, `max-w-6xl`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#C8BDA5] hover:bg-white text-[#111111] px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Call to action (`cta`)
6. Awards / press (`awards-press`)
7. Bento grid (`bento-grid`)
8. Timeline (`timeline`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #dcd3c1;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c8bda5;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#dcd3c1',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c8bda5',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold white sans, centred, over two lines
- **Do:** Use the warm beige (#c8bda5) for primary buttons only
- **Do:** Place a small emblem above the headline
- **Don't:** Don't add bright colour to the page
- **Don't:** Don't set the headline in a serif
- **Don't:** Don't set the page on a light beige background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
