# Design system — Product Designer Portfolio Landing Page Template

`SN-W02187` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial light hero: a white card (#ffffff) on a pale grey ground (#f9f9f9) with a large headline set in a Times-style serif, the second half in italic grey. A green status pill, a black pill nav and a grey image placeholder give the page a restrained, conversion-led feel.

**Mood:** editorial, light, restrained, serif, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#e5e7eb` · `#f3f4f6` · `#000000` · `#4b5563` · `#1f2937` · `#d1d5db` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f9f9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f9',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, with the key phrase in italic grey
- **Do:** Use green (#22c55e) only for the availability pill
- **Do:** Keep the image as a neutral grey panel inside the white card
- **Don't:** Don't set the headline in Inter; use the serif.
- **Don't:** Don't use saturated colour in the hero
- **Don't:** Don't remove the italic phrase; it is the page's emphasis device

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
