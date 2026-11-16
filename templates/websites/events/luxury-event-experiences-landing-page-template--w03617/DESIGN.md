# Design system — Luxury Event Experiences Landing Page Template

`SN-W03617` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, editorial landing page with a plain header bar and a full-width grey photographic hero. Headlines are set large in a serif, in white over the darkened image, with a small tracked uppercase kicker above them. Colour is almost entirely neutral, so the photography carries the mood, and a solid white button in the centre of the hero is the main call to action.

**Mood:** editorial, neutral, refined, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#fafafa` · `#52525b` · `#3f3f46` · `#f4f4f5` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 18px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-16`, `gap-24`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.2em] uppercase text-white bg-zinc-900 hover:bg-zinc-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Gallery / portfolio (`gallery-portfolio`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size over the hero image
- **Do:** Use small uppercase tracked labels above section headings
- **Do:** Keep the palette neutral and let the photography provide the colour
- **Don't:** Don't place body copy on the photograph without a dark overlay
- **Don't:** Don't add a second accent colour
- **Don't:** Don't set serif headings in bold weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
