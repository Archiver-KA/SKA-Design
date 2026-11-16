# Design system — Pridor

`SN-W01306` · ecommerce · dark mode · Sinera Atlas theme `market` · language `fr`

## Direction

A deep bottle-green concept-store page (#021f15) with a centred white Playfair Display headline, and an italic second line in muted gold. A small letter-spaced uppercase eyebrow sits above the headline, and a hairline separates the header from the hero. The primary action is a filled gold pill, so the page reads as a boutique with one warm highlight.

**Mood:** boutique, elegant, dark, ceremonial, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#021f15` | Page ground |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#6b7280` · `#d1d5db` · `#1f2937` · `#021f15` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium tracking-wide text-pridor-emerald bg-pridor-gold rounded-full overflow-hidden transition-all hover:bg-pridor-gold-light hover:scale-105 duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #021f15;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#021f15',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, white, with the italic second line in gold
- **Do:** Use the filled gold pill for the primary action only
- **Do:** Keep the eyebrow line small, uppercase and letter-spaced in muted gold
- **Don't:** Don't use a light page background; the ground is deep green
- **Don't:** Don't set body copy in a serif; Inter carries the paragraphs
- **Don't:** Don't add more than one gold element to a section besides the button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
