# Design system — Modelo Luxury Unisex Salon Landing Page 

`SN-W02804` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, dark luxury salon hero: a dark brown salon-interior photograph under a near-black overlay, with a cream serif headline over three lines. The word 'todo' is tan (#dcc9a7), and the primary button is a tan (#b99668) pill with a WhatsApp prompt, beside an outlined secondary.

**Mood:** warm, cosy, dark, luxurious, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#120d08` | Page ground |
| Surface | `#120d08` | Cards, panels, raised areas |
| Text | `#f7f3e8` | Headings and primary copy |
| Accent | `#b99668` | Primary action and highlights |

Palette by frequency of use: `#ede2cc` · `#f7f3e8` · `#dcc9a7` · `#b99668` · `#120d08` · `#0e0906`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 20px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(185,150,104,0.35)]`, `shadow-[0_0_20px_rgba(185,150,104,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-[#120D08] uppercase bg-[#B99668] rounded-full hover:bg-[#DCC9A7] hover:shadow-[0_0_20px_rgba(185,150,104,0.35)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #120d08;
  --color-surface: #120d08;
  --color-text: #f7f3e8;
  --color-accent: #b99668;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#120d08',
    surface: '#120d08',
    ink: '#f7f3e8',
    accent: '#b99668',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in cream serif (#f7f3e8) and highlight one word in tan (#dcc9a7).
- **Do:** Use tan (#b99668) for the primary button and the nav button only.
- **Do:** Darken the interior photograph to near-black brown so cream text reads.
- **Don't:** Don't use a cool colour anywhere; the palette is brown, tan and cream.
- **Don't:** Don't set the tan highlight over bright photograph areas.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
