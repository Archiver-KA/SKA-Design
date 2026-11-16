# Design system — Wellness Spa Landing Page Template

`SN-W02566` · healthcare · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A stark monochrome page: near-white ground (#fafafa), near-black type and black pill buttons, with no accent colour. The headline is a very large, tightly set sans-serif in mixed case and the uppercase section label sets the hierarchy. Structure comes from the grid and the thin grey borders rather than colour, which makes the page read as minimal and luxurious in a restrained way.

**Mood:** monochrome, minimal, restrained, crisp, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#71717a` · `#e4e4e7` · `#ffffff` · `#fafafa` · `#f4f4f5` · `#52525b` · `#d4d4d8` · `#27272a` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-zinc-900 hover:bg-zinc-800 text-white inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
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
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the palette to near-black, greys and white, and use black for primary buttons
- **Do:** Set the headline large and tight in the sans-serif, with a short tagline below it
- **Do:** Separate sections with thin grey borders rather than coloured bands
- **Don't:** Don't introduce an accent colour; the style depends on the monochrome scale
- **Don't:** Don't set headlines in a light weight at this size; keep them dense and heavy.
- **Don't:** Don't use gradients or glow effects.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
