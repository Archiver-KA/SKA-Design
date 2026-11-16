# Design system — Executive Search Landing Page Template

`SN-W00380` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero with a large, centred uppercase sans headline in white, a solid blue primary button and a dark outlined secondary button beside it. The navigation is a rounded translucent bar across the top, and the composition is symmetrical and quiet.

**Mood:** dark, symmetrical, quiet, bold, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e1726` | Page ground |
| Surface | `#f4f6fa` | Cards, panels, raised areas |
| Text | `#0e1726` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#d9dfe8` | Hairlines, dividers, outlines |
| Accent | `#2b5ce6` | Primary action and highlights |
| Second accent | `#f2a33a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d9dfe8` · `#556070` · `#2b5ce6` · `#0e1726` · `#f2a33a` · `#c9d3e3` · `#1f49c0` · `#f4f6fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 168px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-[6px]` (6px)
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-4 focus:py-3 focus:rounded-ctl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0e1726;
  --color-surface: #f4f6fa;
  --color-text: #0e1726;
  --color-muted: #556070;
  --color-border: #d9dfe8;
  --color-accent: #2b5ce6;
  --color-accent-2: #f2a33a;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e1726',
    surface: '#f4f6fa',
    ink: '#0e1726',
    muted: '#556070',
    line: '#d9dfe8',
    accent: '#2b5ce6',
    accent2: '#f2a33a',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in uppercase bold sans, white on the dark navy ground.
- **Do:** Use the blue (#2b5ce6) only for the primary button.
- **Do:** Keep the navigation as a translucent rounded bar with a thin border.
- **Don't:** Don't present this template as a light page; the hero is dark.
- **Don't:** Don't add a second accent colour to the hero; blue is the only accent.
- **Don't:** Don't left-align the hero; keep it centred.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
