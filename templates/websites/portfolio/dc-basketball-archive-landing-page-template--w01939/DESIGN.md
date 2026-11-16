# Design system — DC Basketball Archive Landing Page Template

`SN-W01939` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black editorial page with a bold white sans headline, its second line in grey, and a blue-violet primary button beside an outlined secondary. Black-and-white basketball photography sits in rounded frames, with small floating cards carrying stats over the images. Indigo is the only colour, reserved for the main action.

**Mood:** editorial, archival, monochrome, bold, sporty

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#cffafe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#c8cdc7` · `#050505` · `#818cf8` · `#404040` · `#525252` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(59,130,246,0.6)]`, `shadow-[0_0_20px_rgba(37,99,235,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-sage px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 text-black hover:bg-white group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Articles (`blog-articles`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #cffafe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#cffafe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter, white with a grey second line
- **Do:** Use indigo (#818cf8) only for the primary action
- **Do:** Frame photography in rounded corners and float stat cards over it
- **Don't:** Don't add colour to the photography; it reads as black and white
- **Don't:** Don't use a light page background; the ground is black
- **Don't:** Don't put indigo on more than one element per view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
