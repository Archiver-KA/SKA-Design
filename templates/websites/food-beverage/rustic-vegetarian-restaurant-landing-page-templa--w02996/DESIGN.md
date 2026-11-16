# Design system — Rustic Vegetarian Restaurant Landing Page Template

`SN-W02996` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A rustic-chic hero where a grey-brown photograph fades under a large white serif headline, Rustic-Chic Vegetarian Dining, set over two lines. A green filled Book a Table button leads, with a grey outlined WhatsApp button beside it, and small outlined pill tags sit above the headline. The green is the only colour in the hero.

**Mood:** rustic, soft, muted, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c2410c` · `#fff7ed` · `#eab308` · `#fecaca` · `#fef2f2` · `#b91c1c` · `#fee2e2` · `#fed7aa` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full text-white bg-accent-700 hover:bg-accent-600 transition shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Menu list (`menu-list`)
6. Timeline (`timeline`)
7. Booking form (`booking`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fff7ed;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #ffedd5;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fff7ed',
    ink: '#111111',
    line: '#ffffff',
    accent: '#ffedd5',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in the large serif, in white, over the faded photograph.
- **Do:** Use the green fill for the Book a Table button only.
- **Do:** Keep the small outlined pill tags above the headline.
- **Don't:** Don't put dark text on the grey photograph.
- **Don't:** Don't add peach fills to the hero; it has none.
- **Don't:** Don't turn the WhatsApp button green; it is outlined grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
