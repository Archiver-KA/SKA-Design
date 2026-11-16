# Design system — Web Design, Custom Apps & AI Systems | Project D New York

`SN-W00823` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white, editorial homepage with a large Inter headline that carries one gradient word, 'AI era.', running from orange to a sage green. Surfaces are white and pale grey, and the service cards use faint peach and mint washes behind their titles. Colour is limited to the headline and card washes rather than solid blocks, so the page reads as light and airy.

**Mood:** airy, editorial, confident, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ff9146` | Primary action and highlights |
| Second accent | `#46d4c6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#ff9146` · `#1f2937` · `#374151` · `#e5e7eb` · `#9ca3af` · `#6b7280` · `#46d4c6` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-[#ff9146] text-[11px] font-medium py-1.5 px-6 rounded-full flex items-center gap-1.5 hover:bg-orange-100 dark:hover:bg-[#ff9146]/20 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Case studies (`case-studies`)
5. Testimonials (`testimonials`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #ff9146;
  --color-accent-2: #46d4c6;
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
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#ff9146',
    accent2: '#46d4c6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter at 72px, with one gradient word in orange (#ff9146)
- **Do:** Keep page backgrounds white and use faint peach or mint washes only behind cards
- **Do:** Use the orange as the single highlight in each headline
- **Don't:** Don't fill large blocks with orange or teal
- **Don't:** Don't put more than one gradient word in a headline
- **Don't:** Don't add heavy borders to the faint service cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
