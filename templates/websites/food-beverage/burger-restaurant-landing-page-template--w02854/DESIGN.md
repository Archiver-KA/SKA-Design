# Design system — Burger Restaurant Landing Page Template

`SN-W02854` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark and product-led. A near-black ground (#09090b) shows a large burger photograph in a rounded frame, while the headline is set in white sans with its second line faded to grey through a gradient text effect. Primary actions are white pills, secondary ones outlined, with small rounded chips for hours and ratings.

**Mood:** dark, photographic, premium, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#fb923c` · `#18181b` · `#27272a` · `#f97316` · `#e4e4e7` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Testimonials (`testimonials`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair large white headlines with a grey fade on the second line
- **Do:** Use white pill buttons for the main action and outlined pills for secondary
- **Do:** Frame food photography in rounded corners on the dark ground
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't make the primary button orange; it is white
- **Don't:** Don't add busy patterns behind the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
