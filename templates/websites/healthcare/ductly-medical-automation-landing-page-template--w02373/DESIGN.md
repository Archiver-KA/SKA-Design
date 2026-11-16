# Design system — Ductly Medical Automation Landing Page Template

`SN-W02373` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A dark automation page on a pure black ground, with a cobalt blue (#0047ab) primary button and blue connector lines between a row of dark rectangular process nodes. The headline is heavy white sans-serif with tight leading, and the node diagram shows the product visually as a flow. Blue is the single accent and the page is built on contrast and clear geometry rather than decoration.

**Mood:** systematic, clean, dark, precise, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#c0c0c0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0047ab` | Primary action and highlights |
| Second accent | `#00ff66` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0047ab` · `#c0c0c0` · `#0a0a1a` · `#00ff66` · `#ef4444` · `#00ffff` · `#000000` · `#050510` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 15px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,71,171,0.5)]`, `shadow-[0_0_30px_rgba(0,71,171,0.05)]`, `shadow-[0_0_15px_#00FFFF]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="open-modal bg-[#0047AB] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Services (`services`)
7. FAQ (`faq`)
8. Footer (`footer`)
9. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a1a;
  --color-text: #ffffff;
  --color-muted: #c0c0c0;
  --color-border: #ffffff;
  --color-accent: #0047ab;
  --color-accent-2: #00ff66;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a1a',
    ink: '#ffffff',
    muted: '#c0c0c0',
    line: '#ffffff',
    accent: '#0047ab',
    accent2: '#00ff66',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter with tight leading, with one phrase in lighter weight.
- **Do:** Draw process nodes as dark rectangles with blue connector lines.
- **Do:** Keep the page on the black ground (#000000) with the dark navy surface (#0a0a1a).
- **Don't:** Don't add a second bright accent such as the green (#00ff66) to the nodes; the blue carries the diagram.
- **Don't:** Don't round the process nodes into pills.
- **Don't:** Don't use blue for body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
