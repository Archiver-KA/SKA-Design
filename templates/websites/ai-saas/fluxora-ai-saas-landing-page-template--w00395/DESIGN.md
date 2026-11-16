# Design system — Fluxora AI SaaS Landing Page Template

`SN-W00395` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `id`

## Direction

A black hero that matches its sibling Fluxora layout: a white Inter headline in two centred lines, a white pill primary button and a grey outline secondary. The one difference is a faint image or texture showing behind the headline, which lowers contrast at its centre and looks like a layering fault. Stat cards and a broken team image sit below the fold, so the page relies on its imagery to read as finished.

**Mood:** monochrome, centred, faintly-broken, sparse, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#000000` · `#d4d4d4` · `#0a0a0a` · `#171717` · `#3b82f6` · `#93c5fd` · `#cbd5e1` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, ./index.html
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded` (4px)
- **Shadows:** `shadow-[0_8px_30px_rgba(59,130,246,0.25)]`, `shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[52ch]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 backdrop-blur-xl px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Three.js, Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline white and centred, with no image layered behind it.
- **Do:** Use white pill buttons for the primary action and a grey outline for the secondary.
- **Do:** Check the broken team image and the faint background before reusing this hero.
- **Don't:** Don't place a photograph behind the headline; it lowers contrast.
- **Don't:** Don't use a light background; the hero is black.
- **Don't:** Don't add colour to the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
