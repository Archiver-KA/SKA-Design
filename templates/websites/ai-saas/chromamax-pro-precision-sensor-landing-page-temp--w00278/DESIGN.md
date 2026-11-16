# Design system — ChromaMax Pro Precision Sensor Landing Page Template

`SN-W00278` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, precise hardware landing page: a near-black ground (#171717) with a large bold white headline over three lines, and a small teal (#34d399) label and buttons as the only colour. The product is shown as stacked dark panels holding circular colour-ring renders in a green-to-orange sweep, which supply the visual interest. Spec chips sit as thin outlined pills under the copy, so the page reads as an engineered product sheet.

**Mood:** precise, dark, engineered, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#a7f3d0` · `#06b6d4` · `#a1a1aa` · `#10b981` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 48px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_40px_rgba(16,185,129,0.12)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-neutral-200 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Feature grid (`features`)
4. Product detail (`product-detail`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #171717 and the headline in bold white
- **Do:** Use teal (#34d399) for the series label and the primary button
- **Do:** Keep spec chips as thin outlined pills under the copy
- **Don't:** Don't introduce colour beyond the sensor ring renders and the teal
- **Don't:** Don't set the spec chips in a bold weight; they stay quiet
- **Don't:** Don't put the product renders on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
