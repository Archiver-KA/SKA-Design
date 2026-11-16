# Design system — Luxury Real Estate Landing Page Template

`SN-W03304` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark-slate gradient hero carries a large white serif headline, with the phrase 'Luxury Living' set in italic amber (#f59e0b) to pick out the key idea. A white form card on the right, with a near-black (#0f172a) submit button, is the clearest interface element on the screen. The serif headings are paired with a plain sans for body copy, which keeps the page formal and composed.

**Mood:** formal, warm, composed, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#0f172a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#f59e0b` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#1e293b` · `#b45309` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Plus Jakarta Sans
- **Loaded families:** Playfair Display, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1.5`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-slate-800 transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f59e0b;
  --color-accent-2: #0f172a;
  --font-display: "Playfair Display", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f59e0b',
    accent2: '#0f172a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size in white, with one italic phrase in amber (#f59e0b).
- **Do:** Use near-black (#0f172a) for the form submit button and the navigation call to action.
- **Do:** Keep the form on a white card, with fields stacked and the button full width.
- **Don't:** Don't set the italic phrase in amber on light backgrounds; it needs the dark gradient.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't set body copy in the serif; the sans carries the paragraphs.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
