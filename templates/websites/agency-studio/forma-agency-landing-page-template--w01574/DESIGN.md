# Design system — Forma Agency Landing Page Template

`SN-W01574` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#0e0e0e) with very large uppercase white headlines stacked on two lines, and a thin grid of hairline rules drawn across the first screen. Small text and client names sit at the edges, leaving most of the screen as dark space. The look is stark and architectural, kept clean by the rules and strict alignment rather than by ornament.

**Mood:** stark, architectural, grid-led, monochrome, large

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e0e0e` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0e0e0e` · `#f5f5f5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 112px · h3 36px · body 18px
- **Weights in use:** normal, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1440px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-48`
- **Common gaps:** `gap-6`, `gap-8`, `gap-5`

**Primary button**

```html
<a class="w-full flex items-center justify-between p-6 md:p-8 uppercase font-normal text-base hover:bg-black/5 transition-colors h-full md:h-auto md:border-y border-line">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0e0e0e;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e0e0e',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase at display size, stacked on two lines
- **Do:** Use hairline rules to divide the grid rather than filled boxes
- **Do:** Keep the ground near-black (#0e0e0e) with white type
- **Don't:** Don't add rounded containers; the grid is square and ruled
- **Don't:** Don't introduce colour; the page is monochrome
- **Don't:** Don't set headlines in mixed case; the hero is all capitals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
