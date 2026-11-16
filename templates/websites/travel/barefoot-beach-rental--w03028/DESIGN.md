# Design system — Barefoot beach rental

`SN-W03028` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A coastal photograph fills the top of the page, its aqua water and pale sand supplying most of the colour. The headline is a white serif on three lines, with a short sans subline beneath. White and outlined pills give the actions, and a row of thin outlined chips lists the stay's features, with a cream curve leading into the page below.

**Mood:** breezy, relaxed, coastal, homely

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfaf4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e7e5e4` · `#64748b` · `#475569` · `#0891b2` · `#0e7490` · `#334155` · `#fafaf9` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfaf4;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e7e5e4;
  --color-accent: #0f172a;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfaf4',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#e7e5e4',
    accent: '#0f172a',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif over the photograph, with a short sans subline
- **Do:** Use white pills for primary actions and outlined pills for secondary
- **Do:** Keep the cream curve at the bottom of the hero to lead into the page
- **Don't:** Don't use the bright teal (#0891b2) for buttons; the actions are white and dark
- **Don't:** Don't fill the feature chips; they are thin outlines
- **Don't:** Don't put the headline over bright water without the overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
