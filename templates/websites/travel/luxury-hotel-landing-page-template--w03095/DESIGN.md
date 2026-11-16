# Design system — Luxury Hotel Landing Page Template

`SN-W03095` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark navy hero (#0f1f35) with a serif headline in white and gold (#d4af37) on the two key words, Luxury and Comfort. A gold-ringed monogram medallion with a soft glow sits on the right, and a row of gold serif figures runs along the bottom. Gold is the single accent, used for the primary button, the stat figures and the medallion ring.

**Mood:** luxurious, dark, glowing, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f1f35` | Page ground |
| Surface | `#dcfce7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#d4af37` · `#0f1f35` · `#dcfce7` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 border border-gold-300/50 text-gold-300 font-medium rounded-full hover:bg-gold-300/10 transition-all flex items-center justify-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Booking form (`booking`)
12. Modal / overlay (`modal-overlay`)
13. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f1f35;
  --color-surface: #dcfce7;
  --color-text: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #d4af37;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f1f35',
    surface: '#dcfce7',
    ink: '#ffffff',
    accent: '#d4af37',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif with the two key words in gold (#d4af37)
- **Do:** Use gold for the primary button, the stat figures and the medallion ring only
- **Do:** Keep the navy (#0f1f35) as the ground behind the hero and its glow
- **Don't:** Don't use the red (#ef4444) or green (#22c55e) in the hero
- **Don't:** Don't set body copy in gold
- **Don't:** Don't make the glow stronger than the medallion

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
