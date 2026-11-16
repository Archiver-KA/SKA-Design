# Design system — Jade Cafe & China Town – Premium Café & Dining in Lake City Lahore

`SN-W02922` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, nocturnal hero on a deep navy ground (#111827) with a soft teal glow across the middle. The white serif headline sets a gold italic phrase, 'Lake City', and the filled gold reserve buttons (#c9a227) in the nav and hero repeat that gold. The stance is elegant and atmospheric, with the teal glow as a background tone and the gold reserved for the key phrase and actions.

**Mood:** elegant, nocturnal, atmospheric, navy, gilded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f8f4ec` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a227` | Primary action and highlights |
| Second accent | `#0f3d3e` | Supporting highlights |

Palette by frequency of use: `#c9a227` · `#f8f4ec` · `#111827` · `#ffffff` · `#eadbc8` · `#000000` · `#0f3d3e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cinzel, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_-10px_40px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-gold text-charcoal px-6 py-2.5 rounded-none text-sm font-medium tracking-wide hover:bg-ivory transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Menu list (`menu-list`)
6. Booking form (`booking`)
7. FAQ (`faq`)
8. Footer (`footer`)
9. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #000000;
  --color-text: #f8f4ec;
  --color-border: #ffffff;
  --color-accent: #c9a227;
  --color-accent-2: #0f3d3e;
  --font-display: "Cinzel", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#000000',
    ink: '#f8f4ec',
    line: '#ffffff',
    accent: '#c9a227',
    accent2: '#0f3d3e',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, with one italic gold phrase.
- **Do:** Use gold (#c9a227) for the filled reserve buttons and the key italic phrase only.
- **Do:** Keep the navy ground (#111827) with a soft teal glow behind the hero.
- **Don't:** Don't use gold for body copy; it is limited to the key phrase and actions.
- **Don't:** Don't put a light section above the hero; the page runs dark navy top to bottom.
- **Don't:** Don't use the teal (#0f3d3e) as a button fill; it only tints the background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
