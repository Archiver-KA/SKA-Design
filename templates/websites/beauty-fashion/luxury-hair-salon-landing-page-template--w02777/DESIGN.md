# Design system — Luxury Hair Salon Landing Page Template

`SN-W02777` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A monochrome, cinematic salon hero on a near-black ground (#020202). The display word is set in wide serif capitals with a silver gradient, and an italic serif line sits over it at low contrast, so the wordmark reads as a sculptural object. Small tracked uppercase labels frame the top, and a single outlined pill button is the call to action. The page relies on silver and black rather than colour.

**Mood:** cinematic, monochrome, luxurious, sculptural, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e5e5e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#020202` · `#171717` · `#e5e5e5` · `#d9b56f` · `#262626` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Playfair Display
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[1920px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="filter-btn text-black bg-gold-300 border border-gold-300 px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all hover:opacity-80 whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Modal / overlay (`modal-overlay`)
8. Team (`team`)
9. Logo cloud (`logo-cloud`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #e5e5e5;
  --color-accent-2: #22c55e;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#e5e5e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the display word in wide serif caps with a silver gradient from #ffffff to #a3a3a3.
- **Do:** Keep the ground near-black (#020202) and use only greys for interface elements.
- **Do:** Use one outlined pill button per hero, with small tracked uppercase text.
- **Don't:** Don't introduce gold; the palette is silver and black.
- **Don't:** Don't set the italic overlay line at full contrast; it sits behind the wordmark.
- **Don't:** Don't use green (#22c55e) in the interface; it does not appear in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
