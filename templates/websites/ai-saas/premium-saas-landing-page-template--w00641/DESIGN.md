# Design system — Premium SaaS Landing Page Template

`SN-W00641` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero where the first phrase is white and the second is set in an amber gradient (#fbbf24), giving a warm two-tone headline. The primary button is a dark amber fill with a soft glow, and the navigation sits in a glass pill. Warm light appears only in the gradient and the button glow, and the rest of the page stays neutral grey-black.

**Mood:** cinematic, warm, luxe, dark, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#000000` · `#d4d4d4` · `#262626` · `#0a0a0a` · `#525252` · `#171717` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="relative inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. 3D / canvas scene (`3d-canvas`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
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
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in an amber gradient (#fbbf24) and the first phrase in white
- **Do:** Use amber (#fbbf24) on the primary button and the gradient line only
- **Do:** Keep the navigation in a glass pill and body copy in light grey (#d4d4d4)
- **Don't:** Don't put the amber gradient on body copy
- **Don't:** Don't add a second warm hue to the hero
- **Don't:** Don't put the gradient on the button label

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
