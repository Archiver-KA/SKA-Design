# Design system — Creative Studio Landing Page Template

`SN-W01498` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a very heavy, centred sans headline, 'Breed Studio', at large size above a grey two-line subline. A light pill button with an arrow carries the call to action. A grey marquee of uppercase service words runs along the bottom edge, faded at both ends. The only colour is a small green status dot in the pill.

**Mood:** neutral, type-led, calm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eff6ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d1d5db` · `#e5e7eb` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#000000` · `#1f2937` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow`
- **Content width:** `max-w-[1600px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-ink px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group text-white hover:bg-gray-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Integrations (`integrations`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #eff6ff;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eff6ff',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very heavy and centred, with a grey subline beneath it.
- **Do:** Keep the page neutral; use the green (#22c55e) only for the status dot.
- **Do:** Use a light pill button with an arrow for the primary action, and fade the marquee edges.
- **Don't:** Don't add colour blocks; the page is white and black.
- **Don't:** Don't set the marquee words in full black; they stay grey.
- **Don't:** Don't use a dark navigation bar; the nav sits on the white page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
