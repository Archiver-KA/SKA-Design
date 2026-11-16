# Design system — Horizon Analytical Lab Testing Landing Page Template

`SN-W02416` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The lab page is a clean white layout: a large sans headline in near-black with the second line in one saturated blue (#035db8), and a solid blue primary button beside an outlined secondary. The hero's right side shows a certificate-of-analysis card with a green pass tag, so green is reserved for verified status. The type is tight and sized for statements, and the overall tone is precise and trustworthy.

**Mood:** clinical, precise, trustworthy, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#035db8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#035db8` · `#94a3b8` · `#475569` · `#f8fafc` · `#e5e7eb` · `#eff6ff` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#035DB8] hover:bg-blue-700 text-white px-6 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-manrope text-sm whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Stats band (`stats`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Services (`services`)
7. Bento grid (`bento-grid`)
8. Logo cloud (`logo-cloud`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #e5e7eb;
  --color-accent: #035db8;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#e5e7eb',
    accent: '#035db8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in blue (#035db8) and the first line in near-black
- **Do:** Use solid blue for the primary button and an outlined button for the secondary
- **Do:** Show results as a certificate-style card with a green pass tag
- **Don't:** Don't use green for anything except pass or verified states
- **Don't:** Don't add decorative gradients to the white ground
- **Don't:** Don't make the secondary button solid; it stays outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
