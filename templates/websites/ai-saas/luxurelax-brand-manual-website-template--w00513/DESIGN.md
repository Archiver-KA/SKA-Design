# Design system — Luxurelax Brand Manual Website Template

`SN-W00513` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, warm brand-manual page on a near-black brown ground (#161412) with a fixed numbered sidebar in muted beige. The headline pairs a cream serif with an amber (#eea540) second line, and amber marks the eyebrow and section rules. Thin amber rules and a generous left margin make it read as a formal document rather than a marketing site.

**Mood:** formal, warm, architectural, document-like, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#161412` | Page ground |
| Surface | `#221e1c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a89c8a` | Secondary copy, captions |
| Border | `#3d3529` | Hairlines, dividers, outlines |
| Accent | `#eea540` | Primary action and highlights |

Palette by frequency of use: `#a89c8a` · `#3d3529` · `#ffffff` · `#221e1c` · `#eea540` · `#161412` · `#98641b` · `#450a0a` · `#7f1d1d` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 16px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-[260px]`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 bg-[#221e1c] hover:bg-[#EEA540] text-[#EEA540] hover:text-[#161412] border border-[#3d3529] hover:border-[#EEA540] transition-colors py-3 px-4 rounded-lg font-light text-xs tracking-widest uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #161412;
  --color-surface: #221e1c;
  --color-text: #ffffff;
  --color-muted: #a89c8a;
  --color-border: #3d3529;
  --color-accent: #eea540;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#161412',
    surface: '#221e1c',
    ink: '#ffffff',
    muted: '#a89c8a',
    line: '#3d3529',
    accent: '#eea540',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line and eyebrow labels in amber (#eea540).
- **Do:** Use the fixed numbered sidebar in muted beige (#a89c8a) for section navigation.
- **Do:** Separate sections with thin amber rules and generous left margins.
- **Don't:** Don't use amber for body copy; it is for headings and labels.
- **Don't:** Don't add bright blues or greens; the palette stays brown, cream and amber.
- **Don't:** Don't set headings in a sans-serif; headings use a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
