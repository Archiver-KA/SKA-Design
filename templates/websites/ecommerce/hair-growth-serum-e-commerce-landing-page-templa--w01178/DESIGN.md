# Design system — Hair Growth Serum E-commerce Landing Page Template

`SN-W01178` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, clinical hair-serum page on near-black (#050505), with a tight, heavy sans headline that steps from white to muted grey on its second line. Emerald (#10b981) is used for the ingredient name and the status label, and a white pill is the primary action. The product card on the right is a dark panel with small uppercase captions, which keeps the tone technical and precise.

**Mood:** clinical, dark, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#4b5563` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#10b981` · `#6b7280` · `#9ca3af` · `#050505` · `#4b5563` · `#000000` · `#d1d5db` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-[180px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Comparison (`comparison`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #4b5563;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#4b5563',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#10b981) for ingredient names and status labels only.
- **Do:** Set the primary button as a white pill on dark, with the secondary as a dark outline.
- **Do:** Keep the headline heavy sans, with a white first line and a grey second line.
- **Don't:** Don't use emerald for buttons; it marks data and ingredients.
- **Don't:** Don't set the page on a light ground; the design depends on near-black.
- **Don't:** Don't add a second highlight colour beside the emerald.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
