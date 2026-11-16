# Design system — Vintage Fashion E-commerce Template

`SN-W01340` · ecommerce · dark mode · Sinera Atlas theme `market` · language `id`

## Direction

A formal, archival hero on deep teal-navy (#081a21) with a faint diamond pattern across the ground. A centred dark panel framed by a thin gold line (#c4a777) holds an uppercase serif title in cream and an italic subtitle, so the gold appears only as a border and divider. A cream navigation bar at the top is the one light band, giving the page a museum-catalogue quality.

**Mood:** archival, formal, nostalgic, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#081a21` | Page ground |
| Surface | `#06141a` | Cards, panels, raised areas |
| Text | `#e6dfd1` | Headings and primary copy |
| Border | `#f4f0e6` | Hairlines, dividers, outlines |
| Accent | `#c4a777` | Primary action and highlights |

Palette by frequency of use: `#c4a777` · `#081a21` · `#f4f0e6` · `#e6dfd1` · `#06141a` · `#051116`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="absolute -top-20 right-0 md:-top-28 md:right-0 bg-[#06141a] border border-[#c4a777]/30 hover:border-[#c4a777] text-[#c4a777] p-3 transition-colors group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #081a21;
  --color-surface: #06141a;
  --color-text: #e6dfd1;
  --color-border: #f4f0e6;
  --color-accent: #c4a777;
  --font-display: "a serif face", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#081a21',
    surface: '#06141a',
    ink: '#e6dfd1',
    line: '#f4f0e6',
    accent: '#c4a777',
  },
  fontFamily: { display: ['a serif face'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground deep teal-navy (#081a21) with a faint diamond texture
- **Do:** Frame the title panel with a thin gold line (#c4a777) and use gold only for borders and dividers
- **Do:** Set titles in an uppercase serif in cream (#e6dfd1) with an italic subtitle beneath
- **Don't:** Don't fill buttons or panels with gold; it is a line colour here
- **Don't:** Don't introduce bright colours; the palette stays teal, cream and gold
- **Don't:** Don't put the navigation on the dark ground; it stays on the cream bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
