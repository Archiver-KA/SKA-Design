# Design system — B2B Jewelry Wholesale Landing Page Template

`SN-W01106` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A restrained B2B landing page shown inside a browser mockup on pale grey, with a centred serif headline in near-black and a short grey lead. The eyebrow label is the only warm colour, set small and tracked in tan (#e49a6b). A solid black primary button sits beside an outlined secondary, and empty partner logo circles run along the foot of the frame.

**Mood:** restrained, professional, editorial, quiet, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#211e1f` | Headings and primary copy |
| Muted text | `#504c4d` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e49a6b` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#211e1f` · `#ffffff` · `#e49a6b` · `#504c4d` · `#eeeee9` · `#ad5207` · `#000000` · `#e5e7eb` · `#f3f4f6` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="bg-[#E49A6B] text-[#211E1F] px-8 py-3 text-sm font-medium hover:bg-[#d88c5e] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Product grid (`product-grid`)
4. Process / steps (`how-it-works`)
5. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #211e1f;
  --color-muted: #504c4d;
  --color-border: #e5e7eb;
  --color-accent: #e49a6b;
  --color-accent-2: #4ade80;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#211e1f',
    muted: '#504c4d',
    line: '#e5e7eb',
    accent: '#e49a6b',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond, centred, at tight leading
- **Do:** Keep the eyebrow label small, tracked and in tan (#e49a6b)
- **Do:** Pair a solid black primary button with an outlined secondary
- **Don't:** Don't use the tan for buttons or large fills
- **Don't:** Don't add product imagery to the hero; keep it type-led
- **Don't:** Don't set the eyebrow label at full weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
