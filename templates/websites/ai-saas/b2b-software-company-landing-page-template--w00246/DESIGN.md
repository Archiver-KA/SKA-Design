# Design system — B2B Software Company Landing Page Template

`SN-W00246` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, restrained software studio page: white ground, near-black Inter headlines set tight at large size, and a grey (#6b7280) subline. The only colour comes from a large soft purple-to-teal abstract gradient image on the right, which is the visual centre; the UI around it is monochrome with a near-black button. A white translucent card sits over the image, so depth comes from the picture rather than from interface chrome.

**Mood:** restrained, monochrome, corporate, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#f3f4f6` · `#e5e7eb` · `#4b5563` · `#f9fafb` · `#9ca3af` · `#d1d5db` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-gray-200`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Team (`team`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the interface monochrome and let the gradient image carry all colour
- **Do:** Set headlines in Inter at heavy weight, tightly leaded, in near-black (#111827)
- **Do:** Use a near-black filled button for the primary action
- **Don't:** Don't add accent colour to buttons or links; the interface is greyscale
- **Don't:** Don't place body copy over the gradient image without a white card behind it
- **Don't:** Don't set headlines in a low-contrast grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
