# Design system — African E-commerce Landing Page Template

`SN-W01073` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet heritage gifting page built on a desaturated photograph under a dark overlay, so the hero reads grey rather than cream. Cormorant Garamond sets the headline in light white serif at display size, with a tracked small-caps eyebrow above it. Gold (#c9a84c) is the only accent and appears on the primary button alone.

**Mood:** heritage, refined, warm, editorial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0ead6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |
| Second accent | `#8b0000` | Supporting highlights |

Palette by frequency of use: `#1a1a1a` · `#c9a84c` · `#ffffff` · `#c8b89a` · `#f0ead6` · `#8b0000` · `#4682b4` · `#d2b48c` · `#556b2f` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Jost
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-[2px]` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#C9A84C] text-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 uppercase tracking-[0.15em] text-xs font-light py-4 px-10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Articles (`blog-articles`)
8. Call to action (`cta`)
9. Testimonials (`testimonials`)
10. Logo cloud (`logo-cloud`)
11. About (`about`)
12. Process / steps (`how-it-works`)
13. Contact form (`contact-form`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f0ead6;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #c9a84c;
  --color-accent-2: #8b0000;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0ead6',
    surface: '#ffffff',
    ink: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#c9a84c',
    accent2: '#8b0000',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at display size, centred over the image
- **Do:** Use gold (#c9a84c) only for the primary button
- **Do:** Keep the hero photograph desaturated under a dark overlay
- **Don't:** Don't set headings in a sans-serif
- **Don't:** Don't add a second accent colour to buttons or labels
- **Don't:** Don't use bright or saturated photography in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
