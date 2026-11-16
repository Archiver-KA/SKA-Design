# Design system — Birthday Celebration Landing Page Template

`SN-W03674` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An almost empty black screen with one centred white pill button that invites a click, so the page is built around a single gesture. The animation that follows carries the rest of the mood, and no other copy appears on the entry screen. The button label is small, dark sans-serif type.

**Mood:** playful, minimal, suspenseful, animated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#831843` · `#ec4899` · `#fbcfe8` · `#fce7f3` · `#f9a8d4` · `#050505` · `#1a050b` · `#be185d` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Tajawal
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 16px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-neutral-950 rounded-full font-medium tracking-tight overflow-hidden transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#111111',
    muted: '#ffffff',
    accent: '#ffffff',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the entry screen to one centred white pill button
- **Do:** Set the button label small and dark in sans-serif
- **Do:** Use the animation after the click, not extra copy, to build the mood
- **Don't:** Don't add copy or links to the entry screen
- **Don't:** Don't add a second button next to the primary one
- **Don't:** Don't set the entry screen in a pink fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
