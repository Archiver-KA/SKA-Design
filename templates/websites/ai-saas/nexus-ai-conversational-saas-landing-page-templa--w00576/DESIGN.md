# Design system — Nexus AI Conversational SaaS Landing Page Template

`SN-W00576` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Despite its light mode flag, the first screen renders dark: a black ground with white type, a bold geometric sans headline, and a soft blue-green glow behind the hero. Sky blue (#38bdf8) appears only as thin highlights inside the product mock. Calls to action are outlined pills with white borders, so the page reads as quiet and product-led, with colour almost absent from the text.

**Mood:** dark, product-led, quiet, geometric, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#000000` · `#94a3b8` · `#d4d4d4` · `#38bdf8` · `#a3a3a3` · `#262626` · `#0ea5e9` · `#020204`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Aeonik Pro
- **Body:** Aeonik Pro
- **Loaded families:** Geist, Inter, Aeonik Pro
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-black/50`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #34d399;
  --font-display: "Aeonik Pro", sans-serif;
  --font-body: "Aeonik Pro", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Aeonik Pro'], sans: ['Aeonik Pro'] },
} }
```

## Do and don't

- **Do:** Set the page ground to black (#000000) with white text (#ffffff) in the hero and nav.
- **Do:** Use the sky blue (#38bdf8) only for thin highlights inside product mockups.
- **Do:** Keep calls to action as outlined pills with white borders, with one filled white button per screen.
- **Don't:** Don't treat the light mode flag as the page ground; this template renders dark.
- **Don't:** Don't fill large areas with sky blue; it is a highlight colour.
- **Don't:** Don't add a decorative gradient background; the glow is a soft blur behind the hero only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
