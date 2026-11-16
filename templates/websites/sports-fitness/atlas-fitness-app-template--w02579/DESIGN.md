# Design system — Atlas Fitness App Template

`SN-W02579` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A mobile app mock-up shown inside a phone frame on pure black, with a bold white wordmark and three stacked dark sign-in buttons. The first button is solid white as the primary action, and the other two are dark grey outlined by fill. A bright blue (#3b82f6) round floating button sits on the edge of the third row as the single accent. The look is compact, dark and utilitarian.

**Mood:** dark, compact, utilitarian, focused, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fafafa` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#171717` · `#6b7280` · `#fafafa` · `#000000` · `#a3a3a3` · `#3b82f6` · `#ef4444` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-[390px]`, `max-w-[80%]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #fafafa;
  --color-border: #262626;
  --color-accent: #3b82f6;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#fafafa',
    line: '#262626',
    accent: '#3b82f6',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the first sign-in button solid white and the rest dark grey
- **Do:** Use the blue (#3b82f6) only for the floating action button
- **Do:** Keep the phone mock-up centred on a plain black field
- **Don't:** Don't use red as an accent.
- **Don't:** Don't use more than one bright colour; the layout is black, white and one blue
- **Don't:** Don't add text under the wordmark beyond the short tagline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
