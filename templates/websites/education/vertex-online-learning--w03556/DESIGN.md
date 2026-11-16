# Design system — Vertex Online Learning

`SN-W03556` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Vertex is a near-black, futuristic learning page where emphasis words are set in pale green (#86efac) inside large white sans-serif headlines. The green also marks the course badge and the primary button, and the rest of the interface stays in white and grey. A faint glow sits behind the centred hero, and the layout is spacious. The look is focused and technical.

**Mood:** futuristic, dark, focused, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#84cc16` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#a3a3a3` · `#171717` · `#86efac` · `#000000` · `#4ade80` · `#0a0a0a` · `#14b8a6` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Instrument Serif, Inter, Space Grotesk, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="relative border-gradient bg-transparent hover:bg-white/10 transition-colors text-xs font-semibold text-white rounded-full px-4 py-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Stats band (`stats`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #84cc16;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#84cc16',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the emphasis words in pale green (#86efac) within white headlines
- **Do:** Use the bright green (#22c55e) only for the primary button and the badge
- **Do:** Keep the hero centred on black with a faint glow
- **Don't:** Don't set full paragraphs in green
- **Don't:** Don't add a purple or blue background behind the hero
- **Don't:** Don't use more than two accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
