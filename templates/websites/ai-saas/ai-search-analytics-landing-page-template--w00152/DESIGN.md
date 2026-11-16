# Design system — AI Search Analytics Landing Page Template

`SN-W00152` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Warm cream editorial page on #fdfbf7 with a high-contrast serif headline in near-black (#1c1917). The word narrative is marked with a pale yellow highlight (#fef9c3) that reads like a pen stroke, and the product is a white drafting card with a small green SEO score. The page feels literary and calm, with a single yellow mark carrying the emphasis.

**Mood:** literary, warm, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#fef9c3` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#d6d3d1` · `#e7e5e4` · `#ffffff` · `#fdfbf7` · `#292524` · `#f5f5f4` · `#57534e` · `#a8a29e` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Source Serif 4
- **Body:** Source Serif 4
- **Loaded families:** Playfair Display, Source Serif 4
- **Scale (largest breakpoint):** h1 72px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-stone-900/10`
- **Content width:** `max-w-7xl`, `max-w-[500px]`
- **Common gaps:** `gap-1.5`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2.5 text-sm font-semibold text-[#FDFBF7] bg-stone-900 rounded-lg shadow-md hover:bg-stone-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #fef9c3;
  --color-accent-2: #d1fae5;
  --font-display: "Source Serif 4", serif;
  --font-body: "Source Serif 4", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#fef9c3',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['Source Serif 4'], sans: ['Source Serif 4'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif with one keyword in a pale yellow highlight (#fef9c3)
- **Do:** Keep the background cream (#fdfbf7) and cards white
- **Do:** Use the green (#d1fae5) only for success or score states
- **Don't:** Don't use the yellow highlight for buttons or links
- **Don't:** Don't set the headline in a sans face
- **Don't:** Don't add dark sections to the cream page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
