# Design system — Lune Custom Cakes Landing Page Template

`SN-W02080` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm, editorial bakery template where a cream ground [#f5f2ee] meets a blush panel [#f2dfdb] behind the hero, so colour arrives in large soft blocks rather than accents. Headlines pair an uppercase sans with a Cormorant Garamond italic on the key phrase, giving a romantic, handcrafted tone. Cake photography supplies the colour, and the interface stays in near-black type.

**Mood:** warm, editorial, romantic, handcrafted, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2ee` | Page ground |
| Surface | `#f2dfdb` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#5a5a5a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#dfd3c5` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#f5f2ee` · `#5a5a5a` · `#dfd3c5` · `#6b6b6b` · `#f2dfdb` · `#a3a3a3` · `#8a8a8a` · `#000000` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Jost
- **Loaded families:** Cormorant Garamond, Jost
- **Scale (largest breakpoint):** h2 64px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[#dfd3c5]/20`
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="hidden lg:flex items-center gap-3 bg-[#1a1a1a] text-[#f5f2ee] px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#333] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f2ee;
  --color-surface: #f2dfdb;
  --color-text: #1a1a1a;
  --color-muted: #5a5a5a;
  --color-border: #1a1a1a;
  --color-accent: #dfd3c5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Jost", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2ee',
    surface: '#f2dfdb',
    ink: '#1a1a1a',
    muted: '#5a5a5a',
    line: '#1a1a1a',
    accent: '#dfd3c5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Mix an uppercase sans heading with a Cormorant Garamond italic on one phrase per headline.
- **Do:** Let photography carry the colour and keep UI text in #1a1a1a on cream.
- **Do:** Crop hero images into arch shapes and place rounded-full pill buttons over them.
- **Don't:** Don't use saturated accent colours; the palette stays in cream, blush and beige.
- **Don't:** Don't set body copy in the serif display face; it is for headlines only.
- **Don't:** Don't remove the blush panel behind the hero; it is the main colour block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
