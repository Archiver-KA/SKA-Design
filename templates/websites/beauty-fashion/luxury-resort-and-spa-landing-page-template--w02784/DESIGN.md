# Design system — Luxury Resort & Spa Landing Page Template

`SN-W02784` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark five-star resort hero on near-black (#09090b). A large white serif headline has a second line in italic pale gold. Two buttons sit side by side, one solid white and one outlined, and a light booking bar crosses the lower hero edge as the only light block. Gold is confined to the italic phrase.

**Mood:** luxurious, dark, hospitable, classic, composed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#f4f4f5` · `#09090b` · `#52525b` · `#3f3f46` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-white text-zinc-900 px-6 py-3 hover:bg-zinc-100 transition-colors duration-300 shadow-sm border border-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Listings (`listings`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Booking form (`booking`)
12. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #b45309;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#b45309',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic gold, and use gold nowhere else in the hero.
- **Do:** Pair a solid white button with an outlined button for the two hero actions.
- **Do:** Let the light booking bar sit across the bottom edge of the hero as the only light block.
- **Don't:** Don't use gold for buttons or body copy.
- **Don't:** Don't place the headline over the light booking bar.
- **Don't:** Don't fill the nav with colour; it stays black with white links.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
