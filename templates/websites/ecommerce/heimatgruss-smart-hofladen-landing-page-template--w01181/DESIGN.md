# Design system — Heimatgruss Smart Hofladen Landing Page Template

`SN-W01181` · ecommerce · light mode · Sinera Atlas theme `market` · language `de`

## Direction

A calm, tactile farm-shop page on a warm stone ground (#ded3c4) with dark brown-black text (#2a2622). The headline is a heavy sans in two tones, a dark first line and a muted taupe second line, and small white tags float over the hero like labels on produce. A phone-shaped card with a dark pill label carries the scan-to-enter idea, and green appears only as a status dot.

**Mood:** calm, tactile, local, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ded3c4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2a2622` | Headings and primary copy |
| Border | `#2a2622` | Hairlines, dividers, outlines |
| Accent | `#2a2622` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#2a2622` · `#ded3c4` · `#ffffff` · `#e5e7eb` · `#efeadd` · `#b5aa9d` · `#22c55e` · `#16a34a` · `#dcfce7` · `#bbf7d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ded3c4;
  --color-surface: #ffffff;
  --color-text: #2a2622;
  --color-border: #2a2622;
  --color-accent: #2a2622;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ded3c4',
    surface: '#ffffff',
    ink: '#2a2622',
    line: '#2a2622',
    accent: '#2a2622',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on the warm stone ground (#ded3c4) and set text in #2a2622.
- **Do:** Use the dark (#2a2622) pill for the primary action and for labels on the phone-shaped card.
- **Do:** Set the second headline line in muted taupe to create two-tone emphasis.
- **Don't:** Don't use white backgrounds for sections; the stone ground carries the page.
- **Don't:** Don't use green for buttons; green marks live status only.
- **Don't:** Don't drop the floating white tags; they are the page's signature detail.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
