# Design system — Chroma Salon SaaS Landing Page Template

`SN-W02731` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Near-black product page where the hero headline carries the colour: its second line runs through a violet-to-blue gradient. The primary button is white with a ghost button beside it, and a dark app-style mockup with a circular progress ring sits on the right. Thin grey borders and dark zinc surfaces give the page a precise, instrument-like tone.

**Mood:** precise, dark, technical, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#f4f4f5` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#18181b` · `#09090b` · `#d4d4d8` · `#e4e4e7` · `#f4f4f5` · `#a1a1aa` · `#ffffff` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-zinc-200 px-3 py-1.5 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Marquee (`marquee`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #f4f4f5;
  --color-border: #27272a;
  --color-accent: #818cf8;
  --color-accent-2: #f59e0b;
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
    ink: '#f5f5f5',
    muted: '#f4f4f5',
    line: '#27272a',
    accent: '#818cf8',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet-to-blue gradient only on the second line of the hero headline
- **Do:** Use white filled buttons for the main action and ghost buttons for secondary
- **Do:** Keep UI mockups on dark zinc surfaces with a thin grey border and a circular progress ring
- **Don't:** Don't use the gradient on body copy or buttons
- **Don't:** Don't add light panels; the page stays on near-black
- **Don't:** Don't round every corner into full pills; cards use the medium radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
