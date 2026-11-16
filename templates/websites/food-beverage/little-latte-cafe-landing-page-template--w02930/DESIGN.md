# Design system — Little Latte Cafe Landing Page Template

`SN-W02930` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet, typographic cafe page on a warm off-white ground (#efeee6) with near-black (#252525) type. Headlines are large, uppercase, tightly set sans with almost no decoration. The only shape language is a circular outline button and a small diamond logo mark, so whitespace and type carry the page.

**Mood:** minimal, calm, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efeee6` | Page ground |
| Text | `#252525` | Headings and primary copy |
| Border | `#252525` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#252525` · `#efeee6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 60px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[112rem]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-12`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex h-12 items-center justify-center border border-[#252525] px-8 text-xs uppercase tracking-tight hover:bg-[#252525] hover:text-[#efeee6]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Menu list (`menu-list`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #efeee6;
  --color-text: #252525;
  --color-border: #252525;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efeee6',
    ink: '#252525',
    line: '#252525',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in large uppercase sans with tight leading
- **Do:** Use outline-only buttons in near-black (#252525) with no fill
- **Do:** Keep the ground at off-white (#efeee6) and leave generous space between blocks
- **Don't:** Don't add shadows or gradients; the style is flat
- **Don't:** Don't introduce a second typeface for headings
- **Don't:** Don't fill buttons with colour; outlines are the button style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
