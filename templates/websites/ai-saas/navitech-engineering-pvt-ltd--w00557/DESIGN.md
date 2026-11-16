# Design system — Navitech Engineering Pvt. Ltd.

`SN-W00557` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero (#0f172a) split between a text column on the left and a blue photographic panel on the right, with a soft seam between them. The headline is white on its first line and muted slate on the second, and the primary button is white with a dark outline secondary. The blue panel supplies the only colour and keeps the image apart from the text.

**Mood:** precise, industrial, dark, solid

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f1f5f9` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f1f5f9` · `#000000` · `#0f172a` · `#64748b` · `#020617` · `#94a3b8` · `#475569` · `#1e293b` · `#ffffff` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-slate-800/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-medium border px-4 py-2 rounded-full transition-colors text-slate-100 border-slate-800 hover:bg-slate-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Product grid (`product-grid`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #f1f5f9;
  --color-border: #0f172a;
  --color-accent: #1e293b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#020617',
    ink: '#ffffff',
    muted: '#f1f5f9',
    line: '#0f172a',
    accent: '#1e293b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the text column on the dark navy ground (#0f172a) and the image panel on the right
- **Do:** Set the headline white on the first line and muted slate on the second
- **Do:** Use a white primary button with a dark outline secondary
- **Don't:** Don't place text over the blue image panel
- **Don't:** Don't add bright accent colours; the page is navy and white
- **Don't:** Don't set the second headline line in white; the pair relies on contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
