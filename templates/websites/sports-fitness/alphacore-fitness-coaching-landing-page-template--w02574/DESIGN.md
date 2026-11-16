# Design system — AlphaCore Fitness Coaching Landing Page Template

`SN-W02574` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A high-energy sports page on white with near-black condensed uppercase headlines. Each headline breaks into short lines, with one phrase dropped to a mid-grey for contrast, and the neon lime (#c8ff00) is the single accent on the primary buttons and the header button. Square corners and a thin lime rule at the bottom of the hero give it a sharp, athletic, no-frills feel.

**Mood:** bold, athletic, sharp, condensed, high-energy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f0` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#c8ff00` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#c8ff00` · `#ffffff` · `#4b5563` · `#9ca3af` · `#f5f5f0` · `#6b7280` · `#374151` · `#f3f4f6` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** DM Sans
- **Loaded families:** Barlow Condensed, DM Sans
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-charcoal text-lime font-display font-bold text-lg px-6 py-2 uppercase tracking-wide hover:bg-lime hover:text-charcoal transition-all duration-300 rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f0;
  --color-text: #111111;
  --color-muted: #4b5563;
  --color-border: #111111;
  --color-accent: #c8ff00;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f0',
    ink: '#111111',
    muted: '#4b5563',
    line: '#111111',
    accent: '#c8ff00',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase condensed display type, breaking them into short stacked lines
- **Do:** Use the neon lime (#c8ff00) only on the primary button and the header button
- **Do:** Keep all corners square; buttons and cards use no radius
- **Don't:** Don't use lime for text on white; it is a fill colour for buttons and rules
- **Don't:** Don't soften the headline with a light weight; the condensed bold is the voice
- **Don't:** Don't add rounded corners or soft shadows.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
