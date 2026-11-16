# Design system — Real Estate Agency Landing Page Template

`SN-W03336` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean SaaS-style real estate page on white, with a faint blue-tinted wash at the top. The headline is dark navy (#0f172a) and its last phrase is set in an indigo-to-blue gradient, which is the one decorative move. A raised white search card sits under the hero copy, and the primary button is solid indigo (#4f46e5).

**Mood:** clean, modern, confident, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#4f46e5` · `#ffffff` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#f1f5f9` · `#f8fafc` · `#475569` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Pricing (`pricing`)
5. Timeline (`timeline`)
6. Map / location (`map-location`)
7. Stats band (`stats`)
8. Team (`team`)
9. Testimonials (`testimonials`)
10. Gallery / portfolio (`gallery-portfolio`)
11. Articles (`blog-articles`)
12. Newsletter signup (`newsletter`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #ef4444;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
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
    accent: '#4f46e5',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) for the primary button and the gradient phrase only
- **Do:** Set the hero headline in dark navy (#0f172a) with one gradient phrase
- **Do:** Place the search form on a white raised card over the pale background
- **Don't:** Don't use the gradient on body text or buttons
- **Don't:** Don't put the search card on a dark background
- **Don't:** Don't add a second brand colour to the nav or footer

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
