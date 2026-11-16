# Design system — Small Business Hub Landing Page Template

`SN-W04097` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, airy hub page with a bold dark sans headline whose second line fades to grey. Soft lavender and blue glows sit behind the hero, and a pill-shaped search field is the central element. The navigation is minimal, with a dark pill button for the main action, so the page feels practical and approachable.

**Mood:** airy, practical, clean, approachable, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#6b7280` · `#ffffff` · `#e5e7eb` · `#9ca3af` · `#f3f4f6` · `#f9fafb` · `#374151` · `#d1d5db` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 16px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium py-2 px-4 rounded-full transition-all shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #1e293b;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#1e293b',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold dark sans, with the second line in fading grey
- **Do:** Make the search field a white pill with a thin border the focal element of the hero
- **Do:** Keep the main button in near-black slate (#1e293b)
- **Don't:** Don't place a photograph behind the search field
- **Don't:** Don't use the glows as backgrounds for body text
- **Don't:** Don't give the search field a dark fill; it stays white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
