# Design system — Premium Coaching Landing Page Template

`SN-W03521` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, high-conversion coaching page on a cream ground (#fdfbf7) with a heavy uppercase sans headline in near-black. The closing phrase switches to a light italic serif, which adds a personal, editorial note. A large beige circle (#e8decc) sits behind a portrait, with a dark round badge over its edge, and a black pill button is the main action.

**Mood:** warm, personal, editorial, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#121212` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e8decc` | Primary action and highlights |

Palette by frequency of use: `#121212` · `#ffffff` · `#e8decc` · `#6b7280` · `#9ca3af` · `#fdfbf7` · `#4b5563` · `#1f2937` · `#f3f4f6` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-full text-xs font-medium tracking-widest hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Services (`services`)
6. 3D / canvas scene (`3d-canvas`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #121212;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #e8decc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#121212',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#e8decc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, with the closing phrase in light italic serif
- **Do:** Frame portraits and badges inside the warm beige circle (#e8decc)
- **Do:** Use a black pill button for the primary action
- **Don't:** Don't use bright colours for accents on the cream ground
- **Don't:** Don't set every headline line in italic
- **Don't:** Don't introduce coloured badges or buttons outside the neutral range

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
