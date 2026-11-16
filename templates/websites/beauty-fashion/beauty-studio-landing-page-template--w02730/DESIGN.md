# Design system — Beauty Studio Landing Page Template

`SN-W02730` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, cinematic beauty studio page with a solid black navigation bar over a dimmed photo hero. Gold-tan (#c9a063) is the only accent and appears on the header booking button, so the colour stays small and the photography carries the mood. Playfair Display headings sit over the dim imagery in a long single-column sequence of services, process and pricing.

**Mood:** dark, cinematic, gold, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#252525` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a063` | Primary action and highlights |

Palette by frequency of use: `#c9a063` · `#ffffff` · `#b8b8b8` · `#1a1a1a` · `#0d0d0d` · `#252525` · `#000000` · `#666666` · `#555555` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-black`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-block px-10 py-4 bg-[#C9A063] text-black text-sm font-bold rounded-sm hover:bg-[#D4AF6A] uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Services (`services`)
7. Process / steps (`how-it-works`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Testimonials (`testimonials`)
12. Contact form (`contact-form`)
13. Articles (`blog-articles`)
14. Comparison (`comparison`)
15. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #252525;
  --color-border: #ffffff;
  --color-accent: #c9a063;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#252525',
    line: '#ffffff',
    accent: '#c9a063',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#c9a063) for the header booking button and at most one highlight per section
- **Do:** Set headlines in Playfair Display over dimmed photography
- **Do:** Keep the navigation bar solid black with white uppercase links
- **Don't:** Don't use gold for large fills; it is reserved for the button and highlights
- **Don't:** Don't use light page grounds; the template is built on near-black
- **Don't:** Don't put photos at full brightness; the hero relies on the dim overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
