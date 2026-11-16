# Design system — Industrial Recruitment Landing Page Template

`SN-W03957` · business-services · dark mode · Sinera Atlas theme `route` · language `de`

## Direction

A dark industrial-tech page on a near-black ground (#020408) with bold uppercase headlines in white, the second line fading to grey. Monospace status labels and small tracked captions give a control-room tone, and orange (#f97316) marks the primary button and the eyebrow line. Angled corner cuts on the buttons add an engineered detail.

**Mood:** industrial, technical, controlled, dark, engineered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#ea580c` · `#94a3b8` · `#020408` · `#1e293b` · `#64748b` · `#475569` · `#e2e8f0` · `#0a0c10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 48px · body 14px
- **Weights in use:** semibold, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-tech uppercase tracking-widest text-sm transition-all duration-300 clip-diagonal overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #1e293b;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#020408) with white headlines
- **Do:** Use orange (#f97316) for the primary button and eyebrow labels only
- **Do:** Set status labels in small monospace text with wide spacing
- **Don't:** Don't round the corners of buttons; keep the angled cut
- **Don't:** Don't use orange for large fills
- **Don't:** Don't use lighter grey panels that break the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
