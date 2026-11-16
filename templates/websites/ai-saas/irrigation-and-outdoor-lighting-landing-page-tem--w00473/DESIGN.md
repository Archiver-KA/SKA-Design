# Design system — Irrigation & Outdoor Lighting Landing Page Template

`SN-W00473` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black ground carries a bold green accent (#149116) and a yellow secondary (#dfb610), with Inter throughout. Green marks the primary call to action, and yellow works as a secondary accent.

**Mood:** provisional, dark, green, undetermined, service-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#149116` | Primary action and highlights |
| Second accent | `#dfb610` | Supporting highlights |

Palette by frequency of use: `#149116` · `#ffffff` · `#dfb610` · `#000000` · `#9ca3af` · `#d1d5db` · `#0f7011` · `#0d1a0d` · `#0a0a0a` · `#0a1a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-black/40"`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden xl:flex items-center gap-2 bg-[#149116] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#0f7011] transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #149116;
  --color-accent-2: #dfb610;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#149116',
    accent2: '#dfb610',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#149116) for the primary call to action
- **Do:** Keep the ground near-black with grey secondary text
- **Do:** Set headlines in Inter, matching the body text
- **Don't:** Don't use the yellow as a large fill
- **Don't:** Don't use the green for body text
- **Don't:** Don't add decorative imagery to the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
