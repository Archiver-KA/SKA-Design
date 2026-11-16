# Design system — TUNGSTER HOME PAGE

`SN-W01334` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, cinematic fashion hero on near-black, with a field of luminous violet wave lines sweeping across the right two-thirds of the screen. The headline sets a white first line over a grey second line in a clean sans-serif, and the copy sits low on the left over the lines. The violet stays in the graphic, not the controls.

**Mood:** cinematic, dark, futuristic, fashion-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#d1d5db` · `#9ca3af` · `#6b7280` · `#e5e7eb` · `#111827` · `#1f2937` · `#4b5563` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-6 py-3 border border-white/20 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e7eb;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e7eb',
    ink: '#000000',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero black with white type and let the violet line graphic be the only colour
- **Do:** Set the headline as white over grey on two lines in a clean sans-serif
- **Do:** Use a white block for the primary action and an outline for the secondary
- **Don't:** Don't use violet for buttons or text; the colour belongs to the graphic
- **Don't:** Don't place body copy over the densest part of the lines; keep it in the lower left
- **Don't:** Don't put light section backgrounds directly under this hero; the dark ground carries on

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
