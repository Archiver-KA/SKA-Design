# Design system — Architecture Portfolio Landing Page Template

`SN-W01803` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Minimal editorial on a warm off-white ground (#f5f5f0), with a large black serif headline where the word Beyond is set in grey italic. Hairline frames and a thin circle sit behind stacked white panels that read like paper samples. Colour is absent; black and warm grey carry the page.

**Mood:** minimal, editorial, quiet, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#d1d1cb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#d1d1cb` · `#f5f5f0` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope, Space Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 24px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="hidden md:block px-4 py-2 border border-txt-primary hover:bg-txt-primary hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f0;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #d1d1cb;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f0',
    surface: '#ffffff',
    ink: '#000000',
    line: '#d1d1cb',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the main headline large in black serif with one italic grey word
- **Do:** Build cards from white paper-like panels with hairline borders
- **Do:** Keep the page to black and warm grey with no accent colour
- **Don't:** Don't add heavy drop shadows; depth comes from hairline borders
- **Don't:** Don't set headlines in a bold sans; it breaks the editorial voice
- **Don't:** Don't introduce a colour accent beyond the warm neutrals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
