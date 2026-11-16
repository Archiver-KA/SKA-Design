# Design system — Developer Portfolio Layout

`SN-W01966` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark dashboard-style portfolio component: a black ground with a fixed left profile sidebar, grey navigation rows whose active row carries a blue tint, and project cards with thin borders. Blue (#3b82f6) appears as low-strength chip fills and the active state rather than as large fills. The type is the system sans-serif in white and grey, and the layout is built from bordered cards rather than shadows.

**Mood:** dashboard, quiet, technical, bordered, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#60a5fa` · `#3b82f6` · `#1f2937` · `#000000` · `#6b7280` · `#93c5fd` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · h2 24px · h3 18px · body 14px
- **Weights in use:** light, normal

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px), `rounded-xl` (12px)
- **Common gaps:** `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center text-gray-400 hover:text-white py-2 px-3 rounded-md hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Navigation bar (`navbar`)
5. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) for the active navigation row and tag chips only
- **Do:** Separate cards and the sidebar with #1f2937 borders
- **Do:** Keep the profile block fixed at the top of the left column with navigation below it
- **Don't:** Don't fill cards with solid blue; use tinted chips
- **Don't:** Don't drop the sidebar on desktop; it frames the page
- **Don't:** Don't set body copy in pure white; use the grey tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
