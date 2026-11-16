# Design system — 3D General Contractor Landing Page Template

`SN-W00002` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Almost the whole first screen is an empty black viewport, with a small uppercase site label top left and a keyboard hint panel top right. The interface is reduced to thin text and small key caps, so the 3D scene carries the design. Amber (#f59e0b) shows only as a status dot.

**Mood:** immersive, minimal, dark, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#09090b` · `#27272a` · `#d4d4d8` · `#10b981` · `#f59e0b` · `#3b82f6` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 12px · h2 20px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_30px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-[200px]`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. About (`about`)
4. Services (`services`)
5. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #3b82f6;
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
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep interface chrome to small uppercase labels at the corners
- **Do:** Show keyboard hints as bordered key caps in the corner panel
- **Do:** Use amber (#f59e0b) for status dots and active markers only
- **Don't:** Don't place a large headline over the 3D viewport on first load
- **Don't:** Don't use blue (#3b82f6) as a second accent on the same screen
- **Don't:** Don't add decorative panels that cover the centre of the viewport

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
