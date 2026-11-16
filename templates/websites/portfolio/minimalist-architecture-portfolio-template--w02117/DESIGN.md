# Design system — Minimalist Architecture Portfolio Template

`SN-W02117` · portfolio · light mode · Sinera Atlas theme `workshop` · language `vi`

## Direction

A minimalist architecture studio page on a pale warm ground [#f7f7f4], with a dark serif headline over two lines, the second line dimmed to grey. A short paragraph sits in a narrow column to the right, and a wide grey image panel [#deded8] fills the lower part of the first screen. Small uppercase labels and a thin underlined text link carry the rest of the hierarchy.

**Mood:** minimal, airy, architectural, calm, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f4` | Page ground |
| Surface | `#deded8` | Cards, panels, raised areas |
| Text | `#161616` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#deded8` · `#171717` · `#f7f7f4` · `#161616` · `#f4f4ef` · `#d7d7d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Mono
- **Body:** DM Mono
- **Loaded families:** DM Mono, Manrope
- **Scale (largest breakpoint):** h2 48px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-[-0.03em]`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[90rem]`, `max-w-5xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="mt-8 inline-flex items-center gap-4 bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f4;
  --color-surface: #deded8;
  --color-text: #161616;
  --color-border: #000000;
  --font-display: "DM Mono", sans-serif;
  --font-body: "DM Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f4',
    surface: '#deded8',
    ink: '#161616',
    line: '#000000',
  },
  fontFamily: { display: ['DM Mono'], sans: ['DM Mono'] },
} }
```

## Do and don't

- **Do:** Set the headline in a dark serif, with the second line dimmed to grey.
- **Do:** Place a short paragraph in a narrow right column, aligned to the headline.
- **Do:** Use a thin underlined text link as the primary action rather than a button.
- **Don't:** Don't add colour; the page is off-white, grey and black.
- **Don't:** Don't fill the image area with a colour block; it is meant for photography.
- **Don't:** Don't set the nav in bold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
