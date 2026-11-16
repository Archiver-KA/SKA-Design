# Design system — Real Estate Management Landing Page Template

`SN-W03364` · real-estate · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A light, editorial hero on white with a large dark serif headline. The second line is set in italic deep green (#064e3b), which carries the emphasis, and a small pale-green pill sits above the title. A pale grey panel fills the right side behind a floating stat card, and the primary button is solid dark green.

**Mood:** editorial, calm, established, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#022c22` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#064e3b` · `#022c22` · `#ffffff` · `#6b7280` · `#111827` · `#e5e7eb` · `#065f46` · `#9ca3af` · `#a7f3d0` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-emerald-900/10`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-white text-xs uppercase tracking-wider font-medium hover:bg-emerald-900 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #022c22;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #064e3b;
  --font-display: "Playfair Display", serif;
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
    ink: '#022c22',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second line in italic deep green (#064e3b)
- **Do:** Use deep green (#064e3b) for the primary button and the emphasis line
- **Do:** Float stat cards over the pale grey image panel
- **Don't:** Don't use bright green; the palette stays deep green and near-black
- **Don't:** Don't set body copy in green
- **Don't:** Don't place the stat card over a dark image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
