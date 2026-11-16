# Design system — AI Agency Landing Page Template

`SN-W01365` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a three-line centred headline in a heavy white sans, where the middle word SYSTEM is saturated yellow (#eab308). The nav sits in a dark translucent bar with a yellow Book a Call button, and small yellow captions label a stats row of two large white figures. Yellow is held to the key word and the primary action, so the page reads as stark.

**Mood:** stark, high-impact, monochrome, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#eab308` · `#facc15` · `#0a0a0a` · `#3b82f6` · `#030303` · `#22c55e` · `#111827` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 30px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1600px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="uppercase transition-colors hover-trigger hover:bg-yellow-200 cursor-pointer text-xs font-semibold text-black tracking-wider bg-amber-400 rounded-full px-6 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy white sans, centred, with one key word in yellow (#eab308).
- **Do:** Use yellow for the primary button, small captions and the key headline word only.
- **Do:** Keep the stats row under a thin rule, with large white figures and small yellow captions.
- **Don't:** Don't add more than one yellow word per headline.
- **Don't:** Don't set body copy in yellow at a size that competes with the headline.
- **Don't:** Don't use a light background; the black ground carries the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
