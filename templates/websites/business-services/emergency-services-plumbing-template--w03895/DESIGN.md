# Design system — Emergency Services Plumbing Template

`SN-W03895` · business-services · dark mode · Sinera Atlas theme `route` · language `de`

## Direction

A dark, saturated hero on near-black with a red announcement bar across the top. The headline is heavy white sans-serif, and the lines naming the service are set in cyan and mint green, one colour per line. Copy sits on the left and a faint text column sits on the right, so the page relies on colour-coded lines rather than imagery.

**Mood:** bold, dark, urgent, energetic, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#94a3b8` · `#ffffff` · `#22d3ee` · `#10b981` · `#020617` · `#06b6d4` · `#34d399` · `#334155` · `#64748b` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 72px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-2.5`

**Primary button**

```html
<a class="flex items-center justify-center gap-3 bg-emerald-500 text-slate-950 font-condensed font-bold text-lg md:text-xl tracking-tight uppercase px-8 py-4 rounded-xl hover:bg-emerald-400 transition-all glow-emerald">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #1e293b;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#334155',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif with each key line in its own colour
- **Do:** Use the green (#10b981) for the primary action and key word highlights
- **Do:** Keep the announcement bar across the top in a single strong colour
- **Don't:** Don't set body copy in the highlight colours; they are for headline words
- **Don't:** Don't add a third highlight colour to one headline
- **Don't:** Don't set the page on a light background; the dark ground is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
