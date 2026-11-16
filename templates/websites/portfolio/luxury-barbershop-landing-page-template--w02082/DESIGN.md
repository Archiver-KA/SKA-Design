# Design system — Luxury Barbershop Landing Page Template

`SN-W02082` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A dark, formal barbershop page: a near-black ground [#0b0b0b] with white centred headlines in a high-contrast serif and a single gold accent [#c8a65a] on the primary booking button. Secondary actions are outlined rather than filled, so the gold keeps its weight. Small uppercase eyebrow labels with wide tracking sit above the headline, giving a quiet, exclusive tone.

**Mood:** exclusive, formal, dark, understated, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#2f2f2f` | Hairlines, dividers, outlines |
| Accent | `#c8a65a` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8a65a` · `#0b0b0b` · `#1a1a1a` · `#2f2f2f` · `#000000` · `#111111` · `#151310` · `#0a0a0a` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(200,166,90,0.1)]`, `shadow-[0_0_30px_rgba(200,166,90,0.05)]`, `shadow-[0_0_20px_rgba(200,166,90,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 bg-[#C8A65A] text-[#0B0B0B] font-medium rounded-sm hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-border: #2f2f2f;
  --color-accent: #c8a65a;
  --color-accent-2: #25d366;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#1a1a1a',
    ink: '#ffffff',
    line: '#2f2f2f',
    accent: '#c8a65a',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use gold (#c8a65a) only for the primary booking button and the nav call to action.
- **Do:** Pair each filled gold button with an outlined secondary button of the same height.
- **Do:** Set eyebrow labels in small uppercase with wide letter-spacing above each headline.
- **Don't:** Don't put gold on large text blocks or on section backgrounds.
- **Don't:** Don't use the WhatsApp green (#25d366) for anything except the chat button.
- **Don't:** Don't set long paragraphs centred; keep centred copy to one short line under the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
