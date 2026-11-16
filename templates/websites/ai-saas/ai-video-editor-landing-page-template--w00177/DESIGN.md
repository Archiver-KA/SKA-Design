# Design system — AI Video Editor Landing Page Template

`SN-W00177` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Warm beige page (#e3ddd7) with a heavy sans-serif headline in near-black, and a second line in italic serif that gives the hero an editorial voice. The primary button is solid near-black, and a dark phone mockup carries a yellow highlight in its caption. Soft dots float in the background as decoration.

**Mood:** warm, editorial, modern, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e3ddd7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#000000` · `#6b7280` · `#4b5563` · `#1f2937` · `#efeae5` · `#d1c8c0` · `#22c55e` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Comparison (`comparison`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e3ddd7;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #111827;
  --color-accent-2: #facc15;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e3ddd7',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#111827',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in heavy sans-serif and the second line in italic serif
- **Do:** Use the near-black button (#111827) for the primary action
- **Do:** Keep the beige ground (#e3ddd7) and place the dark phone mockup against it
- **Don't:** Don't use a cool grey or white ground; the warmth is part of the look
- **Don't:** Don't use the yellow (#facc15) beyond small caption highlights
- **Don't:** Don't drop the italic serif; it is the softer element against the heavy sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
