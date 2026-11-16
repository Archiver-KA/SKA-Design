# Design system — Fragaria Gourmet E-commerce Template

`SN-W01165` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, berry-red food page sits on near-white with a faint dotted texture behind the hero. The headline is large and heavy black sans, and one phrase, king of, is coloured in the rose accent (#f43f5e), the single emphasis of the hero. Buttons are pills: a solid rose primary and a light outline secondary, while the header order button is black.

**Mood:** bold, juicy, fresh, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#f43f5e` · `#fafafa` · `#e4e4e7` · `#f4f4f5` · `#3f3f46` · `#e11d48` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-zinc-900 hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 hover:shadow-lg hover:shadow-zinc-900/40 hover:-translate-y-0.5 duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour one phrase per headline in the rose (#f43f5e), such as king of.
- **Do:** Use the solid rose pill for the subscription action and keep the secondary as a light outline.
- **Do:** Keep the faint dot texture behind the hero only.
- **Don't:** Don't use the rose for large fills; it is for one phrase and the primary button.
- **Don't:** Don't set the headline in a light weight; it is heavy black sans.
- **Don't:** Don't turn the black header order button rose; it is the header's contrast point.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
