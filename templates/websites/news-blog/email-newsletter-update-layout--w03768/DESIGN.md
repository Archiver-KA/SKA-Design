# Design system — Email Newsletter Update Layout

`SN-W03768` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light update card in a monthly-newsletter style, set on a pale grey ground. A solid violet-blue band [#6366f1] carries the title and a short subtitle, and the sections below sit on white with a small icon in a tinted square for each item. A small violet tag marks new features, and dates are set in grey with a clock glyph.

**Mood:** light, orderly, friendly, clear, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#6b7280` · `#ffffff` · `#111827` · `#f3f4f6` · `#4b5563` · `#9ca3af` · `#e5e7eb` · `#6366f1` · `#e0e7ff` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 16px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-2xl`

**Primary button**

```html
<a class="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-indigo-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the violet-blue band (#6366f1) for the title block only
- **Do:** Give each section a small tinted icon, a bold title and a grey description
- **Do:** Mark new items with a small tag and set dates in grey beneath the text
- **Don't:** Don't repeat the violet band colour in the body text
- **Don't:** Don't use more than one tag style in a single update
- **Don't:** Don't set the sections on coloured backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
