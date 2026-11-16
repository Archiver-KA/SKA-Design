# Design system — Buvette restraunt

`SN-W02855` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Minimal and almost entirely neutral. A warm off-white ground (#fafaf9) holds a left-aligned headline set large in near-black (#1c1917), with the second line in mid grey (#78716c). The contact form sits in a white card on a hairline border (#e7e5e4), and the only action colour is the filled near-black button. The page relies on spacing and type size rather than colour.

**Mood:** minimal, neutral, calm, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#fafaf9` · `#ffffff` · `#f5f5f4` · `#44403c` · `#d6d3d1` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium border border-stone-200 px-4 py-2 rounded-full hover:bg-stone-100 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in one face at large size, with the second line in mid grey (#78716c)
- **Do:** Use near-black (#1c1917) as the only action colour, filled for primary actions
- **Do:** Frame forms in a white card on a hairline border (#e7e5e4)
- **Don't:** Don't add an accent colour; the page is neutral by design
- **Don't:** Don't add decorative colour behind the headline
- **Don't:** Don't use shadows on the form card; the border does the separation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
