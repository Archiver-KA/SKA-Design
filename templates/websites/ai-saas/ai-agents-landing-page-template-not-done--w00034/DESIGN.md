# Design system — Ai Agents Landing Page Template (not done) 

`SN-W00034` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cyber-lab stance: a pure black ground with thin, technical type and cyan (#06b6d4) as the single accent, used for the second headline line, the outlined primary button and small labels. Inter sets the headline in white at about 60px, with a tracked uppercase status label above it. The look relies on restraint and small type.

**Mood:** cyber, technical, restrained, dark, experimental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#737373` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#222222` · `#d4d4d4` · `#0ea5e9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Orbitron
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_10px_30px_rgba(0,0,0,0.5)]`, `shadow-[0_0_40px_rgba(0,255,255,0.4)]`, `shadow-[0_0_50px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="font-orbitron text-xs uppercase tracking-[0.2em] border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 px-6 py-2.5 md:py-3 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Articles (`blog-articles`)
5. Video / media (`video-media`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. 3D / canvas scene (`3d-canvas`)
9. Team (`team`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#06b6d4) for the accent words and the outlined primary button only
- **Do:** Set small labels in uppercase with wide letter spacing
- **Do:** Keep the hero copy short, with two lines of muted text under the headline
- **Don't:** Don't fill buttons with solid colour; the look uses outlines
- **Don't:** Don't round the cards beyond the small radius used here
- **Don't:** Don't add a light section; the page is black from top to bottom

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
