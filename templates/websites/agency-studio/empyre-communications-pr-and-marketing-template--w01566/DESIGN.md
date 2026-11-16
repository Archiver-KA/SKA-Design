# Design system — Empyre Communications PR & Marketing Template

`SN-W01566` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground with a dimmed grey photograph of dried grasses filling the hero behind the type. The headline is a tight sans with its second line in italic, and small wide-tracked uppercase labels in ochre (#8e6b2d) introduce sections and stats. A pill-shaped navigation bar floats over the image, giving the page a cinematic, luxury-agency tone.

**Mood:** cinematic, dimmed, luxurious, photographic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8e6b2d` | Primary action and highlights |
| Second accent | `#8e6b2d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#bfeeff` · `#8e6b2d` · `#050505` · `#000000` · `#030303` · `#effbff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Editor's Note - thin
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_25px_rgba(191,238,255,0.15)]`, `shadow-[0_-20px_40px_rgba(0,0,0,0.6)]`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-6`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #030303;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #8e6b2d;
  --color-accent-2: #8e6b2d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#030303',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#8e6b2d',
    accent2: '#8e6b2d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim the hero photograph so white type reads on top
- **Do:** Use the ochre (#8e6b2d) for section labels and stat captions
- **Do:** Set the second headline line in italic to contrast the roman first line
- **Don't:** Don't brighten the hero image; the dark overlay is part of the mood
- **Don't:** Don't add cool blue tones; the palette is black, white and ochre
- **Don't:** Don't set labels in bold; they stay small and widely tracked

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
