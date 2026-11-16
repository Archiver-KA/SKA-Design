# Design system — AI Product Photography Landing Page Template

`SN-W00132` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light commerce landing page on white: a heavy Inter headline in near-black with the closing clause in grey, and a before-and-after slider on the right as the main selling device. Mint green (#00d9a3) is reserved for the header button and the primary action, and a small savings badge sits on the slider. Surfaces stay pale grey, so the page feels clean and unhurried.

**Mood:** clean, commercial, fresh, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#00d9a3` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#00d9a3` · `#f3f4f6` · `#4b5563` · `#6b7280` · `#fbbf24` · `#9ca3af` · `#e5e7eb` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Services (`services`)
8. Feature grid (`features`)
9. Pricing (`pricing`)
10. Contact form (`contact-form`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #00d9a3;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#00d9a3',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at display size, with the closing clause in grey
- **Do:** Use mint (#00d9a3) for the header button and the primary action only
- **Do:** Keep the before-and-after slider as the hero's main visual
- **Don't:** Don't use mint for body text or text links on white
- **Don't:** Don't add dark section backgrounds; the page stays light
- **Don't:** Don't leave the logo slot without a mark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
