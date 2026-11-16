# Design system — Eddie Solutions Agency Landing Page Template

`SN-W01560` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A warm cream ground (#e8e8e6) with a large soft orange glow behind a dark phone mockup, which anchors the hero as the visual centre. The headline pairs a heavy sans with one italic serif line for the emotional phrase, an editorial contrast that adds warmth. Dark navy UI panels and white dots carry the palette through the composition.

**Mood:** warm, editorial, soft, contrasting, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e8e6` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#000000` · `#6b7280` · `#4b5563` · `#f3f4f6` · `#1f2937` · `#e5e7eb` · `#efeae5` · `#d1c8c0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display, Brush Script MT
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Team (`team`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8e8e6;
  --color-surface: #1f2937;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e8e6',
    surface: '#1f2937',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans with one italic serif line for emphasis
- **Do:** Place the dark phone mockup over the orange glow as the hero image
- **Do:** Keep the page ground in warm cream (#e8e8e6) with black type
- **Don't:** Don't turn the cream ground dark; the page is designed light
- **Don't:** Don't use the italic serif for body copy, only for one headline phrase
- **Don't:** Don't add hard shadows around the phone; the glow does the lifting

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
