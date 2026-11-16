# Design system — Construction Supply Landing Page Template

`SN-W03226` · real-estate · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A photographic hero on a construction-site image under a darkened navy overlay, with a centred white sans headline and an italic gold phrase naming the company as the single highlight. Gold (#fbbf24) appears only in that phrase and a small caps eyebrow, and the two buttons are a solid white and a dark outlined box. The look is a classic trade-supplier hero: centred, photographic and direct.

**Mood:** classic, photographic, steady, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#fbbf24` · `#475569` · `#f59e0b` · `#d97706` · `#fffbeb` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-8 py-3 bg-white text-slate-900 font-medium rounded-sm hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #fbbf24;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero over a darkened site photo with a navy overlay.
- **Do:** Use the gold (#fbbf24) only for the highlighted name and the small eyebrow line.
- **Do:** Pair one solid white button with one dark outlined button, centred under the copy.
- **Don't:** Don't set the hero on a light ground; the photo overlay is what gives the page its look.
- **Don't:** Don't add more gold highlights; one highlighted phrase per hero is the pattern shown.
- **Don't:** Don't use the pale grey (#e2e8f0) as an accent; it works only as a neutral.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
