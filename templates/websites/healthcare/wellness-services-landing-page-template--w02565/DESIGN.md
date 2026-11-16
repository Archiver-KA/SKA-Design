# Design system — Wellness Services Landing Page Template

`SN-W02565` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet, editorial wellness page on a warm off-white ground (#fdfbf7) with a large Cormorant Garamond headline in near-black. The sage green (#8a9a86) appears only in soft decorative shapes and glows, and the buttons are dark charcoal rather than coloured. The mix of an oversized serif, pale hairline borders and a soft image panel gives it a calm, premium, unhurried feel.

**Mood:** calm, editorial, warm, premium, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c2c2a` | Headings and primary copy |
| Muted text | `#6b6b66` | Secondary copy, captions |
| Border | `#e8ede6` | Hairlines, dividers, outlines |
| Accent | `#8a9a86` | Primary action and highlights |

Palette by frequency of use: `#8a9a86` · `#6b6b66` · `#2c2c2a` · `#e8ede6` · `#ffffff` · `#fdfbf7` · `#e5e7eb` · `#f3f4f6` · `#d2dbd0` · `#f4efeb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_24px_rgba(0,0,0,0.01)]`, `shadow-[0_20px_48px_rgba(138,154,134,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-6`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#2C2C2A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#8A9A86] transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Team (`team`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #2c2c2a;
  --color-muted: #6b6b66;
  --color-border: #e8ede6;
  --color-accent: #8a9a86;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#2c2c2a',
    muted: '#6b6b66',
    line: '#e8ede6',
    accent: '#8a9a86',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display face at large size with tight leading, as in the 88px hero
- **Do:** Use the sage (#8a9a86) for decorative glows and soft shapes, not for text or buttons
- **Do:** Keep the primary buttons dark charcoal on the warm off-white ground
- **Don't:** Don't set body copy in the serif; the display face is for headings and short quotes
- **Don't:** Don't use saturated colours; the palette stays warm neutrals with one muted green
- **Don't:** Don't add hard drop shadows; separation comes from pale borders and tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
