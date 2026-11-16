# Design system — TIDE Retail Commerce System Template

`SN-W01332` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A neo-brutalist commerce page on a faintly gridded off-white ground (#f4f4f0), with heavy black type stacked over three lines. 'connected.' is filled pink (#ff90e8) with a dark outline, the one expressive word, and a yellow label sits above the headline. Buttons carry thick black borders and a hard offset edge, so the controls read as physical blocks rather than soft UI.

**Mood:** neo-brutalist, playful, bold, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff90e8` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ff90e8` · `#22d3ee` · `#ffffff` · `#67e8f9` · `#64748b` · `#06b6d4` · `#0f172a` · `#1e293b` · `#04060a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-sans-serif
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(34,211,238,0.25)]`, `shadow-[0_0_30px_rgba(34,211,238,0.5)]`, `shadow-[0_8px_40px_rgba(34,211,238,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="font-mono text-xs tracking-widest px-4 py-2 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f0;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #64748b;
  --color-border: #000000;
  --color-accent: #ff90e8;
  --color-accent-2: #22d3ee;
  --font-display: "ui-sans-serif", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f0',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#64748b',
    line: '#000000',
    accent: '#ff90e8',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['ui-sans-serif'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground off-white (#f4f4f0) with a faint grid and black (#000000) heavy type
- **Do:** Use pink (#ff90e8) for the one highlighted word and the primary button
- **Do:** Give buttons thick black borders and a hard offset edge
- **Don't:** Don't use blurred or soft drop shadows; the hard offset edge is the style
- **Don't:** Don't set the highlight word in a light weight; it reads through heavy weight and outline
- **Don't:** Don't use pink for body text or large background areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
