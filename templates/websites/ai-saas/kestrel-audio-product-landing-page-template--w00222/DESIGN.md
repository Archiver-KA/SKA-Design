# Design system — KESTREL Audio Product Landing Page Template

`SN-W00222` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal hero on black (#050505) with a large white headline whose second line shifts to a pale blue-lavender gradient. The primary button is a navy-blue gradient, the secondary a text link with a play icon, and a vertical scroll indicator on the right edge. The page is restrained, using only the gradient and the one button for emphasis.

**Mood:** dark, minimal, premium, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d4` · `#050505` · `#f97316` · `#a5b4fc` · `#6366f1` · `#818cf8` · `#171717` · `#a3a3a3` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/20`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #f5f5f5;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #6366f1;
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
    surface: '#050505',
    ink: '#f5f5f5',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a pale blue-lavender gradient under a white first line
- **Do:** Use the navy-blue gradient on the primary button only
- **Do:** Keep the secondary action a text link with an icon
- **Don't:** Don't add orange or other warm accents to the hero
- **Don't:** Don't light the background; keep the ground black
- **Don't:** Don't use more than one gradient per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
