# Design system — Real Estate Property Studio Landing Page Template

`SN-W03371` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, editorial hero on a pale ground with a faint grid, and a large dark sans-serif headline set in four lines with one phrase in light grey italic. A lime-yellow glow sits behind a black-and-white architectural photograph on the right, and the primary button is muted sage-grey (#5f726f). A small uppercase eyebrow runs above the headline.

**Mood:** editorial, fresh, contemporary, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f9` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#5f726f` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#d6e781` | Primary action and highlights |

Palette by frequency of use: `#5f726f` · `#808187` · `#f3f4f6` · `#ffffff` · `#f9fafb` · `#e5e7eb` · `#111827` · `#d6e781` · `#f9f9f9` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="filter-btn group bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm transition-all font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f9f9;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #5f726f;
  --color-border: #f3f4f6;
  --color-accent: #d6e781;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f9',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#5f726f',
    line: '#f3f4f6',
    accent: '#d6e781',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline large in near-black with one italic phrase in grey
- **Do:** Use the lime (#d6e781) only as a soft glow behind imagery
- **Do:** Use muted sage (#5f726f) for the primary button
- **Don't:** Don't use lime for text or buttons; it is for glow and accents
- **Don't:** Don't add more than one photograph to the hero
- **Don't:** Don't remove the faint grid from the hero ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
