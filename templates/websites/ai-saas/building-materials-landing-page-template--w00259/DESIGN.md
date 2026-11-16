# Design system — Building Materials Landing Page Template

`SN-W00259` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, clean building-brand hero: a blue-to-grey gradient ground with large white Inter headlines, the final line underlined in yellow (#ffcd05). The primary button is solid blue (#0359a7) with a ghost secondary beside it, and a row of white stats sits along the bottom edge. Yellow appears only as the underline and blue carries the actions, so the page reads as confident and structured.

**Mood:** bold, solid, structured, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f8fc` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0359a7` | Primary action and highlights |
| Second accent | `#ffcd05` | Supporting highlights |

Palette by frequency of use: `#0359a7` · `#ffffff` · `#ffcd05` · `#6b7280` · `#000000` · `#e2e8f0` · `#f5f8fc` · `#9ca3af` · `#e8f2ff` · `#4a5568`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** light, semibold, extrabold
- **Letter spacing:** `tracking-[0.15em]`, `tracking-[0.08em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-[0_4px_16px_rgba(3,89,167,0.1)]`, `shadow-[0_8px_32px_rgba(3,89,167,0.08)]`, `shadow-[0_16px_48px_rgba(3,89,167,0.14)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#0359a7] text-white px-6 py-2.5 rounded-[10px] font-inter font-medium text-sm shadow-[0_0_0_0_rgba(3,89,167,0.4)] hover:bg-[#024d95] hover:shadow-[0_0_0_6px_rgba(3,89,167,0.15)] hover:-translate-y-[1px] transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Product grid (`product-grid`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Marquee (`marquee`)
8. Logo cloud (`logo-cloud`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f8fc;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #0359a7;
  --color-accent-2: #ffcd05;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f8fc',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#0359a7',
    accent2: '#ffcd05',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#0359a7) for the primary button and stat accents
- **Do:** Underline the final headline line in yellow (#ffcd05) as the one highlight
- **Do:** Set the stat row in white at the bottom of the hero over the gradient
- **Don't:** Don't use yellow for buttons or large fills; it is an underline colour
- **Don't:** Don't flatten the hero to light grey; the ground is the blue-grey gradient
- **Don't:** Don't put the stat row into a card; it sits on the gradient

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
