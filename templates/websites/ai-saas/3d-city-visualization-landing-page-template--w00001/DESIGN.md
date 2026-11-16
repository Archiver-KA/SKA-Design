# Design system — 3D City Visualization Landing Page Template

`SN-W00001` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The page is a near-black stage with one large 3D scene behind the interface, so the chrome stays minimal. The headline in Inter at 72px splits into a white word above a grey word, and the emerald (#34d399) appears only as a status dot and small category text. Control panels are dark glass with hairline edges, which keeps the city as the subject.

**Mood:** cinematic, minimal, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#3f3f46` · `#34d399` · `#09090b` · `#d4d4d8` · `#000000` · `#27272a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 12px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-medium text-white bg-zinc-800/50 rounded-full border border-zinc-700/50 hover:bg-zinc-700 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#3f3f46',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the 3D scene as the full-bleed background and place text over it at the left edge
- **Do:** Use the emerald (#34d399) only for status indicators and small labels
- **Do:** Set headlines in Inter at large size with a two-tone split between white and grey
- **Don't:** Don't add light backgrounds or coloured sections behind the scene
- **Don't:** Don't use the emerald as a button fill or large surface colour
- **Don't:** Don't crowd the controls panel over the headline area

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
