# Design system — FUTURUM.AI RPG Learning Landing Page Template

`SN-W03474` · education · dark mode · Sinera Atlas theme `calm` · language `uk`

## Direction

A dark, game-style learning page on near-black (#050505) with bold uppercase display type, and the second hero line set in lime (#a3e635). Rounded panels hold a character card with a small glowing tag, and three stat tiles under the hero show numbers in lime and blue. The interface reads like a game menu, with a white primary button beside an outlined secondary.

**Mood:** game-like, futuristic, energetic, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#000000` · `#84cc16` · `#94a3b8` · `#64748b` · `#3b82f6` · `#cbd5e1` · `#334155` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Unbounded, Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-lime-500/20`, `shadow-[0_0_20px_rgba(132,204,22,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-[480px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-lime-400 hover:bg-lime-500 text-black px-5 py-2 rounded-full text-sm font-bold transition-all neon-glow flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #334155;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#334155',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second hero line in lime (#a3e635)
- **Do:** Use blue (#3b82f6) for secondary stat numbers and links
- **Do:** Keep character cards on rounded panels with a single glowing tag
- **Don't:** Don't use lime for body copy
- **Don't:** Don't add light backgrounds to the panels
- **Don't:** Don't stack several glow effects on one card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
