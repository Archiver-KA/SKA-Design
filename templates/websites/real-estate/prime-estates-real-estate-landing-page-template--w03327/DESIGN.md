# Design system — Prime Estates Real Estate Landing Page Template

`SN-W03327` · real-estate · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A serif headline, white on a soft grey-blue photographic gradient, with 'neu definiert.' set in italic beneath the roman line. A translucent pill above it labels the category, and a wide white search bar with a navy circular button sits below. The navigation pill carries a navy button, so the dark blue is the one solid colour on the first screen.

**Mood:** calm, elegant, cool, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#94a3b8` · `#f8fafc` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#1e293b` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-slate-900/20 text-sm font-medium tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Services (`services`)
5. About (`about`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, white, with the second line in italic.
- **Do:** Use the navy (#0f172a) for the search button and the navigation button only.
- **Do:** Keep the search field as a wide white pill over the grey photograph.
- **Don't:** Don't set the headline in dark text over the grey gradient; it needs white.
- **Don't:** Don't add a warm accent; the palette is cool greys and navy.
- **Don't:** Don't use the light grey (#e2e8f0) as an accent; it is a surface tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
