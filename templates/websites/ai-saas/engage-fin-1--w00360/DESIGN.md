# Design system — engage fin 1

`SN-W00360` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy services page with a centred white headline and grey-blue solid and outlined buttons. A dark slate hero sits under a translucent top bar. A row of star rating and licence figures sits under the buttons in plain grey type, and the layout is centred and conventional.

**Mood:** trustworthy, conventional, dark, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#374151` · `#111827` · `#f3f4f6` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#4b5563` · `#fbbf24` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cta-glow">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Services (`services`)
7. Process / steps (`how-it-works`)
8. Case studies (`case-studies`)
9. About (`about`)
10. Contact form (`contact-form`)
11. Footer (`footer`)
12. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #374151;
  --color-border: #f3f4f6;
  --color-accent: #fbbf24;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
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
    muted: '#374151',
    line: '#f3f4f6',
    accent: '#fbbf24',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline white and centred on the dark navy hero
- **Do:** Use slate grey-blue for the primary and outlined secondary buttons
- **Do:** Show star rating and licence as a small row under the buttons
- **Don't:** Don't add amber accents
- **Don't:** Don't put light sections above the hero
- **Don't:** Don't remove the trust row from under the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
