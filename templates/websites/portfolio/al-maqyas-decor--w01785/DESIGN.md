# Design system — AL MAQYAS DECOR 

`SN-W01785` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a bold dark slate headline in sans, where the last line drops to a lighter grey. Project cards sit on a pale blue tint, and the primary buttons are near-black with white text. The page is clean and commercial in tone; the yellow accent barely appears, and blue tags and near-black buttons carry the colour.

**Mood:** clean, commercial, direct, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#dbeafe` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#4b5563` · `#374151` · `#f3f4f6` · `#9ca3af` · `#1f2937` · `#6b7280` · `#facc15` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 20px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #dbeafe;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #111827;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#dbeafe',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#111827',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter, with the last line in lighter grey.
- **Do:** Use near-black (#111827) for primary buttons with white text.
- **Do:** Use blue (#2563eb) for small tags and chips, not for large areas.
- **Don't:** Don't make yellow a large block colour; it appears only in small accents.
- **Don't:** Don't use a dark page background; the design is white.
- **Don't:** Don't set the headline in a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
