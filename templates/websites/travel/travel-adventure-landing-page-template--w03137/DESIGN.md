# Design system — Travel Adventure Landing Page Template

`SN-W03137` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photo-led adventure page: a full-width Himalayan mountain photograph sits behind a bold white sans headline, with one word set in red (#dc2626). A near-black utility bar sits above a white nav, and the solid red button is the primary action. Below the hero, white cards with hairline separators continue the rhythm, so red marks emphasis and nothing else.

**Mood:** bold, adventurous, photographic, direct, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#111827` · `#ef4444` · `#4b5563` · `#1f2937` · `#9ca3af` · `#000000` · `#f3f4f6` · `#b91c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-base font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Call to action (`cta`)
8. FAQ (`faq`)
9. Testimonials (`testimonials`)
10. Articles (`blog-articles`)
11. Timeline (`timeline`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #dc2626;
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
    surface: '#f3f4f6',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white bold sans over the photograph, with one red (#dc2626) word
- **Do:** Use red (#dc2626) for primary buttons and the highlighted word only
- **Do:** Keep the top utility bar in near-black (#111827) above a white nav
- **Don't:** Don't place the headline over a busy part of the photo without a dark overlay
- **Don't:** Don't add a second accent colour beside the red
- **Don't:** Don't use red for large background fills; it is a highlight colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
