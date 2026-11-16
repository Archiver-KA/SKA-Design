# Design system — Arisverlag Buchquiz

`SN-W00213` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A light, whimsical landing page built around open books drawn in pink and sage green, scattered across a white field. The headline is a serif set in two parts, with the first line in italic light and the second in regular, and the subject is placed at the centre. The illustrations carry the colour, and the type stays grey and black, which keeps the page literary rather than loud.

**Mood:** playful, literary, airy, illustrated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#4d7c0f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e7e5e4` · `#57534e` · `#44403c` · `#f5f5f4` · `#a8a29e` · `#78716c` · `#d6d3d1` · `#fffcf9` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, Outfit
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-4`, `gap-5`, `gap-6`

**Primary button**

```html
<a class="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-10 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-md tracking-wide shadow-sm text-stone-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #111111;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #4d7c0f;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e7e5e4',
    ink: '#111111',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#4d7c0f',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Keep the book illustrations in pink and sage around the headline only
- **Do:** Set the headline in a serif, with the first line in italic
- **Do:** Use an outlined pill button for the single call to action
- **Don't:** Don't put the illustrations behind body copy
- **Don't:** Don't fill the page with a solid colour; the ground stays white
- **Don't:** Don't set the headline in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
