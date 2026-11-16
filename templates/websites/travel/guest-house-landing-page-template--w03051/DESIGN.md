# Design system — Guest House Landing Page Template

`SN-W03051` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm boutique guest house with an off-white page (#faf9f6) and a navy-to-grey photo hero. Gold (#d4af37) is the accent: it fills the primary button and marks the italic word in the headline, while navy (#1a3a52) sits in the hero gradient. Serif type carries the headlines, and the hero is a centred text block with a floating review card on the right.

**Mood:** classic, warm, hospitable, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#1a3a52` | Supporting highlights |

Palette by frequency of use: `#1a3a52` · `#d4af37` · `#ffffff` · `#6b7280` · `#e2e8f0` · `#faf9f6` · `#f3f4f6` · `#4b5563` · `#1f4561` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1200px]`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-[#d4af37] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1a3a52] transition-all duration-300 shadow-lg shadow-[#d4af37]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Awards / press (`awards-press`)
5. Listings (`listings`)
6. Services (`services`)
7. Map / location (`map-location`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #333333;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #d4af37;
  --color-accent-2: #1a3a52;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#333333',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#d4af37',
    accent2: '#1a3a52',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Fill the primary button with gold (#d4af37) and keep its text dark
- **Do:** Set the highlighted headline word in italic gold
- **Do:** Use navy (#1a3a52) for the hero gradient and secondary panels
- **Don't:** Don't use gold for body text or thin lines on the off-white ground
- **Don't:** Don't set headlines in a rounded sans; the serif is part of the voice
- **Don't:** Don't stack more than one gold button in the same view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
