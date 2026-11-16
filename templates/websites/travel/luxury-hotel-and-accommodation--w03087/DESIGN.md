# Design system — Luxury Hotel & Accommodation

`SN-W03087` · travel · dark mode · Sinera Atlas theme `dwell` · language `en-ZA`

## Direction

A classical hotel stance on a near-black ground (#151515). Headlines are set large in Playfair Display, and one word per heading switches to italic gold (#bc9860), which carries the emphasis. Gold is kept for the primary button and the italic word, while body copy stays warm off-white (#f7f4ee) in Inter. The result reads as restrained and editorial.

**Mood:** classical, restrained, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#151515` | Page ground |
| Surface | `#1f1f1f` | Cards, panels, raised areas |
| Text | `#f7f4ee` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bc9860` | Primary action and highlights |

Palette by frequency of use: `#bc9860` · `#f7f4ee` · `#151515` · `#ffffff` · `#1f1f1f` · `#d4b480` · `#9ca3af` · `#2a2a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-gold/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full py-4 bg-gold hover:bg-gold-light text-charcoal font-medium uppercase tracking-widest text-xs rounded-lg transition-all shadow-lg shadow-gold/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Listings (`listings`)
6. Call to action (`cta`)
7. Timeline (`timeline`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #151515;
  --color-surface: #1f1f1f;
  --color-text: #f7f4ee;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #bc9860;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#151515',
    surface: '#1f1f1f',
    ink: '#f7f4ee',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#bc9860',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at large size and switch one word per heading to italic gold (#bc9860)
- **Do:** Use the solid gold fill only on the primary button, such as View Rooms
- **Do:** Keep body copy in Inter in warm off-white (#f7f4ee) on the #151515 ground
- **Don't:** Don't set body copy in the serif; it is reserved for headlines
- **Don't:** Don't put more than one italic gold word in a headline
- **Don't:** Don't introduce bright or saturated colours; the palette is near-black, cream and gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
