# Design system — Garage Clear-Out Services Landing Page Template

`SN-W03921` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright editorial page on a warm off-white ground, where the headline is set in heavy near-black sans and turns into a three-part statement: black, then grey, then orange. The orange (#ea580c) lands on the final word, and the grey middle line softens the message. Copy is short and conversational, with a tall image panel on the right that holds the photograph of the service.

**Mood:** candid, friendly, editorial, bright, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ea580c` · `#e7e5e4` · `#1c1917` · `#57534e` · `#a8a29e` · `#ffffff` · `#fafaf9` · `#78716c` · `#d6d3d1` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="bg-orange-600 hover:bg-stone-900 text-white font-medium py-5 px-12 text-lg transition-all rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Product grid (`product-grid`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #fafaf9;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#fafaf9',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#ea580c',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans at large size, with the middle line in grey (#a8a29e) and the last word in orange (#ea580c).
- **Do:** Use the orange for the final headline word and the primary button only.
- **Do:** Keep the page on the warm off-white ground with a tall image panel on the right.
- **Don't:** Don't set body copy in orange; it is reserved for the headline accent.
- **Don't:** Don't use the green tone as a background fill; it is for small details only.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
