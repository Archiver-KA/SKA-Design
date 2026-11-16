# Design system — Luxury Niche Perfumery Landing Page Template

`SN-W02092` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, minimal perfume page: a black ground with a slightly raised dark panel behind a centred hero, a white serif headline with the second phrase in italic, and an outlined button. The navigation is small, widely spaced caps with a serif wordmark beside the links. There is no colour on the first screen; the page relies on the italic and the spacing.

**Mood:** minimal, dark, editorial, quiet, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#c8a97e` · `#000000` · `#6b7280` · `#030303` · `#9ca3af` · `#d1d5db` · `#0a0a0a` · `#4b5563` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-[90rem]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-4 border border-[#C8A97E]/40 text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-light hover:bg-[#C8A97E] hover:text-black hover:border-[#C8A97E] transition-all duration-700 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Timeline (`timeline`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the second phrase in italic.
- **Do:** Keep the hero inside a slightly raised dark panel rather than a bright block.
- **Do:** Use outlined buttons with thin borders and spaced uppercase labels.
- **Don't:** Don't add a colour accent; the page is black and white.
- **Don't:** Don't fill the primary button; it stays outlined.
- **Don't:** Don't set the navigation in mixed case.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
