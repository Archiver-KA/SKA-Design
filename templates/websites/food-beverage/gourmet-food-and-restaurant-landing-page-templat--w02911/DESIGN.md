# Design system — Gourmet Food & Restaurant Landing Page Template

`SN-W02911` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A saturated lime-green hero with a swirled, marbled texture behind a huge white sans wordmark that bleeds off both edges. A white pill nav floats over the top, with a dark forest-green pill (#234220) as the call to action, and product photography is set in a rounded panel below. The stance is bold and food-brand loud, with the wordmark sized to crop.

**Mood:** bold, food-brand, saturated, cropped, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f4eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#234220` | Primary action and highlights |
| Second accent | `#234220` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e85424` · `#000000` · `#78350f` · `#234220` · `#f7f4eb` · `#6ab3e8` · `#fef9c3` · `#fef08a` · `#9695d2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 176px · h2 72px · h3 20px · body 14px
- **Weights in use:** semibold, medium, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-y-3`, `gap-4`, `gap-y-12`

**Primary button**

```html
<a class="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f4eb;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #234220;
  --color-accent-2: #234220;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f4eb',
    surface: '#ffffff',
    ink: '#000000',
    line: '#000000',
    accent: '#234220',
    accent2: '#234220',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in heavy white sans, sized so it bleeds off the edges.
- **Do:** Use dark forest green (#234220) for the primary pill button on the lime hero.
- **Do:** Keep product photos in rounded panels below the hero.
- **Don't:** Don't put white text on light cream areas; the hero works only on the lime field.
- **Don't:** Don't use orange (#e85424) for buttons; the buttons are dark forest green.
- **Don't:** Don't add extra colours to the hero; lime, white and forest green are enough.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
