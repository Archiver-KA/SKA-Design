# Design system — Synthetic Assets Services Landing Page Template

`SN-W04107` · business-services · light mode · Sinera Atlas theme `route` · language `pt-BR`

## Direction

A cream page (#edebdd) with near-black text, and deep red (#810100) for the key phrase in the headline. Headlines are large, tightly set sans-serif, paired with small monospaced labels and a thin-lined frame graphic for technical detail. The look is editorial and restrained, with the red used sparingly against warm paper tones.

**Mood:** editorial, warm, restrained, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#edebdd` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1b1717` | Headings and primary copy |
| Border | `#1b1717` | Hairlines, dividers, outlines |
| Accent | `#810100` | Primary action and highlights |
| Second accent | `#810100` | Supporting highlights |

Palette by frequency of use: `#edebdd` · `#810100` · `#1b1717` · `#0a0a0a` · `#ffffff` · `#630000` · `#000000` · `#050505` · `#080808` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, Noto Sans SC, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 20px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]`
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hover:text-red transition-colors p-2 rounded-full hover:bg-red/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Video / media (`video-media`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #edebdd;
  --color-surface: #ffffff;
  --color-text: #1b1717;
  --color-border: #1b1717;
  --color-accent: #810100;
  --color-accent-2: #810100;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#edebdd',
    surface: '#ffffff',
    ink: '#1b1717',
    line: '#1b1717',
    accent: '#810100',
    accent2: '#810100',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep red (#810100) for one headline phrase and the primary button
- **Do:** Set hero sections on the warm cream ground (#edebdd)
- **Do:** Use small monospaced labels with thin frame lines for technical detail
- **Don't:** Don't use pure white backgrounds for the hero
- **Don't:** Don't add gradients or glow effects
- **Don't:** Don't use red for body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
