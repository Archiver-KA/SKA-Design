# Design system — 91 degree

`SN-W02827` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold burger page on a warm cream ground (#f4ebe1), with a very large uppercase red (#f91814) headline in a heavy sans and a yellow subline. Red carries the headline and the navigation's pill button, and yellow (#f9cd25) sets the second line. Food photography is the only full-colour element, so the flat, saturated type and graphic shapes frame it without competing.

**Mood:** bold, playful, saturated, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4ebe1` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f91814` | Primary action and highlights |
| Second accent | `#f9cd25` | Supporting highlights |

Palette by frequency of use: `#f91814` · `#ffffff` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#27272a` · `#f4ebe1` · `#18181b` · `#b91c1c` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Modak, Mouse Memoirs
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center text-xs uppercase tracking-tight font-medium text-white bg-[#f91814] hover:bg-red-700 px-5 py-2 rounded-full transition-all shadow-sm">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4ebe1;
  --color-surface: #d4d4d8;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #f91814;
  --color-accent-2: #f9cd25;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4ebe1',
    surface: '#d4d4d8',
    ink: '#27272a',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#f91814',
    accent2: '#f9cd25',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase red (#f91814) in a heavy sans
- **Do:** Use yellow (#f9cd25) for the subline and small highlights only
- **Do:** Keep the cream ground (#f4ebe1) behind the food photography
- **Don't:** Don't put red text on yellow; the pair is hard to read
- **Don't:** Don't use grey panels; the page is cream, red and yellow
- **Don't:** Don't add a third strong colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
