# Design system — Hydroponic Solutions Landing Page Template

`SN-W00451` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light agri-tech page on a near-white ground, with slate body text and a deep green (#059669) used for the primary button and the small eyebrow label. The headline is large and heavy, with its second line in light slate grey for a two-tone effect. Rounded cards and a soft blurred glow sit behind the hero. The tone is calm and trustworthy.

**Mood:** calm, light, trustworthy, organic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#059669` · `#ffffff` · `#64748b` · `#e2e8f0` · `#10b981` · `#94a3b8` · `#334155` · `#f8fafc` · `#ecfdf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Montserrat, Poppins, Playfair Display, Bricolage Grotesque, PT Serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-emerald-500/5`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 font-poppins">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Case studies (`case-studies`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #059669;
  --color-accent-2: #e2e8f0;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 8px;
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
    accent: '#059669',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Use the green (#059669) for the primary button and the small eyebrow labels
- **Do:** Set the second headline line in lighter slate grey for contrast
- **Do:** Keep the page on the near-white ground with white cards
- **Don't:** Don't use green for body text or large background fills
- **Don't:** Don't add more than one strong colour to a section
- **Don't:** Don't use heavy drop shadows; cards are light and flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
