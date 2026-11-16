# Design system — AI Architecture Landing Page Template

`SN-W03167` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A centred hero on a white ground. A very large bold sans headline sets dark navy (#0f172a) over a slate-grey second line, with a small teal-dotted pill above it. The two buttons pair a solid dark navy primary with a white outlined secondary, and the page is restrained apart from faint grid texture below. Teal (#06b6d4) is kept to the status dot.

**Mood:** clean, technical, restrained, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#e2e8f0` · `#94a3b8` · `#64748b` · `#22d3ee` · `#0891b2` · `#0f172a` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · body 24px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-cyan-500/20`, `shadow-none`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-3 text-sm font-semibold tracking-wide uppercase border border-transparent transition-all duration-300 shadow-xl bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300/50 dark:bg-white dark:text-black dark:hover:bg-slate-200 dark:shadow-cyan-500/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0f172a;
  --color-text: #0f172a;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#0f172a',
    ink: '#0f172a',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold dark navy (#0f172a) with the second line in slate grey
- **Do:** Use the solid dark navy button as the primary action and a white outlined button beside it
- **Do:** Keep teal (#06b6d4) to the small status dot in the pill label
- **Don't:** Don't use a black ground; the hero is white
- **Don't:** Don't set the headline in light grey on white
- **Don't:** Don't use teal for buttons or large fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
