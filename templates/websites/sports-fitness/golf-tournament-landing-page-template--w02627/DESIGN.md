# Design system — Golf Tournament Landing Page Template

`SN-W02627` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A tournament hero pairing an editorial serif with navy and red. A landscape photograph of rolling links sits under a deep navy top bar, and a white Playfair Display headline reads 'Returning to' in italic above a roman 'Dundonald'. White countdown numerals sit below, and two red buttons carry the calls to action. Navy frames the page and red is the only action colour.

**Mood:** editorial, event-led, navy, classic, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f2f2f2` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec2224` | Primary action and highlights |
| Second accent | `#003257` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec2224` · `#003257` · `#555555` · `#f2f2f2` · `#333333` · `#666666` · `#000000` · `#999999` · `#c9191b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#ec2224] text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#c9191b] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Timeline (`timeline`)
7. Newsletter signup (`newsletter`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f2f2f2;
  --color-text: #333333;
  --color-muted: #555555;
  --color-border: #ffffff;
  --color-accent: #ec2224;
  --color-accent-2: #003257;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f2f2f2',
    ink: '#333333',
    muted: '#555555',
    line: '#ffffff',
    accent: '#ec2224',
    accent2: '#003257',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the event headline in Playfair Display, with the first line in italic.
- **Do:** Use red (#ec2224) for the ticket buttons only.
- **Do:** Keep navy (#003257) for the header bar and the frame, not for body text.
- **Don't:** Don't set body copy in Playfair Display; it is for headlines only.
- **Don't:** Don't use red for the countdown numerals.
- **Don't:** Don't place the countdown over a light background; it reads white over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
