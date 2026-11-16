# Design system — Solflare Real Estate Landing Page Template

`SN-W03382` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, photographic home-improvement landing page. A full-bleed interior photo sits under a dark overlay, and a large white headline runs across it, with the words in Dallas picked out in amber (#f59e0b). Amber is the only colour and is used sparingly for one phrase and the call to action. Small grey body copy sits on the right, so the photograph stays in control.

**Mood:** photographic, warm, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#0b0b0c` · `#000000` · `#cbd5e1` · `#64748b` · `#94a3b8` · `#475569` · `#fcd34d` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Satisfy, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-amber-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="mt-4 text-[#0b0b0c] px-6 py-3 rounded-full font-medium text-sm transition-colors flex items-center gap-2 hover:bg-amber-200 bg-amber-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Listings (`listings`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) with one phrase in amber (#f59e0b).
- **Do:** Place the interior photo full-bleed behind a dark overlay, never at full brightness.
- **Do:** Use amber for the main call to action and the highlighted phrase only.
- **Don't:** Don't put amber on body copy or on more than one phrase per headline.
- **Don't:** Don't remove the dark overlay; headline legibility depends on it.
- **Don't:** Don't place light panels over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
