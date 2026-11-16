# Design system — Futuristic Energy SaaS Landing Page Template

`SN-W00410` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark page lit by a magenta-red radial glow (#ff1470) behind the hero, with the second headline line set as a pink gradient. The rest is white on near-black, with a solid white primary button and a dark outlined secondary button, both in a tight pill shape. A dark code terminal strip sits at the foot of the first screen, which points the energy pitch at a developer audience.

**Mood:** high-energy, dark, saturated, developer-facing, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff1470` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff1470` · `#9ca3af` · `#900030` · `#0a0a0a` · `#6b7280` · `#050505` · `#1f2937` · `#000000` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_white]`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="w-full md:w-auto px-6 py-3 bg-[#FF1470] hover:bg-[#d60055] font-medium rounded-full transition-colors shadow-lg text-white shadow-pink-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff1470;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff1470',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the magenta (#ff1470) for the glow and the gradient headline line only
- **Do:** Keep the primary button solid white and the secondary button dark and outlined
- **Do:** Place the terminal strip directly under the hero to signal the developer audience
- **Don't:** Don't use a light background; the page is dark even though the mode is recorded as light
- **Don't:** Don't apply the gradient to body copy
- **Don't:** Don't add a third accent colour; the palette is magenta, white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
