# Design system — Law Firm Book Funnel Landing Page Template

`SN-W03975` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm, bookish funnel page on a pale stone ground (#ebe9e1), with a dark brown bar across the top. The headline is a large serif in dark grey with a single italic phrase, and the primary action is a near-black button beside an outlined one. Soft tan glows sit behind the hero, which keeps the page inviting and considered.

**Mood:** warm, bookish, considered, inviting, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebe9e1` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#d8c3a5` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#2c2420` · `#292524` · `#57534e` · `#78716c` · `#e7e5e4` · `#ffffff` · `#1c1917` · `#d6d3d1` · `#44403c` · `#8e8d8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group bg-transparent border border-stone-400 text-stone-700 px-8 py-4 rounded-xl font-medium hover:bg-stone-200 transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Pricing (`pricing`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ebe9e1;
  --color-surface: #e7e5e4;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #d8c3a5;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebe9e1',
    surface: '#e7e5e4',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#d8c3a5',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif, with one italic phrase per headline
- **Do:** Pair the near-black primary button with an outlined secondary button
- **Do:** Keep the top bar in dark brown (#2c2420) above the hero
- **Don't:** Don't use bright colours for buttons
- **Don't:** Don't set body copy in a serif face
- **Don't:** Don't add more than one italic phrase to a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
