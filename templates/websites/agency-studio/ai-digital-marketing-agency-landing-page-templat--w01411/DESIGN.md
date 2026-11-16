# Design system — AI Digital Marketing Agency Landing Page Template

`SN-W01411` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a deep indigo-violet (#1800ad) used for the key word in the headline, the primary button and a glow behind the chart panel. The headline is a heavy sans in white set in three short lines, with the last word in indigo. The right side holds a dark dashboard card with a rising line chart and three stat figures, so the page reads as an analytics product.

**Mood:** analytical, bold, dark, indigo-led, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1800ad` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1800ad` · `#71717a` · `#a1a1aa` · `#000000` · `#52525b` · `#d4d4d8` · `#120085` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_3px_#1800ad]`, `shadow-lg`, `shadow-[0_0_30px_-10px_#1800ad]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:block px-4 py-2 text-xs font-medium text-white bg-[#1800ad] hover:bg-[#120085] transition-colors rounded-full shadow-[0_0_15px_-5px_#1800ad]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. Services (`services`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Logo cloud (`logo-cloud`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #1800ad;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#1800ad',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline and the primary button in indigo (#1800ad).
- **Do:** Keep the dashboard card dark, with one rising line chart and three stat figures.
- **Do:** Use a heavy sans for the headline in white, set in short lines.
- **Don't:** Don't use indigo for body text; it is for the highlight and the button.
- **Don't:** Don't add a light section; the page is black from top to bottom.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
