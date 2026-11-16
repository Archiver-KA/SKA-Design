# Design system — AI Platform Landing Page UI

`SN-W00127` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Black page with a bold uppercase hero headline set in a monospaced face: NEURAL in a blue-to-violet gradient, INTELLIGENCE in white. Buttons are a solid blue primary and an outlined secondary, with thin grey-bordered feature cards below. The uppercase heading is the signature of the page.

**Mood:** bold, technical, dark, terminal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#000000` · `#1f2937` · `#3b82f6` · `#d1d5db` · `#9ca3af` · `#374151` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist Mono
- **Scale (largest breakpoint):** h1 76px · h3 18px · body 14px
- **Weights in use:** light, semibold, black
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-blue-500 text-white font-light rounded-md px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-blue-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#1f2937',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold uppercase monospace
- **Do:** Use the solid blue (#3b82f6) on the primary button only
- **Do:** Outline feature cards with the grey hairline (#1f2937) instead of filling them
- **Don't:** Don't set the hero in mixed case; uppercase is the signature
- **Don't:** Don't use more than one blue button in a single view
- **Don't:** Don't use pill-shaped buttons; keep the corners squarer

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
