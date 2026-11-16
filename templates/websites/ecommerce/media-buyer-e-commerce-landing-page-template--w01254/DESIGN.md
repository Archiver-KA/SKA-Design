# Design system — Media Buyer E-commerce Landing Page Template

`SN-W01254` · ecommerce · dark mode · Sinera Atlas theme `market` · language `uk`

## Direction

A dark performance-marketing hero on near-black with a soft indigo glow behind the centre. The large white sans headline is in Ukrainian, with the phrase Meta Ads in lavender as the single accent word. A small outlined pill above carries the offer, and one white solid button sits centred under a grey subhead.

**Mood:** confident, dark, performance, indigo-lit

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#a1a1aa` · `#18181b` · `#71717a` · `#6366f1` · `#09090b` · `#d4d4d8` · `#818cf8` · `#a5b4fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_10px_rgba(99,102,241,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Pricing (`pricing`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #27272a;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#27272a',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour one key phrase per headline in the lavender accent (#818cf8)
- **Do:** Keep the indigo glow behind the hero as a soft radial, not a flat fill
- **Do:** Use one white solid button in the centre as the main call to action
- **Don't:** Don't fill any section with solid indigo; the indigo is a glow
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't left-align the hero; it is centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
