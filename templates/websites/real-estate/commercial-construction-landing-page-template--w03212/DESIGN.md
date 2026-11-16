# Design system — Commercial Construction Landing Page Template

`SN-W03212` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A conventional contractor page built on a saturated red (#b92b27) header band above a dark hero. The headline is large white sans, and the red appears only in the header and the primary button, so the hero reads as a dark block under a bright strip. Buttons are simple rectangles, and the layout is dependable rather than expressive.

**Mood:** dependable, bold, plain, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#b92b27` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#b92b27` · `#111827` · `#ffffff` · `#e5e7eb` · `#fef2f2` · `#4b5563` · `#f3f4f6` · `#f9fafb` · `#6b7280` · `#a02521`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#b92b27] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#a02521] transition-colors text-center shadow-lg shadow-red-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Case studies (`case-studies`)
7. Pricing (`pricing`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #b92b27;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#b92b27',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the red (#b92b27) for the header band and the primary button only.
- **Do:** Set headlines in large white sans on the dark hero.
- **Do:** Keep buttons as simple shapes: solid red for primary, outlined for secondary.
- **Don't:** Don't use the yellow (#facc15) as a background; it is a rare highlight at most.
- **Don't:** Don't introduce a second brand colour beyond the red and white.
- **Don't:** Don't put light text on the red header; keep the nav labels white on red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
