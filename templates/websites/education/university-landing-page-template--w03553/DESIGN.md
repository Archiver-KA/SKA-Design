# Design system — University Landing Page Template

`SN-W03553` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The university page is built on a full-bleed photograph of a brick campus building under a deep indigo overlay. The headline is large, white and centred, with the key phrase in gold (#f59e0b) italic serif for emphasis. The navigation is a light bar, and the primary button is a dark navy pill beside a white outlined one. The mood is formal and aspirational.

**Mood:** aspirational, formal, photographic, indigo, gold-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e1b4b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#312e81` · `#f1f5f9` · `#1e1b4b` · `#f59e0b` · `#e2e8f0` · `#64748b` · `#0f172a` · `#475569` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-indigo-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-indigo-900 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Call to action (`cta`)
7. Announcement bar (`announcement-bar`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f59e0b;
  --color-accent-2: #1e1b4b;
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
    line: '#f1f5f9',
    accent: '#f59e0b',
    accent2: '#1e1b4b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place campus photography under a deep indigo overlay in the hero
- **Do:** Set the key phrase of the headline in gold (#f59e0b) italic
- **Do:** Use dark navy for the primary button and white for the secondary
- **Don't:** Don't remove the overlay, since white headline text needs it
- **Don't:** Don't use gold for body copy
- **Don't:** Don't set the photo at full brightness behind the copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
