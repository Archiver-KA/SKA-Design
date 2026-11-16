# Design system — Tyristrand

`SN-W00783` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `no`

## Direction

A clean, light local-business page written in Norwegian. The hero pairs a bold sans headline in near-black (#1c1917) with an italic serif second line, and amber (#ca8a04) is the single colour on the booking button. The page sits on white, and a large photo of car work carries the warmth.

**Mood:** clean, local, honest, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ca8a04` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#ca8a04` · `#a8a29e` · `#78716c` · `#e7e5e4` · `#57534e` · `#f5f5f4` · `#fafaf9` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-stone-200/50`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="bg-stone-900 text-white px-4 py-2 text-sm font-medium hover:bg-yellow-500 hover:text-stone-900 transition-colors duration-300 rounded-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ca8a04;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ca8a04',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter with its second line in italic serif
- **Do:** Use amber (#ca8a04) only for the booking button
- **Do:** Keep the page on white and let photos carry the colour
- **Don't:** Don't set the background in a yellow tint
- **Don't:** Don't use green (#22c55e) anywhere in the first screen
- **Don't:** Don't add a second button colour beside the booking action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
