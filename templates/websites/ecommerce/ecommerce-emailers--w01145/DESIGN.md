# Design system — eCommerce Emailers

`SN-W01145` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A marketing page on a pale mint ground, with a dark navy button in the header and a very large serif headline in near-black. The key figure in the headline is set in green (#10b981) italic, so the green marks the single promise while the rest stays dark. A white panel holds the hero copy, giving a polished, sales-led feel.

**Mood:** sales-led, polished, bold, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d1fae5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#1e1b4b` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#111827` · `#ffffff` · `#6b7280` · `#e5e7eb` · `#ecfdf5` · `#9ca3af` · `#f3f4f6` · `#4b5563` · `#a7f3d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-emerald-500/20 bg-gray-900 text-white hover:bg-emerald-500 shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Timeline (`timeline`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #d1fae5;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #10b981;
  --color-accent-2: #1e1b4b;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d1fae5',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#10b981',
    accent2: '#1e1b4b',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in near-black, with the key figure in green (#10b981) italic
- **Do:** Keep the hero inside one white panel with rounded corners on the mint ground
- **Do:** Use the dark navy for the header button and the main call to action
- **Don't:** Don't use the green for every line of the headline; it marks only the promise
- **Don't:** Don't set the sub-copy in dark green; it is grey
- **Don't:** Don't put a large image behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
