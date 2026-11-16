# Design system — Agricultural Export Business Landing Page Template

`SN-W03792` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A sourcing landing page with a deep green hero band that carries white headlines and an amber highlight on the key phrase. The amber (#f4a300) and an orange primary button are the warm colours that draw the eye, while the page below keeps a light ground for product content. Type is Inter throughout, large and direct, with stat blocks of large numerals beneath the hero.

**Mood:** confident, warm, agricultural, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f4a300` | Primary action and highlights |
| Second accent | `#2d5016` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2d5016` · `#f4a300` · `#64748b` · `#e7e5e4` · `#0f172a` · `#334155` · `#ff8c42` · `#fafaf9` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#FF8C42] hover:bg-[#ff7b24] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #e7e5e4;
  --color-accent: #f4a300;
  --color-accent-2: #2d5016;
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
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#e7e5e4',
    accent: '#f4a300',
    accent2: '#2d5016',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white on the green band, with the key phrase in amber (#f4a300).
- **Do:** Use the orange primary button only for the main action in the hero.
- **Do:** Keep stat blocks as large numerals with small labels beneath.
- **Don't:** Don't use amber for body copy on the light ground.
- **Don't:** Don't place the headline on the light part of the page.
- **Don't:** Don't add more than one highlight colour to a headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
