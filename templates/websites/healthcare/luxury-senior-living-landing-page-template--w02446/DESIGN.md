# Design system — Luxury Senior Living Landing Page Template

`SN-W02446` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A pale, airy hero where a photograph of a house is washed with white, and navy (#1e3a8a) carries the headline and the primary button. The serif headline pairs a roman navy line with a lighter blue italic line, and the body is slate grey in Inter. Blue is the only colour family, and the pale wash keeps the page quiet and reassuring.

**Mood:** reassuring, airy, clean, traditional, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Border | `#dbeafe` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#1e3a8a` · `#ffffff` · `#93c5fd` · `#dbeafe` · `#06b6d4` · `#eff6ff` · `#bfdbfe` · `#3b82f6` · `#0891b2` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-8 py-3.5 text-sm font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-border: #dbeafe;
  --color-accent: #1e3a8a;
  --color-accent-2: #3b82f6;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#475569',
    line: '#dbeafe',
    accent: '#1e3a8a',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button in navy (#1e3a8a) with white text
- **Do:** Pair a navy roman headline line with a lighter blue italic line
- **Do:** Keep the hero photograph under a white wash so the text reads clearly
- **Don't:** Don't set text in saturated cyan (#06b6d4); keep it for small accents
- **Don't:** Don't add hard shadows to cards; the layout is flat
- **Don't:** Don't set body copy in pure black; use the slate grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
