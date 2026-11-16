# Design system — Painter & Decorator Services Landing Page Template

`SN-W04036` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A traditional trade page with a deep navy hero under a slate-blue overlay. The headline is bold and white, and its final phrase is set in gold (#d4af37). The primary button is solid gold beside a bordered secondary button, and a small line of stats sits beneath, giving the page a reliable, craftsmanlike tone.

**Mood:** traditional, reliable, craftsmanlike, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#1e3a8a` · `#ffffff` · `#d4af37` · `#0f172a` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#475569` · `#e2e8f0` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#1e3a8a] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-md hover:bg-[#172554] transition-colors shadow-lg shadow-blue-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e3a8a;
  --color-accent-2: #d4af37;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e3a8a',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the final phrase of the headline in gold (#d4af37)
- **Do:** Use solid gold for the primary estimate button only
- **Do:** Keep the hero on the navy overlay so white headlines stay readable
- **Don't:** Don't use gold for body text on light backgrounds
- **Don't:** Don't place more than one gold button in a view
- **Don't:** Don't remove the small stats line under the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
