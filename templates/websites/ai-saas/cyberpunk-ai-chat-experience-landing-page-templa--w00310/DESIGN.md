# Design system — Cyberpunk AI Chat Experience Landing Page Template

`SN-W00310` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black boot screen with a single mint status line at the centre, small uppercase labels in the top corners, and nothing else on screen. The mint [#10b981] is the only colour, used for the status text and a thin vertical cursor line.

**Mood:** terminal, minimal, cyberpunk, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#a7f3d0` | Headings and primary copy |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#10b981` · `#064e3b` · `#000000` · `#34d399` · `#ffffff` · `#d1fae5` · `#0a0a0a` · `#059669` · `#047857` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 14px · body 10px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-emerald-900/20`, `shadow-[0_0_20px_rgba(16,185,129,0.15)]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm bg-emerald-500 px-8 font-medium text-black transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #404040;
  --color-text: #a7f3d0;
  --color-accent: #10b981;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#404040',
    ink: '#a7f3d0',
    accent: '#10b981',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the screen black (#000000) with mint (#10b981) status text and a thin cursor line
- **Do:** Set status labels in a small monospace face in uppercase
- **Do:** Use the monospace face for headings and the label row
- **Don't:** Don't add decoration beyond the thin status line and cursor
- **Don't:** Don't put body text in full sentences on the boot screen
- **Don't:** Don't use a light background; the flow depends on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
