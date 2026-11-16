# Design system — Dubai Holiday Home Management Landing Page Template

`SN-W03041` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A sober hero: a grey gradient that darkens toward the foot carries a large white sans headline on three centred lines. Gold (#d4af37) solid buttons sit beside a white outline button, and the nav is black with a gold consultation button at the right. Small gold icons over uppercase labels form a trust row at the foot of the hero. The page is dark-leaning.

**Mood:** sober, premium, businesslike, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#dbeafe` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#93c5fd` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#000000` · `#6b7280` · `#f5e9d3` · `#4b5563` · `#f3f4f6` · `#e5e7eb` · `#dbeafe` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 36px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-[#D4AF37] font-semibold transition-all duration-300 text-black hover:bg-white font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Pricing (`pricing`)
8. Booking form (`booking`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #dbeafe;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #d4af37;
  --color-accent-2: #93c5fd;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#dbeafe',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#d4af37',
    accent2: '#93c5fd',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans on centred lines over the grey gradient
- **Do:** Use gold (#d4af37) for the primary buttons and the consultation link
- **Do:** Put short trust markers with gold icons in a row at the foot of the hero
- **Don't:** Don't set the headline over the light upper grey without the gradient
- **Don't:** Don't use gold for body text; it is for actions and markers
- **Don't:** Don't use a rounded pill for the outline button; it is a squared box

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
