# Design system — Multi-CMS Headless Agency Landing Page Template

`SN-W01644` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light warm-white page with a dark, heavy headline and a product panel on the left showing project status rows in a dark green card. Layout is generous and sectioned, with large headlines separated by whitespace. The accent is carried by a deep green panel and dark buttons rather than the listed red and purple, so the page reads as calm and product-focused.

**Mood:** clean, product-led, calm, spacious, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#9ca3af` · `#6b7280` · `#fafaf9` · `#e5e7eb` · `#4b5563` · `#f9fafb` · `#f3f4f6` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-brand-800 hover:bg-brand-900 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-lg shadow-brand-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #ef4444;
  --color-accent-2: #a855f7;
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
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#ef4444',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set section headlines in heavy Inter in near-black (#111827)
- **Do:** Use a dark green rounded product panel as the hero visual
- **Do:** Separate sections with whitespace on the warm white ground (#fafaf9)
- **Don't:** Don't use the grey body text (#4b5563) for headlines; it is too light
- **Don't:** Don't use the red (#ef4444) or purple (#a855f7) accents in the hero; they do not appear there
- **Don't:** Don't add shadows to the product panel beyond the soft existing lift

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
