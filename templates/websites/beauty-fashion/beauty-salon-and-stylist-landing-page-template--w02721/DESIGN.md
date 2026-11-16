# Design system — Beauty Salon & Stylist Landing Page Template

`SN-W02721` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Independent salon page with a white navigation bar above a full-bleed, rounded photograph of a salon interior. The headline is a large white serif, centred over the photo, with a smaller serif subline below, and the buttons are outlined pills overlaid on the image. There is no accent colour, so the page relies on the photograph, the serif and the calm framing.

**Mood:** warm, photographic, classic, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#1b120d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Hedvig Letters Serif, Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-secondary text-foreground px-5 py-2.5 rounded-full text-sm font-normal hover:bg-secondary/80 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Team (`team`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #ffffff;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Frame the hero photograph as a large rounded panel below a plain white nav.
- **Do:** Set the centred headline in a white serif over the photograph, with a darker overlay for contrast.
- **Do:** Use outlined pill buttons over the photograph, one of them with a small round icon.
- **Don't:** Don't set headlines in sans; the serif is used throughout.
- **Don't:** Don't add a colour accent to the hero; the palette here is black and white.
- **Don't:** Don't place the headline over a bright part of the photograph without an overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
