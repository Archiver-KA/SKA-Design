# Design system — Life Design Systems Landing Page Template

`SN-W00493` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, bold page on near-black (#000000) with heavy uppercase-feeling Inter headlines and a single lime (#ccf655) button as the one bright element. Pill-shaped status tags and a centred hero give a confident, blunt tone that suits a brutalist methodology brand. The lime is used sparingly, so it reads as the one thing to press.

**Mood:** blunt, bold, brutalist, confident, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccf655` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#facc15` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#000000` · `#ccf655` · `#262626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Instrument Serif, Space Grotesk, Geist, Roboto
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_30px_rgba(250,204,21,0.4)]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#ccf655] text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#bce34d] transition-colors shadow-[0_0_20px_rgba(204,246,85,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccf655;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccf655',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccf655) only for the primary call to action.
- **Do:** Set headlines large and heavy in Inter on the black ground.
- **Do:** Mark status with small outlined pill tags.
- **Don't:** Don't add soft gradients or blurred glows; the look is blunt.
- **Don't:** Don't use the yellow (#facc15) next to the lime; they compete.
- **Don't:** Don't set body text in lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
