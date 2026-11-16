# Design system — Luxury Padel Club Landing Page Template

`SN-W02652` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The first screen is a full-bleed deep green (#004225) splash with one centred cream wordmark in a light geometric sans. The page opens on that splash and then moves into content. The palette pairs the green with warm cream (#f7f1e5) and an orange (#d96c06) accent for calls to action. Colour is carried by large fields rather than detail, which feels premium and restrained.

**Mood:** premium, minimal, earthy, confident, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f1e5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d96c06` | Primary action and highlights |
| Second accent | `#004225` | Supporting highlights |

Palette by frequency of use: `#d96c06` · `#004225` · `#f7f1e5` · `#ffffff` · `#f2ece1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Raleway
- **Loaded families:** Montserrat, Raleway, Cormorant Garamond
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_15px_rgba(217,108,6,0.8)]`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Marquee (`marquee`)
4. About (`about`)
5. Feature grid (`features`)
6. Team (`team`)
7. Pricing (`pricing`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f1e5;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #d96c06;
  --color-accent-2: #004225;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Raleway", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f1e5',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#d96c06',
    accent2: '#004225',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Raleway'] },
} }
```

## Do and don't

- **Do:** Keep the opening screen as a solid #004225 field with one centred wordmark.
- **Do:** Use the cream (#f7f1e5) as the content ground and the green for large sections.
- **Do:** Reserve the orange (#d96c06) for primary buttons and one highlight per section.
- **Don't:** Don't add imagery to the splash screen; the wordmark is the only element.
- **Don't:** Don't put orange text on the green field.
- **Don't:** Don't use pure white sections next to the cream without a border or change of tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
