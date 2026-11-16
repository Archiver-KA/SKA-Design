# Design system — Aether Real-Time 3D Platform Landing Page Template

`SN-W01769` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark slate page ([#111827]) with a large white Inter headline, and an italic Playfair Display word in soft indigo that carries the expressive note. Small uppercase status text sits above, and two outlined buttons sit below. Pairing an upright sans with an italic serif accent word gives the hero an editorial contrast that most developer-tool pages avoid.

**Mood:** editorial, dark, contrasting, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#6366f1` · `#e5e7eb` · `#9ca3af` · `#4b5563` · `#4f46e5` · `#000000` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block w-full py-2.5 rounded-lg text-center text-sm font-semibold text-white shadow-md transition-all mb-8 bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. 3D / canvas scene (`3d-canvas`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Articles (`blog-articles`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#111827',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the italic accent word in Playfair Display, in indigo (#6366f1).
- **Do:** Keep the headline in Inter, white on the dark slate ground.
- **Do:** Limit indigo to the accent word and key highlights.
- **Don't:** Don't set the whole headline in Playfair; only the accent word is serif.
- **Don't:** Don't use a light background; the page is dark slate.
- **Don't:** Don't add a gradient to the headline; the treatment is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
