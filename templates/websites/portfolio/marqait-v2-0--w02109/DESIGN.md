# Design system — Marqait v2.0

`SN-W02109` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, futuristic automation page on near-black [#000000], with the headline NEURAL AUTOMATION set very large in white fading to grey. Floating dark glass cards show workflow steps, a code-style log panel and a single violet [#6366f1] call to action, and a green [#10b981] dot marks live execution. The floating panels around the headline give it a product-demo feel.

**Mood:** futuristic, dark, technical, energetic, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#525252` · `#6366f1` · `#171717` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Process / steps (`how-it-works`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large uppercase sans, white fading to grey.
- **Do:** Use violet (#6366f1) for the primary call to action and the small AI tag only.
- **Do:** Show product fragments as dark glass cards with small uppercase labels.
- **Don't:** Don't use the green (#10b981) for anything except the live status marker.
- **Don't:** Don't place cards over the headline; keep them in the space around it.
- **Don't:** Don't use a light background; the page is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
