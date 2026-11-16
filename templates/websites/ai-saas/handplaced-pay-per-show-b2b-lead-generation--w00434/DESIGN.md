# Design system — Handplaced | Pay-Per-Show B2B Lead Generation

`SN-W00434` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with a serif headline in near-black, and the second line set in an italic coral-to-orange gradient (#f43f5e) that carries the offer. A navy solid button sits top right, and a small coral dot labels the offer above the headline. The serif and italic pairing gives the page a warm, human tone for a sales service.

**Mood:** warm, human, editorial, confident, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#e5e7eb` · `#f43f5e` · `#9ca3af` · `#1f2937` · `#f9fafb` · `#f3f4f6` · `#fef2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-gray-900/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-gray-900/20 bg-gray-900 text-white hover:bg-gray-800 shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #f43f5e;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the offer line in italic serif with the coral (#f43f5e) gradient
- **Do:** Keep the primary contact button solid navy, at the top right
- **Do:** Label the offer with a small coral dot and tracked uppercase text
- **Don't:** Don't apply the gradient to the first headline line
- **Don't:** Don't set body copy in serif; it is sans
- **Don't:** Don't use more than one gradient on a screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
