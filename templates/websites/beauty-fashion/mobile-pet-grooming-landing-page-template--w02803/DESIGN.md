# Design system — Mobile Pet Grooming Landing Page Template

`SN-W02803` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean, friendly service page on white. The hero headline is a heavy geometric sans in near-black, stacked over three lines, with a regular-weight paragraph and a solid near-black button. The right side is a tall rounded panel in pale mint (#e5f5f0) with soft edges, awaiting a photograph, and a soft mint glow sits behind it. Mint is the friendly colour, while the type and button stay dark.

**Mood:** friendly, clean, soft, modern, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5f5f0` | Cards, panels, raised areas |
| Text | `#3e3e3e` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#232120` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3e3e3e` · `#8dd9bf` · `#232120` · `#2d765d` · `#000000` · `#111111` · `#e5f5f0` · `#e6e1dc` · `#c9c9c9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 17px
- **Weights in use:** light, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_8px_30px_rgba(0,0,0,0.02)]`, `shadow-[0_8px_40px_rgba(0,0,0,0.06)]`, `shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex h-10 items-center justify-center rounded-full bg-[#232120] px-6 text-xs font-bold tracking-wider uppercase text-white transition-all hover:bg-black hover:shadow-[0_0_20px_rgba(35,33,32,0.3)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5f5f0;
  --color-text: #3e3e3e;
  --color-border: #ffffff;
  --color-accent: #232120;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5f5f0',
    ink: '#3e3e3e',
    line: '#ffffff',
    accent: '#232120',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy geometric sans, stacked on three lines, in near-black (#232120).
- **Do:** Use the pale mint (#e5f5f0) for rounded image panels with soft edges.
- **Do:** Use a solid near-black button with white text as the primary action.
- **Don't:** Don't use the mint (#8dd9bf) as a button fill; contrast with white is too low.
- **Don't:** Don't use hard-edged rectangles for image panels.
- **Don't:** Don't set the paragraph in pure black; it is dark grey (#3e3e3e).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
