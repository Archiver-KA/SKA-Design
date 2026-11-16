# Design system — Gem Coaching - The Climb

`SN-W03475` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

An editorial coaching page on a warm cream ground (#f6f1ea) with a large Cormorant Garamond headline in near-black (#121212), set in roman with an italic second line. Body copy is set in Plus Jakarta Sans at a comfortable measure. A thin rule and generous margins separate the hero from the rest, and the layout feels calm and unhurried.

**Mood:** calm, editorial, warm, unhurried, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f1ea` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#121212` | Headings and primary copy |
| Border | `#121212` | Hairlines, dividers, outlines |
| Accent | `#b76e79` | Primary action and highlights |
| Second accent | `#d4c4a8` | Supporting highlights |

Palette by frequency of use: `#121212` · `#b76e79` · `#f6f1ea` · `#ffffff` · `#cfc8be` · `#fbf9f6` · `#d4c4a8` · `#000000` · `#333333` · `#d5c4a8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cormorant Garamond, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-[#121212] text-[#F6F1EA] text-xs font-medium tracking-widest uppercase px-8 py-4 hover:bg-[#B76E79] transition-all duration-500 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Pricing (`pricing`)
7. Team (`team`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f1ea;
  --color-surface: #333333;
  --color-text: #121212;
  --color-border: #121212;
  --color-accent: #b76e79;
  --color-accent-2: #d4c4a8;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f1ea',
    surface: '#333333',
    ink: '#121212',
    line: '#121212',
    accent: '#b76e79',
    accent2: '#d4c4a8',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond with an italic second line
- **Do:** Keep the ground in warm cream (#f6f1ea) and the text in near-black (#121212)
- **Do:** Separate sections with a thin rule and wide margins
- **Don't:** Don't use bold weights on the serif headlines
- **Don't:** Don't use bright colours; the palette stays cream and ink
- **Don't:** Don't crowd the hero with extra badges or banners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
