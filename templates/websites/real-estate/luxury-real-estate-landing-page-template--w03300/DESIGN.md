# Design system — Luxury Real Estate Landing Page Template

`SN-W03300` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, photographic hero with a large light sans headline set over a dim architectural image. The interface is near-black with white as the only accent: the filled white button is the primary action and translucent dark panels hold the figures. Small tracked uppercase labels with a dot mark the category above the headline.

**Mood:** dark, photographic, monochrome, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#cbd5e1` · `#64748b` · `#94a3b8` · `#050505` · `#e2e8f0` · `#6366f1` · `#34d399` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-slate-200 transition-all flex items-center gap-3 group text-sm tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Bento grid (`bento-grid`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #f5f5f5;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
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
    surface: '#050505',
    ink: '#f5f5f5',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size, in white over the dim photograph.
- **Do:** Use the white filled button for the primary action and an outline for the secondary.
- **Do:** Put figures in translucent dark panels with small tracked labels above them.
- **Don't:** Don't introduce indigo or green; the page stays monochrome.
- **Don't:** Don't brighten the photograph behind the headline.
- **Don't:** Don't add a colour accent to the stat panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
