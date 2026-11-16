# Design system — Full-Stack Developer Portfolio Template

`SN-W02025` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black stage holds a thin cyan (#22d3ee) line diagram, a pentagon with labelled vertices, sitting centre right. The name is set in heavy white uppercase sans over two lines, with a grey paragraph beside a cyan vertical rule. Cyan is the only colour, used for lines and rules, so the page reads technical and precise.

**Mood:** technical, precise, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#06b6d4` · `#ffffff` · `#22d3ee` · `#000000` · `#facc15` · `#94a3b8` · `#030303` · `#64748b` · `#334155` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syncopate
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 36px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-[0.25em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(6,182,212,0.1)]`, `shadow-[0_0_10px_rgba(6,182,212,0.4)]`, `shadow-[0_0_30px_rgba(6,182,212,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded font-medium tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for line diagrams, rules and small labels only
- **Do:** Set the name in heavy white uppercase sans, stacked on two lines
- **Do:** Keep the paragraph grey with a thin cyan rule on its left edge
- **Don't:** Don't fill large areas with cyan; it is a line colour
- **Don't:** Don't add a second accent colour beside the cyan
- **Don't:** Don't crowd the diagram under the name; keep the spacing open

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
