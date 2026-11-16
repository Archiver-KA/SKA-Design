# Design system — WordPress Developer Landing Page Template

`SN-W00835` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A dark technical hero on a near-black ground, with a large Inter headline whose middle line is set in a blue gradient (#38bdf8). A dark code card on the right shows a configuration file with a thin border and a green status line at its foot. Blue is the only accent, and the page reads as a developer portfolio.

**Mood:** technical, dark, precise, developer

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0e14` | Page ground |
| Surface | `#0b0e14` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#0ea5e9` · `#38bdf8` · `#0b0e14` · `#1e293b` · `#000000` · `#cbd5e1` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-black/50`, `shadow-white/20`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. About (`about`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0b0e14;
  --color-surface: #0b0e14;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0e14',
    surface: '#0b0e14',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#38bdf8) for the one highlighted headline line
- **Do:** Frame code samples in a dark card with a thin border and a small title row
- **Do:** Set headlines in Inter at 72px with tight, stacked lines
- **Don't:** Don't switch the hero to a white background
- **Don't:** Don't add a second highlight colour beside the blue and green status
- **Don't:** Don't use the green status colour for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
