# Design system — Make  My Day Cafe 

`SN-W02943` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cosy cafe page with an off-white nav (#faf9f6) over a grey photo hero, where white Playfair Display headlines mix upright and italic lines. The gold (#c9a227) filled Book a Table button and the green (#25d366) chat button are the only bright colours. The hero overlay keeps white type readable on a mid-grey photo, so the page feels warm but not loud.

**Mood:** cosy, warm, refined, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c1810` | Headings and primary copy |
| Border | `#2c1810` | Hairlines, dividers, outlines |
| Accent | `#c9a227` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#2c1810` · `#ffffff` · `#c9a227` · `#faf9f6` · `#000000` · `#d4c5a5` · `#16a34a` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Booking form (`booking`)
8. Testimonials (`testimonials`)
9. Map / location (`map-location`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #2c1810;
  --color-border: #2c1810;
  --color-accent: #c9a227;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#2c1810',
    line: '#2c1810',
    accent: '#c9a227',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Mix upright and italic lines in the hero Playfair Display headline
- **Do:** Use gold (#c9a227) for the primary booking button only
- **Do:** Keep the chat button green (#25d366) in the bottom corner and off the content
- **Don't:** Don't set the hero text in dark brown over the grey photo; it needs white
- **Don't:** Don't use Inter for headings; the headings are serif.
- **Don't:** Don't add more than one filled button per view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
