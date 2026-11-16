# Design system — AI Language Learning Landing Page Template

`SN-W03407` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Clean, light AI-learning page on white with a dark navy sans headline, where one highlighted word is set in a saturated orange that carries the message. The primary button is dark navy beside an outlined secondary, and a row of grey model names sits lower on the page as proof. The layout is centred with generous space, and the orange is kept to a single word.

**Mood:** clean, confident, open, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#9ca3af` | Supporting highlights |

Palette by frequency of use: `#111827` · `#e5e7eb` · `#f3f4f6` · `#ffffff` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#374151` · `#7c3aed` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xs`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-all shadow-xs border border-transparent hover:shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Team (`team`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --color-accent-2: #9ca3af;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e7eb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
    accent2: '#9ca3af',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black (#111827) with one highlighted word in orange.
- **Do:** Use the dark navy button for the primary action and an outlined button for the demo.
- **Do:** Set the row of names in muted grey (#9ca3af) under a small uppercase caption.
- **Don't:** Don't set more than one word in the orange.
- **Don't:** Don't colour the model names; they stay grey.
- **Don't:** Don't add a background image behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
