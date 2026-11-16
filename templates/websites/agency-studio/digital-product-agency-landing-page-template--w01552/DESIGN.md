# Design system — Digital Product Agency Landing Page Template

`SN-W01552` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large white headline stacked over three lines, where the last word TRUST is set in vermilion (#f23e02) on a faint warm glow. Both buttons use uppercase labels: a solid white and an outline, with small grey body text to the right. Orange appears only on one headline word and the glow.

**Mood:** dark, bold, uppercase, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f23e02` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f23e02` · `#262626` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#000000` · `#404040` · `#0f0f0f` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-12`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="block text-center w-full py-3 bg-[#F23E02] text-white text-xs uppercase tracking-widest hover:bg-[#d63400] transition-colors rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Stats band (`stats`)
5. Services (`services`)
6. Product grid (`product-grid`)
7. Dashboard preview (`dashboard-preview`)
8. Call to action (`cta`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f0f0f;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #f23e02;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f0f0f',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#f23e02',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline word in vermilion (#f23e02) and the rest in white
- **Do:** Use uppercase labels on the solid white and outline buttons
- **Do:** Keep the warm glow behind the headline on a #000000 page ground
- **Don't:** Don't use vermilion as the page background; it is the headline accent
- **Don't:** Don't set body copy in orange
- **Don't:** Don't put the glow behind the body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
