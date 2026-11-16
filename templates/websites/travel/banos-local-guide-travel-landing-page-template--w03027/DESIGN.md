# Design system — Baños Local Guide Travel Landing Page Template

`SN-W03027` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold photographic hero: a deep teal-navy portrait fills a rounded card, with an oversized white sans headline set over its darkest area. A verified-expert pill sits above the headline, and a WhatsApp-green button floats at the lower right as the booking channel. Outside the card the page is white with generous space, so the photograph and the green carry the design.

**Mood:** direct, personal, photographic, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#0a1f1c` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a1f1c` · `#00e36b` · `#000000` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#f9fafb` · `#e5e7eb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 14px
- **Weights in use:** bold, extrabold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/5`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#00E36B] text-[#0A1F1C] px-8 py-5 rounded-full font-extrabold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,227,107,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #0a1f1c;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #25d366;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e7eb',
    ink: '#0a1f1c',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#25d366',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans over the darkest part of the photograph
- **Do:** Use WhatsApp green (#25d366) for the booking button and the chat bubble only
- **Do:** Frame the hero as a rounded card with generous white margins
- **Don't:** Don't use the bright neon green (#00e36b) as a page ground; the ground is white
- **Don't:** Don't place the headline over the bright sunglasses area
- **Don't:** Don't use WhatsApp green for general links or headings

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
