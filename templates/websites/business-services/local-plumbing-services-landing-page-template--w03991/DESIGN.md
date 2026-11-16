# Design system — Local Plumbing Services Landing Page Template

`SN-W03991` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, practical plumbing page with a bold navy headline and a navy call button beside an orange quote button. A bathroom photograph sits in a large rounded frame, so the page shows real work rather than decoration. Orange (#e76f1d) is the one warm accent, used for the quote action and small highlights, and navy (#0a2a4a) carries the text and the calm structure.

**Mood:** practical, bright, trustworthy, direct, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#1f1f1f` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e76f1d` | Primary action and highlights |
| Second accent | `#0a2a4a` | Supporting highlights |

Palette by frequency of use: `#e76f1d` · `#ffffff` · `#0a2a4a` · `#e5e7eb` · `#6b7280` · `#f9fafb` · `#374151` · `#f3f4f6` · `#9ca3af` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-orange/5`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-orange hover:bg-orange/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-orange/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #1f1f1f;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #e76f1d;
  --color-accent-2: #0a2a4a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#1f1f1f',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#e76f1d',
    accent2: '#0a2a4a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#e76f1d) only for the quote button and key highlights
- **Do:** Set headlines in bold sans-serif in navy (#0a2a4a)
- **Do:** Frame the main photograph with rounded corners and a soft overlay card
- **Don't:** Don't use orange for body text
- **Don't:** Don't add decorative illustrations; the photographs carry the page
- **Don't:** Don't turn the call button orange; it stays navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
