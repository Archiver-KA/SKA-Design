# Design system — Strategic Conference Landing Page Template

`SN-W03651` · events · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A dark, navy summit page with a large sans-serif headline in white, where the closing phrase is set in a lighter, soft blue. A small uppercase date label sits above it, with a thin divider under the headline and a short paragraph in light grey beneath. The product preview is a dark rounded panel on the right, and the page builds depth from navy tones rather than bright colour.

**Mood:** premium, dark, focused, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#152036` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#152036` | Supporting highlights |

Palette by frequency of use: `#fbbf24` · `#ffffff` · `#f3f4f6` · `#152036` · `#e5e7eb` · `#111827` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_12px_32px_-12px_rgba(37,99,235,0.2)]`, `shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="magnetic hidden sm:inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--primaryHover)] text-white text-xs font-normal px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_24px_rgba(37,99,235,0.5)] absolute sm:relative right-4 sm:right-0">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #152036;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #fbbf24;
  --color-accent-2: #152036;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#152036',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#fbbf24',
    accent2: '#152036',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans-serif in white, with the closing phrase in soft blue
- **Do:** Keep the page ground deep navy (#152036) and separate panels with subtle borders
- **Do:** Use the blue only for the primary button and highlighted phrase
- **Don't:** Don't use white as the page background
- **Don't:** Don't set the headline in a serif
- **Don't:** Don't use a large yellow fill anywhere on the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
