# Design system — Décoration d'événement intimiste - MS Events

`SN-W01941` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A white event-decor page with a large serif headline in near-black, where the final word is set in a warm gold, above a grey intro paragraph. Two buttons sit side by side, one dark filled and one outlined, next to a framed photo of a styled dining table in soft tones. Light grey rules and generous margins keep the page calm and formal.

**Mood:** calm, formal, airy, refined, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#e5e7eb` · `#000000` · `#f3f4f6` · `#f9fafb` · `#d1d5db` · `#4b5563` · `#2a2a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-natural-900 text-white text-xs uppercase tracking-widest font-normal text-center overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, near-black, with the final word in gold
- **Do:** Pair a dark filled button with an outlined button for the two actions
- **Do:** Frame event photography at full column height beside the copy
- **Don't:** Don't add a dark background; the page stays white and light grey
- **Don't:** Don't use gold for body text
- **Don't:** Don't put more than two actions in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
