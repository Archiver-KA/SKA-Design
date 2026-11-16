# Design system — Futuristic Luxury Real Estate Landing Page Template

`SN-W03241` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, technical space-mission page: a near-black ground with an oversized uppercase white headline in two lines, the following phrase faded to dark grey, and small monospaced telemetry around the edges. Red (#ff2e00) appears only as a tiny label and a numeric readout, so the colour works as instrumentation rather than decoration. The hero is a stark, data-led block over a faint dotted grid.

**Mood:** technical, austere, futuristic, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0c` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8a8a93` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff2e00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#8a8a93` · `#ff2e00` · `#0a0a0c` · `#000000` · `#030303` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(255,46,0,0.05)]`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full text-center py-3 bg-[#ff2e00] text-black text-xs font-['JetBrains_Mono',monospace] uppercase tracking-widest hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Map / location (`map-location`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0c;
  --color-surface: #0a0a0c;
  --color-text: #ffffff;
  --color-muted: #8a8a93;
  --color-border: #ffffff;
  --color-accent: #ff2e00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0c',
    surface: '#0a0a0c',
    ink: '#ffffff',
    muted: '#8a8a93',
    line: '#ffffff',
    accent: '#ff2e00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in oversized uppercase white sans, with the following phrase fading to dark grey (#333333).
- **Do:** Use the red (#ff2e00) only for small labels and numeric readouts.
- **Do:** Frame the hero with monospaced telemetry in grey (#8a8a93) at the edges.
- **Don't:** Don't use the red as a background or large fill; it is an instrument colour.
- **Don't:** Don't set the page on a light ground; the first screen is near-black.
- **Don't:** Don't use rounded panels for the readouts; they sit in square-cornered dark boxes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
