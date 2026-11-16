# Design system — Artisanal Jewelry E-commerce Landing Page Template

`SN-W01093` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A luxury dark storefront on near-black (#050505), with a white serif headline whose second line is set in a gold italic. Jewellery photography sits on black with soft light, and gold is kept for the headline accent and the one call to action. Hairline borders on buttons and nav tags give a restrained, jewellery-box finish.

**Mood:** luxurious, dark, restrained, elegant, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#000000` · `#d4d4d8` · `#171717` · `#0a0a0a` · `#e4e4e7` · `#52525b` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_10px_rgba(212,175,55,0.8)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="whitespace-nowrap px-4 py-1.5 rounded-full bg-transparent text-zinc-400 hover:text-white text-xs font-medium border border-white/10 hover:border-white/30 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Awards / press (`awards-press`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold italic (#d4af37)
- **Do:** Use gold outlines for primary buttons, not gold fills
- **Do:** Keep product photography on black with soft, directional light
- **Don't:** Don't use gold for body text
- **Don't:** Don't fill buttons solid gold
- **Don't:** Don't add bright colours to the jewellery photography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
