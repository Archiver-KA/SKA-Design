# Design system — Luxury Real Estate Landing Page Template

`SN-W03307` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A pure black hero with a centred, two-line headline: the first line in white and the second in mid-grey, both large sans. Gold (#dca11d) is the primary button colour and the colour of the statistic figures, while a dark grey pill sits beside it for the secondary action. The composition is symmetrical and direct, with generous space above and below the text block.

**Mood:** dark, centred, luxurious, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#dca11d` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#dca11d` · `#ffffff` · `#000000` · `#18181b` · `#71717a` · `#27272a` · `#a1a1aa` · `#09090b` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #dca11d;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#dca11d',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button and the statistic figures in gold (#dca11d).
- **Do:** Pair a white first headline line with a grey second line at the same size.
- **Do:** Keep the secondary button dark grey and the same height as the gold one.
- **Don't:** Don't use gold for body copy; it stays on buttons and figures.
- **Don't:** Don't add a second bright accent colour to the hero.
- **Don't:** Don't place the headline on a grey field; the page ground is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
