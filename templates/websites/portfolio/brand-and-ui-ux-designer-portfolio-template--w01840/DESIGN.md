# Design system — Brand & UI/UX Designer Portfolio Template

`SN-W01840` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark portfolio on near-black (#0a0a0a) where the presenter's portrait sits in an arch-shaped frame beside a large white Inter headline. The second line is set in grey, and a single warm orange pill button carries the call to action. A floating glass-style pill navigation bar sits above the page and keeps the screen simple.

**Mood:** dark, personal, premium, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#d4d4d4` · `#a3a3a3` · `#737373` · `#171717` · `#000000` · `#0a0a0a` · `#262626` · `#111111` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-brand-500/20`, `shadow-brand-500/10`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-brand-600 hover:bg-brand-500 text-white rounded-full px-8 py-4 font-medium flex items-center gap-2 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use an arch-cropped portrait as the hero image shape
- **Do:** Keep the headline in Inter with the second phrase in grey
- **Do:** Reserve the orange primary button for the main call to action
- **Don't:** Don't use more than one bright accent per screen
- **Don't:** Don't set the headline over a busy photograph
- **Don't:** Don't use square corners on pills and buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
