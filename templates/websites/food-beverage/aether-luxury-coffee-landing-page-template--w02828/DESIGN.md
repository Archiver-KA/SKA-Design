# Design system — Aether Luxury Coffee Landing Page Template

`SN-W02828` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimalist café page where a dark, warm-toned photograph of coffee tools fills the hero, under a white serif headline with its second line in italic. The navigation sits on a pale translucent strip, and small tracked uppercase text gives the establishment's date and city. The palette is neutral with no accent colour, so the photograph, the serif and the white outline button carry the page.

**Mood:** minimal, photographic, neutral, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#f5f5f5` · `#d4d4d4` · `#fafafa` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="inline-block border border-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in a serif with the second line in italic
- **Do:** Use thin white outline buttons over photography
- **Do:** Keep the page to neutrals (#171717, #737373, #fafafa) with no accent
- **Don't:** Don't add an accent colour; the design is neutral only
- **Don't:** Don't place body copy on the bright parts of the photograph
- **Don't:** Don't use solid filled buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
