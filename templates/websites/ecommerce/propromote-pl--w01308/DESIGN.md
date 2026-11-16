# Design system — Propromote.pl

`SN-W01308` · ecommerce · dark mode · Sinera Atlas theme `market` · language `pl`

## Direction

A dark, terminal-inspired agency page on near-black (#050505) with small monospace labels and numbered navigation. The headline is a tall grotesque in white, with a grey second word, and a thin orange (#ea580c) rule sits beside the intro copy. A dashboard-style analytics card with small green bars is the only illustration, so orange marks structure and green marks data.

**Mood:** technical, dark, dashboard-like, precise, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#ffffff` · `#ea580c` · `#52525b` · `#71717a` · `#18181b` · `#050505` · `#3f3f46` · `#a1a1aa` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-orange-900/20`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="mt-4 py-4 px-8 bg-orange-600 text-white hover:bg-orange-500 text-[10px] uppercase tracking-widest font-mono font-semibold transition-all shadow-lg shadow-orange-900/20 hover:scale-[1.02] flex items-center justify-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Sidebar (`sidebar`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #ea580c;
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
    background: '#050505',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#27272a',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#ea580c) for the eyebrow text, the thin rule and the numbered nav markers
- **Do:** Set labels in small monospace caps with wide tracking
- **Do:** Show results as a dashboard card with bars, not stock photography
- **Don't:** Don't set the page on the orange ground (#ea580c); it is an accent only
- **Don't:** Don't use green for buttons or headings; it marks data only
- **Don't:** Don't add a light section; the page stays near-black from top to bottom

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
