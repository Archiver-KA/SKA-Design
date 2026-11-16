# Design system — Genika Café Artisan Landing Page Template

`SN-W02910` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark warm-charcoal hero with a large serif headline in white, where the last word is set in italic beige-grey. The brown booking button (#483627) in the pale header is the only strong colour, and the eyebrow is a small outlined pill. Body copy is light grey and centred, and the layout reads as a calm, classic cafe identity.

**Mood:** calm, classic, warm, charcoal, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#504d49` | Headings and primary copy |
| Border | `#c2beb3` | Hairlines, dividers, outlines |
| Accent | `#483627` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c2beb3` · `#312f2a` · `#483627` · `#504d49` · `#faf9f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#483627] text-white text-base font-medium hover:bg-[#312f2a] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #504d49;
  --color-border: #c2beb3;
  --color-accent: #483627;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#504d49',
    line: '#c2beb3',
    accent: '#483627',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif, with the final word in italic beige-grey.
- **Do:** Use the brown (#483627) for the header reserve button only.
- **Do:** Set eyebrows as small outlined pills above the headline.
- **Don't:** Don't use bright accent colours; the page is charcoal, cream and brown.
- **Don't:** Don't set the headline in a sans; it is a serif.
- **Don't:** Don't fill the secondary button; the secondary action stays a white outline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
