# Design system — AI Agents & 3D Services Landing Page Template

`SN-W00032` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, premium stance: a pure black ground (#000000) with a soft violet glow, where the gradient on one headline word is the only colourful moment. Inter at about 72px sets the headline in white, with a muted slate subtitle, a white primary button and a dark outline secondary beside it. A dark card below the hero holds the 3D preview in its own framed space.

**Mood:** premium, dark, polished, bold, immersive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#64748b` · `#000000` · `#818cf8` · `#a855f7` · `#ec4899` · `#e2e8f0` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #555555;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #ec4899;
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
    surface: '#555555',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give one accent word per headline the indigo-to-violet gradient
- **Do:** Use white for the primary button and a dark outline for the secondary
- **Do:** Frame 3D previews in a dark rounded card rather than letting them bleed into the page
- **Don't:** Don't put the gradient on body text
- **Don't:** Don't switch to a light page ground; the look depends on the black
- **Don't:** Don't add gradient colours beyond the indigo and violet pair

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
