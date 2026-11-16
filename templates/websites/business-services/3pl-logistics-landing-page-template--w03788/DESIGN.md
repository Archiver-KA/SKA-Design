# Design system — 3PL Logistics Landing Page Template

`SN-W03788` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A cinematic dark page built from near-black space, with huge uppercase Inter headlines where the middle word is set in grey italic. Thin gridlines run behind the hero, and the only colour is a small cyan (#22d3ee) status label and figures inside a translucent data panel. The primary action is a solid white button, which keeps the contrast sharp and the page industrial and precise.

**Mood:** cinematic, industrial, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#020408` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#06b6d4` · `#22d3ee` · `#64748b` · `#020408` · `#000000` · `#164e63` · `#ecfeff` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fraunces, Inter, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 14px · body 10px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-2 text-xs font-medium tracking-widest text-white uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #020408;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#020408',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, uppercase, at a very large size, with the middle word in grey italic.
- **Do:** Use cyan (#22d3ee) only for status labels and live figures.
- **Do:** Keep the primary button solid white on the dark ground.
- **Don't:** Don't use gradients as the main background of the hero.
- **Don't:** Don't add colour to the headline words.
- **Don't:** Don't remove the faint gridlines behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
