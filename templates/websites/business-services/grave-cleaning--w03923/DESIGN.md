# Design system — Grave cleaning

`SN-W03923` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A deep green-black page where a serif headline pairs a white first line with an italic emerald second line (#34d399). Playfair Display sets the headline in a classic, memorial tone, while Inter carries the body copy and cards. Three small cards on the right list services with an emerald eyebrow over each white title, and the primary button is a solid emerald pill. The mood is quiet and respectful.

**Mood:** quiet, respectful, classic, tender, steady

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#022c22` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#022c22` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#064e3b` · `#000000` · `#f43f5e` · `#fbbf24` · `#022c22` · `#010a05` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Noto Nastaliq Urdu, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-emerald-900/50`, `shadow-emerald-500/25`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="block text-center w-full py-3 rounded-lg bg-amber-500 text-black font-medium text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #022c22;
  --color-text: #ffffff;
  --color-muted: #022c22;
  --color-border: #ffffff;
  --color-accent: #34d399;
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
    background: '#022c22',
    surface: '#022c22',
    ink: '#ffffff',
    muted: '#022c22',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with the second line in italic emerald (#34d399).
- **Do:** Use the solid emerald pill for the primary plan action and outlined pills for the secondary chat action.
- **Do:** Label each service card with a small uppercase emerald eyebrow above a white title.
- **Don't:** Don't lighten the background to pale green; the deep green ground is the look.
- **Don't:** Don't set headlines in a sans-serif; the serif carries the tone.
- **Don't:** Don't add a second accent colour beyond the emerald.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
