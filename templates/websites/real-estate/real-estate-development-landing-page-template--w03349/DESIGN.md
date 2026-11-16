# Design system — Real Estate Development Landing Page Template

`SN-W03349` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A traditional estate-agency hero on a deep green ground (#0b1c18), with a centred white serif headline over a short paragraph and a gold-toned primary button beside an outlined secondary button. A small uppercase label sits above the title and the nav is a thin strip in the same green. Below the hero the page switches to a warm cream ground (#f5f2eb), and the two grounds meet in a hard edge.

**Mood:** heritage, dark, calm, dependable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0b1c18` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#f5f2eb` · `#0b1c18` · `#132a24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Montserrat
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-heritage-900/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="bg-bronze-500 text-heritage-900 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-heritage-900 transition-all duration-300 inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Bento grid (`bento-grid`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Listings (`listings`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f2eb;
  --color-surface: #ffffff;
  --color-text: #0b1c18;
  --color-border: #ffffff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2eb',
    surface: '#ffffff',
    ink: '#0b1c18',
    line: '#ffffff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep green (#0b1c18) with white serif headlines
- **Do:** Use the gold-toned button for the primary action and an outlined button for the secondary action
- **Do:** Switch to cream (#f5f2eb) for content sections below the hero
- **Don't:** Don't set body copy in white on the cream sections
- **Don't:** Don't use the green as a background for long text blocks
- **Don't:** Don't add bright colours; the palette is green, cream and gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
