# Design system — Digital Experience Landing Page

`SN-W04185` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black landing page with a large white sans headline, and one key word set in a gradient running from light blue (#60a5fa) to violet. A row of stats sits under the hero with large numerals and small grey captions, and the layout depends on the black ground and generous space. Navigation is a thin bar with a single outlined sign-in button, and the 3D scene sits behind the hero.

**Mood:** bold, minimal, dark, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#60a5fa` · `#d1d5db` · `#000000` · `#c084fc` · `#374151` · `#3b82f6` · `#a855f7` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Material Symbols Outlined
- **Body:** Material Symbols Outlined
- **Loaded families:** Material Symbols Outlined, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 36px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-md` (6px)
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black font-medium rounded-md px-8 py-3 hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

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
  --color-border: #374151;
  --color-accent: #60a5fa;
  --color-accent-2: #a855f7;
  --font-display: "Material Symbols Outlined", sans-serif;
  --font-body: "Material Symbols Outlined", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#60a5fa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Material Symbols Outlined'], sans: ['Material Symbols Outlined'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large and bold in white
- **Do:** Keep the gradient to one key word per headline
- **Do:** Place the stats row directly under the call to action
- **Don't:** Don't put the gradient on body text or buttons
- **Don't:** Don't add colours beyond the blue and violet pair
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
