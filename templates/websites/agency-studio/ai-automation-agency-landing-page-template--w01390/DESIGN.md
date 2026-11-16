# Design system — AI Automation Agency Landing Page Template

`SN-W01390` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy page with a left-aligned headline in heavy Inter, set over four lines, with the phrase AI automation in a blue gradient. A dark diagram of cards and connectors sits at the right, showing inputs, an agent core and outputs with blue-outlined nodes. White is the primary button colour, and blue is the accent that runs through the headline and the diagram.

**Mood:** navy, technical, confident, systematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#1e293b` · `#06b6d4` · `#22d3ee` · `#94a3b8` · `#cbd5e1` · `#334155` · `#0f172a` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_10px_rgba(34,211,238,0.5)]`, `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #d946ef;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white Inter, left-aligned, with one blue phrase.
- **Do:** Use blue (#3b82f6) for the accent phrase, node outlines and connectors.
- **Do:** Keep the primary button white with dark text on the navy ground.
- **Don't:** Don't use blue for the button fill; the primary is white.
- **Don't:** Don't centre the headline; the diagram sits opposite it at the right.
- **Don't:** Don't use bright cyan for nodes; the blue holds the diagram together.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
