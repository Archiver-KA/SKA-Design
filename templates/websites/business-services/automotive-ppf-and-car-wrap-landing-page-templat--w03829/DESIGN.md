# Design system — Automotive PPF & Car Wrap Landing Page Template

`SN-W03829` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A monochrome page on near-black (#050505) with a soft diagonal light streak across the hero. The headline pairs an upright white word with an italic grey word, giving a cinematic, editorial contrast within one line. Body copy is small and light, and the navigation is a thin pill with one outlined button, so the page reads as a film still rather than a sales page.

**Mood:** cinematic, monochrome, editorial, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4a4d54` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e05c15` | Primary action and highlights |
| Second accent | `#e05c15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#afca3f` · `#050505` · `#111111` · `#e05c15` · `#1a1a1a` · `#f5f5f5` · `#4a4d54` · `#1546e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h2 48px · h3 14px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_10px_#AFCA3F]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 bg-white/5 hover:bg-accent hover:text-dark border border-white/10 hover:border-accent rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Stats band (`stats`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #4a4d54;
  --color-border: #ffffff;
  --color-accent: #e05c15;
  --color-accent-2: #e05c15;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#4a4d54',
    line: '#ffffff',
    accent: '#e05c15',
    accent2: '#e05c15',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair an upright white headline word with an italic grey word.
- **Do:** Keep the background near-black (#050505) with a soft light streak as the only effect.
- **Do:** Use a thin pill navigation with one outlined button.
- **Don't:** Don't add a saturated accent colour to the hero.
- **Don't:** Don't set the italic word in white; it stays grey.
- **Don't:** Don't fill the navigation pill with a solid colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
