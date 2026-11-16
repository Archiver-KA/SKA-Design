# Design system — Wedding Venue Landing Page Template

`SN-W03657` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark forest-green hero sits over a full-bleed photograph, with a white serif headline and an italic second line in pale mint. The rest of the page is meant to sit on a cool off-white ground, so the green carries the brand from top to bottom. The amber rating badge is the only warm note against the green.

**Mood:** premium, verdant, formal, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#064e3b` · `#ecfdf5` · `#f1f5f9` · `#022c22` · `#64748b` · `#0f172a` · `#047857` · `#f8fafc` · `#d1fae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-emerald-900 text-white text-sm font-medium rounded-full hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
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
  --color-accent: #064e3b;
  --color-accent-2: #f59e0b;
  --font-display: "Playfair Display", serif;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#064e3b',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep green (#064e3b) for the hero and primary buttons
- **Do:** Set the second headline line in an italic serif in a pale mint tone
- **Do:** Place the amber (#f59e0b) only on small status badges such as ratings
- **Don't:** Don't put the amber on large buttons or headings
- **Don't:** Don't lighten the hero overlay so far that the white headline loses contrast
- **Don't:** Don't use the deep green for body text on the off-white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
