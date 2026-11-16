# Design system — Consulting Training Landing Page Template

`SN-W03431` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold, photo-led hero where a full-bleed business photograph sits under a dark overlay, with an uppercase bold sans-serif headline in white. A rust-red [#962d00] button and a short rust rule under the headline are the only colour, which keeps the page serious and corporate. Navigation is plain, with a language switch and one filled button at the right.

**Mood:** serious, corporate, bold, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#962d00` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#962d00` | Primary action and highlights |

Palette by frequency of use: `#962d00` · `#ffffff` · `#111827` · `#6b7280` · `#f3f4f6` · `#f9fafb` · `#e5e7eb` · `#9ca3af` · `#d1d5db` · `#7a2400`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** DM Sans, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-[#962d00] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#7a2400] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #962d00;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #f3f4f6;
  --color-accent: #962d00;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#962d00',
    surface: '#94a3b8',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#f3f4f6',
    accent: '#962d00',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase bold Poppins in white over the photograph
- **Do:** Use the rust red (#962d00) for the primary button and the short rule under the headline
- **Do:** Keep a dark overlay on photographs so white headline text stays legible
- **Don't:** Don't add colours beyond the rust red and white
- **Don't:** Don't set long body paragraphs over the photograph
- **Don't:** Don't place the headline over a bright part of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
