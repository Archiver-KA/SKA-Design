# Design system — AI Marketing Agency Landing Page Template

`SN-W01416` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light page on [#fafafa] with a large serif headline in near-black, where 'Intelligent' takes the same rose-to-orange gradient as the sibling page, and the trailing lines are plain. The hero pairs the copy with a black-and-white photograph of two people in a card with a small stats panel over it. A dark solid button holds the primary action and a text link sits beside it.

**Mood:** monochrome, editorial, light, measured, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#111827` · `#9ca3af` · `#ffffff` · `#e11d48` · `#e5e7eb` · `#f3f4f6` · `#6b7280` · `#f43f5e` · `#f9fafb` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`, `shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="bg-gray-900 text-white text-xs px-5 py-2.5 rounded-full hover:bg-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. About (`about`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #e11d48;
  --color-accent-2: #f97316;
  --font-display: "Instrument Serif", serif;
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
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#e11d48',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in the rose-to-orange gradient (#e11d48 to #f97316) and keep the rest near-black.
- **Do:** Keep the hero photography black and white, so the rose accent is the only colour.
- **Do:** Use a near-black solid button for the primary action and a text link for the secondary.
- **Don't:** Don't put colour photography in the hero; the look is monochrome with one accent.
- **Don't:** Don't set the headline in Inter; it is a serif.
- **Don't:** Don't use the gradient on body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
