# Design system — Sales Mentoring by James White

`SN-W02215` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, high-drama sales page: a very large bold uppercase sans headline in off-white stacked over two lines, with deep crimson (#b11226) kept for the nav call to action and one highlight. Thin-bordered dark panels hold the problem and proof points at the edges, and a faint video frame sits below the fold. The contrast between massive type and small framed cards gives the page its punch.

**Mood:** dramatic, bold, urgent, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b11226` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b11226` · `#d4d4d4` · `#a3a3a3` · `#737373` · `#000000` · `#111111` · `#171717` · `#8a0e1e` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 136px · h2 60px · h3 18px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 bg-[#B11226] hover:bg-[#8a0e1e] text-white px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#B11226]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Video / media (`video-media`)
3. Stats band (`stats`)
4. Team (`team`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #b11226;
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
    surface: '#111111',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#b11226',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold uppercase at display size in off-white
- **Do:** Use the crimson (#b11226) for the main call to action and one highlight
- **Do:** Frame supporting points in dark panels with thin light borders
- **Don't:** Don't use the crimson for long text or large fills
- **Don't:** Don't add more than two accent colours in one section
- **Don't:** Don't put body copy over the video frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
