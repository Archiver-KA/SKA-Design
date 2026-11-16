# Design system — Futuristic Technology Landing Page Template

`SN-W00414` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy-black page where the headline is heavy white sans and its final phrase is set in lavender (#c4b5fd). The primary button is solid lavender with a notched, tag-like right edge, and the secondary is a dark outlined button. A dashboard-style card with small readouts sits to the right of the hero, and monospace status lines run along the bottom, giving an operations-console tone.

**Mood:** technical, console-like, dark, precise, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070810` | Page ground |
| Surface | `#150f0f` | Cards, panels, raised areas |
| Text | `#9aa0b8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4b5fd` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#ef4444` · `#f59e0b` · `#c4b5fd` · `#150f0f` · `#9aa0b8` · `#070810` · `#0a0c16` · `#e8ecf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h3 16px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_16px_rgba(196,181,253,0.3)]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(196,181,253,0)]`
- **Content width:** `max-w-[clamp(72rem,90vw,96rem)]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="clip-angled bg-accent text-space-1 font-display font-semibold text-xs h-9 px-5 flex items-center hover:brightness-110 transition-all shadow-[0_0_15px_rgba(196,181,253,0)] hover:shadow-[0_0_15px_rgba(196,181,253,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. 3D / canvas scene (`3d-canvas`)
7. Stats band (`stats`)
8. Feature grid (`features`)
9. Testimonials (`testimonials`)
10. Pricing (`pricing`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #070810;
  --color-surface: #150f0f;
  --color-text: #9aa0b8;
  --color-border: #ffffff;
  --color-accent: #c4b5fd;
  --color-accent-2: #ef4444;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070810',
    surface: '#150f0f',
    ink: '#9aa0b8',
    line: '#ffffff',
    accent: '#c4b5fd',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lavender (#c4b5fd) for one emphasised headline phrase and the primary button
- **Do:** Set status readouts in small monospace, in muted grey
- **Do:** Keep the product card to the right of the hero as the visual anchor
- **Don't:** Don't use the green (#10b981) or red (#ef4444) accents in the hero
- **Don't:** Don't square off the primary button; the notched edge is part of the style
- **Don't:** Don't set the whole headline in the accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
