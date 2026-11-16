# Design system — Spa & Wellness Landing Page Template

`SN-W02532` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, spa-toned salon page: a warm off-white ground with dark headlines in a serif and a tan (#a0936c) for the top bar and primary buttons. The hero's second line is set in a darker taupe (#8c7f5a), and the layout stays open with a large photographic panel on the right. The stance is gentle and light, closer to a studio than a luxury house.

**Mood:** gentle, warm, airy, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#a0936c` | Hairlines, dividers, outlines |
| Accent | `#a0936c` | Primary action and highlights |

Palette by frequency of use: `#a0936c` · `#ffffff` · `#0f172a` · `#64748b` · `#8c7f5a` · `#f8fafc` · `#f1f5f9` · `#475569` · `#e2e8f0` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-[#a0936c] border border-transparent rounded-full shadow-lg hover:bg-[#8c7f5a] hover:shadow-[#a0936c]/30 hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. About (`about`)
6. Map / location (`map-location`)
7. Booking form (`booking`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #a0936c;
  --color-accent: #a0936c;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#a0936c',
    accent: '#a0936c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use tan (#a0936c) for the top bar and the primary buttons
- **Do:** Set the second line of the hero headline in the taupe (#8c7f5a) serif
- **Do:** Keep the hero text column left-aligned with a large photograph panel on the right
- **Don't:** Don't use the tan for body text; body copy is grey
- **Don't:** Don't set body copy in the serif; the serif is for headlines
- **Don't:** Don't add saturated colours; the page stays in warm neutrals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
