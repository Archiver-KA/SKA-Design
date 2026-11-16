# Design system — Underground Artist Portfolio Template

`SN-W02267` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark cinematic artist page on a plum-black ground (#0a0507), with a large white display word followed by a second word drawn as a magenta outline, which gives the hero a stencil-like contrast. A magenta pill button sits top-right, and a thin magenta glow runs along the bottom edge. The outlined magenta word beside the solid white one is the recognisable device, and magenta is kept to a few precise uses.

**Mood:** cinematic, dark, bold, moody, electric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0507` | Page ground |
| Surface | `#150a10` | Cards, panels, raised areas |
| Text | `#ede6ea` | Headings and primary copy |
| Muted text | `#8a7580` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff1493` | Primary action and highlights |
| Second accent | `#1db954` | Supporting highlights |

Palette by frequency of use: `#ff1493` · `#ffffff` · `#0a0507` · `#ede6ea` · `#5c4a54` · `#1db954` · `#8a7580` · `#150a10` · `#000000` · `#b8a8b0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Syne
- **Loaded families:** Syne, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 96px · h3 30px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_40px_rgba(0,0,0,0.6)]`, `shadow-[0_0_30px_rgba(255,20,147,0.35)]`, `shadow-[0_0_50px_rgba(255,20,147,0.55)]`
- **Content width:** `max-w-[1800px]`, `max-w-[1200px]`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group relative overflow-hidden px-6 py-3 rounded-full bg-[#FF1493] text-[#0A0507] font-['JetBrains_Mono',monospace] text-xs font-medium uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(255,20,147,0.35)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(255,20,147,0.55)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Video / media (`video-media`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0507;
  --color-surface: #150a10;
  --color-text: #ede6ea;
  --color-muted: #8a7580;
  --color-border: #ffffff;
  --color-accent: #ff1493;
  --color-accent-2: #1db954;
  --font-display: "Syne", sans-serif;
  --font-body: "Syne", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0507',
    surface: '#150a10',
    ink: '#ede6ea',
    muted: '#8a7580',
    line: '#ffffff',
    accent: '#ff1493',
    accent2: '#1db954',
  },
  fontFamily: { display: ['Syne'], sans: ['Syne'] },
} }
```

## Do and don't

- **Do:** Set one hero word solid white and the next as a magenta outline (#ff1493).
- **Do:** Use the magenta only for the primary button, the outline word and the bottom glow.
- **Do:** Keep the ground plum-black (#0a0507) with the glow kept thin.
- **Don't:** Don't fill large areas with magenta; it is a precise accent.
- **Don't:** Don't set body copy in the outline style; it is for display words only.
- **Don't:** Don't use the green (#1db954) for the hero; it is for the secondary accent only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
