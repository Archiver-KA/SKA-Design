# Design system — SaaS Booking funnel for Salons 

`SN-W00681` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft, light booking-funnel page with a charcoal headline in a bold sans, where the single word 'Bookings' is set in rose (#e76f9b). The primary button is a solid rose pill with a plain text link beside it, and a tall rounded photo card on the right carries small floating booking notifications. The palette stays warm and light, and rose is used only for emphasis and the button.

**Mood:** soft, warm, reassuring, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fde2e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e76f9b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#e76f9b` · `#333333` · `#ffffff` · `#fde2e4` · `#6b7280` · `#f3f4f6` · `#9ca3af` · `#f9fafb` · `#e5e7eb` · `#fff7f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#E76F9B] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d45c88] hover:shadow-lg hover:shadow-[#FDE2E4] transition-all duration-300 hover:-translate-y-0.5 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Booking form (`booking`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fde2e4;
  --color-surface: #ffffff;
  --color-text: #333333;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #e76f9b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fde2e4',
    surface: '#ffffff',
    ink: '#333333',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#e76f9b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the one key word of the headline in rose (#e76f9b) and keep the rest charcoal
- **Do:** Use a solid rose pill as the primary button, with a plain text link beside it
- **Do:** Frame the product photo as a tall rounded card with small floating notifications
- **Don't:** Don't use rose for body copy; it is for the highlight and the button
- **Don't:** Don't set the page on a saturated pink ground; the ground is near white
- **Don't:** Don't add a second accent colour to the hero; rose is the only one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
