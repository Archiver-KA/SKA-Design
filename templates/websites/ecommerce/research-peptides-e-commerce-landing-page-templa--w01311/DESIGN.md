# Design system — Research Peptides E-commerce Landing Page Template

`SN-W01311` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A clinical, trust-led landing page: a dark navy announcement strip sits above a white hero, and a single blue primary button (#2563eb) is the only saturated control on the first screen. The large, tightly set Inter headline in near-black (#0f172a) states the offer plainly, and the product photograph in a rounded frame on the right supplies the only warm tone. The result reads as a laboratory supplier, with little ornament.

**Mood:** clinical, trustworthy, plain, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#0f172a` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#1d4ed8` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-[80%]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Process / steps (`how-it-works`)
7. Team (`team`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#2563eb) for the primary button and links only
- **Do:** Set the headline in Inter at display size in near-black (#0f172a) with tight leading
- **Do:** Put trust signals in a thin dark strip above the navigation, in small sans-serif text
- **Don't:** Don't use red or pink as an accent.
- **Don't:** Don't add decorative gradients to the hero; the background stays flat white
- **Don't:** Don't crowd the hero with badges; one strip of trust signals is the limit

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
