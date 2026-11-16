# Design system — Raivat Luxury Real Estate Landing Page Template

`SN-W03332` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A stark black hero where a very large white serif headline stacks three words over two lines, with each full stop kept as part of the statement. The navigation is small, tracked uppercase on a translucent grey bar, and the actions are an outlined rectangle and a plain text link. With no colour or imagery on the first screen, scale and the serif carry the whole design.

**Mood:** stark, editorial, monochrome, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#000000` · `#d4d4d8` · `#71717a` · `#09090b` · `#a1a1aa` · `#050505` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Montserrat
- **Scale (largest breakpoint):** h1 160px · h2 128px · h3 36px · body 18px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-[1920px]`, `max-w-6xl`
- **Section padding:** `py-32`, `py-64`
- **Common gaps:** `gap-10`, `gap-12`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center border border-white/20 text-white px-12 py-5 text-xs font-display tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large white serif, with full stops kept.
- **Do:** Use an outlined rectangle for the main action and a plain tracked text link beside it.
- **Do:** Keep navigation small, tracked uppercase and translucent over the hero.
- **Don't:** Don't add colour; the page is black, white and grey.
- **Don't:** Don't set the headline in sans; the serif is the signature.
- **Don't:** Don't crowd the headline with imagery or icons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
