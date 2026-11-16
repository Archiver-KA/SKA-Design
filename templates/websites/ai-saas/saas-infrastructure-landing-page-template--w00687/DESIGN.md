# Design system — SaaS Infrastructure Landing Page Template

`SN-W00687` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, deep-navy infrastructure hero with a heavy white sans headline, and its second line 'Infinite scale.' set in sky blue (#0ea5e9). A solid sky-blue primary button leads, with a dark outlined button beside it, and avatar stacks and a live metric sit below. The palette is almost entirely navy and blue, which suits network and data products.

**Mood:** technical, dark, cool, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#020617` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#0ea5e9` · `#38bdf8` · `#94a3b8` · `#e2e8f0` · `#0284c7` · `#2563eb` · `#1e293b` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · body 24px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)]`, `shadow-[0_0_60px_-15px_rgba(14,165,233,0.7)]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.7)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #475569;
  --color-text: #e2e8f0;
  --color-muted: #475569;
  --color-border: #020617;
  --color-accent: #0ea5e9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#475569',
    ink: '#e2e8f0',
    muted: '#475569',
    line: '#020617',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in sky blue (#0ea5e9) and the first in white
- **Do:** Use the sky-blue filled button as the primary action, with a dark outlined button beside it
- **Do:** Keep the ground deep navy (#020617) and use blue only for the accent line and buttons
- **Don't:** Don't use the blue-violet (#2563eb) for the hero; sky blue is the only accent
- **Don't:** Don't stack more than one pill badge above the headline
- **Don't:** Don't set the body copy in pure white; it is light slate (#e2e8f0)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
