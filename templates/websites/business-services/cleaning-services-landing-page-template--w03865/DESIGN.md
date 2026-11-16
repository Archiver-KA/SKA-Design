# Design system — Cleaning Services Landing Page Template

`SN-W03865` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, light page on cream (#faf8f4) with a dark serif headline whose second line is set in italic sage green (#7a9e7e). The contrast between heavy roman and light italic carries the design. The hero uses wide margins and a pale, faded panel behind the copy, and sans-serif body text stays small and quiet.

**Mood:** calm, refined, soft, editorial, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf8f4` | Page ground |
| Surface | `#1c1c1c` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1c1c1c` | Secondary copy, captions |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |
| Accent | `#7a9e7e` | Primary action and highlights |

Palette by frequency of use: `#1c1c1c` · `#7a9e7e` · `#faf8f4` · `#5a5a5a` · `#e8ede9` · `#ffffff` · `#e0e5e1` · `#d8ddd9` · `#efece6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Lato
- **Loaded families:** Cormorant Garamond, Lato
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center min-h-[44px] px-6 py-2 bg-[#1C1C1C] text-[#FAF8F4] text-sm tracking-wide hover:bg-[#7A9E7E] transition-colors duration-300 z-10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf8f4;
  --color-surface: #1c1c1c;
  --color-text: #111111;
  --color-muted: #1c1c1c;
  --color-border: #1c1c1c;
  --color-accent: #7a9e7e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf8f4',
    surface: '#1c1c1c',
    ink: '#111111',
    muted: '#1c1c1c',
    line: '#1c1c1c',
    accent: '#7a9e7e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond with the second line in italic
- **Do:** Keep the sage green (#7a9e7e) to the italic headline phrase only
- **Do:** Use cream (#faf8f4) as the page ground, not pure white
- **Don't:** Don't set headlines in sans-serif; the serif is the identity
- **Don't:** Don't use hard black borders; separation comes from soft tone changes
- **Don't:** Don't set body copy in the display face; Lato carries the text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
