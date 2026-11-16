# Design system — DJ & Music Artist Landing Page Template

`SN-W03688` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed photograph of a DJ under neon light, with a very large white uppercase wordmark across the middle and a single white pill as the call to action. The page takes its colour and motion from the photograph, while the interface stays white and black. Navigation links are small and sit in the top corners.

**Mood:** nocturnal, energetic, photographic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#701a75` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#000000` · `#525252` · `#050505` · `#e5e5e5` · `#262626` · `#6366f1` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Content width:** `max-w-screen-xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-8 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Listings (`listings`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #701a75;
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
    surface: '#262626',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#701a75',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use one oversized white uppercase wordmark over the hero image
- **Do:** Keep the call to action as a solid white pill
- **Do:** Let the photograph carry the colour and keep interface elements neutral
- **Don't:** Don't add a coloured overlay over the wordmark
- **Don't:** Don't place small body text over the photograph
- **Don't:** Don't add more than one button to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
