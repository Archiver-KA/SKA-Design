# Design system — Co-Founder Matching Landing Page Template

`SN-W03868` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm, airy page on a near-white cream ground (#fdfbf9) with a large orange headline line set above dark sans-serif text. The hero is quiet: a single solid orange button and small grey supporting copy. Soft blurred circles with fragments of the logo float on the right as the one visual motif.

**Mood:** warm, airy, modern, friendly, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#57534e` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#fdba74` · `#ffedd5` · `#ea580c` · `#fdfbf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-800 hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Testimonials (`testimonials`)
5. About (`about`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #fdba74;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#fdba74',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in orange and the second in dark sans-serif
- **Do:** Use the orange for the primary button and the headline accent only
- **Do:** Keep the hero on a warm off-white (#fdfbf9) with soft blurred shapes
- **Don't:** Don't use a flat white hero; the warm ground is part of the look
- **Don't:** Don't set supporting copy in a heavy weight; it stays light grey
- **Don't:** Don't crop the floating circles into hard frames; they are soft shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
