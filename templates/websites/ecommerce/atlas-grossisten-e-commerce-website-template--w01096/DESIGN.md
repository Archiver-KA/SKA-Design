# Design system — Atlas Grossisten E-commerce Website Template

`SN-W01096` · ecommerce · light mode · Sinera Atlas theme `market` · language `sv`

## Direction

A high-energy supplement store over a dark photographic hero, with a red announcement bar across the top and uppercase headlines in heavy sans. Red (#cc0000) picks out one headline phrase and fills the primary button, while the secondary is a plain outlined button. The dark gym photograph and white type keep the page direct and athletic.

**Mood:** energetic, direct, athletic, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#4b5563` | Hairlines, dividers, outlines |
| Accent | `#cc0000` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#6b7280` · `#4b5563` · `#d1d5db` · `#151515` · `#0a0a0a` · `#171717` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_20px_rgba(204,0,0,0.3)]`, `shadow-[0_0_15px_rgba(204,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-atlas-red hover:bg-atlas-redhover text-white px-8 py-4 rounded font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(204,0,0,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #4b5563;
  --color-accent: #cc0000;
  --color-accent-2: #1e3a8a;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e7eb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#4b5563',
    accent: '#cc0000',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans and colour one phrase red (#cc0000)
- **Do:** Use red for the primary button and the announcement bar only
- **Do:** Keep hero photography dark, with white type over it
- **Don't:** Don't use red for body text
- **Don't:** Don't set headlines in lowercase or italic
- **Don't:** Don't add a second brand colour to the header

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
