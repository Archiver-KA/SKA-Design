# Design system — AI Video Generator Landing Page Template

`SN-W00178` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark studio page on black with a large white headline, where the brand name carries a cyan-to-white gradient (#06b6d4). A centred generator panel, a dark input card with a thin border and a white Generate button, is the focal point of the hero. A faint purple haze behind the panel separates it from the ground without a hard edge.

**Mood:** dark, studio-like, focused, tool-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#fecdd3` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#171717` · `#06b6d4` · `#737373` · `#a3a3a3` · `#020202` · `#000000` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1.5`

**Primary button**

```html
<a class="w-full md:w-auto relative group overflow-hidden rounded-xl px-8 py-2.5 bg-white text-black font-semibold text-sm hover:brightness-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #262626;
  --color-accent: #06b6d4;
  --color-accent-2: #fecdd3;
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
    surface: '#333333',
    ink: '#ffffff',
    muted: '#262626',
    line: '#262626',
    accent: '#06b6d4',
    accent2: '#fecdd3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#06b6d4) only for the gradient on the brand word in the headline
- **Do:** Frame the generator as a dark card with a thin border and a white Generate button
- **Do:** Set headlines in heavy sans-serif, white, centred
- **Don't:** Don't use the cyan for buttons; the Generate action is white
- **Don't:** Don't set the headline on a light ground; the page is black
- **Don't:** Don't put extra panels above the generator; the input is the first thing seen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
