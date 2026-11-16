# Design system — Design Portfolio Case Studies Template

`SN-W01944` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a heavy, tightly set sans headline in three lines: the first two in near-black and the last in mid grey. A single black pill button sits under a short grey paragraph, and a small status tag with a green dot sits above the headline. The copy is short and centred, so the grey last line sets the rhythm.

**Mood:** clean, confident, minimal, bright, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#a1a1aa` · `#e4e4e7` · `#f4f4f5` · `#71717a` · `#000000` · `#fafafa` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-zinc-200`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium opacity-70 hover:opacity-100 transition-opacity tracking-tight px-3 py-1.5 border border-white/20 rounded-full hover:bg-white hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Call to action (`cta`)
5. Menu list (`menu-list`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy, tight sans, near-black over mid grey
- **Do:** Use a single black pill for the primary action
- **Do:** Keep the status tag small, with a green dot (#34d399)
- **Don't:** Don't add colour to the headline; it is neutral
- **Don't:** Don't use a dark page background
- **Don't:** Don't add more than one action to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
