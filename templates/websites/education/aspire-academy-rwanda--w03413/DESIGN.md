# Design system — Aspire Academy Rwanda

`SN-W03413` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Community-school charity page built on a full-width group photograph under a dark overlay, with a centred white headline in a sturdy sans. Two buttons sit over the photo: a solid red Give Today and a navy Sponsor a Child, so red leads and navy supports. A thin dark strip runs across the top with contact details, and the copy is plain and direct.

**Mood:** sincere, direct, warm, community-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8f9fa` | Cards, panels, raised areas |
| Text | `#212529` | Headings and primary copy |
| Muted text | `#6c757d` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#dc3545` | Primary action and highlights |
| Second accent | `#434fa1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dc3545` · `#212529` · `#000000` · `#d52e27` · `#434fa1` · `#b82620` · `#f8f9fa` · `#f3f4f6` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Source Sans 3
- **Body:** Source Sans 3
- **Loaded families:** Source Sans 3, Bookman Old Style
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1320px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="transition-colors text-[12px] md:text-sm text-white text-left bg-[#D52E27] rounded px-4 py-2 md:px-6 md:py-2.5 shadow-md hover:bg-[#b82620] whitespace-nowrap font-bold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. About (`about`)
6. Process / steps (`how-it-works`)
7. Services (`services`)
8. Stats band (`stats`)
9. Timeline (`timeline`)
10. Pricing (`pricing`)
11. Team (`team`)
12. Call to action (`cta`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #212529;
  --color-muted: #6c757d;
  --color-border: #000000;
  --color-accent: #dc3545;
  --color-accent-2: #434fa1;
  --font-display: "Source Sans 3", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    ink: '#212529',
    muted: '#6c757d',
    line: '#000000',
    accent: '#dc3545',
    accent2: '#434fa1',
  },
  fontFamily: { display: ['Source Sans 3'], sans: ['Source Sans 3'] },
} }
```

## Do and don't

- **Do:** Set the headline in white over the photograph, centred, in the sans at display size.
- **Do:** Use red (#dc3545) for the Give Today action and navy (#434fa1) for Sponsor a Child.
- **Do:** Keep the photograph under a dark overlay so the white headline stays legible.
- **Don't:** Don't place the red on the photograph without the overlay.
- **Don't:** Don't use the navy as a background fill for sections.
- **Don't:** Don't add more than one red button per screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
