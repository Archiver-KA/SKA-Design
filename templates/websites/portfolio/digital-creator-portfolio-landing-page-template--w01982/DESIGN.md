# Design system — Digital Creator Portfolio Landing Page Template

`SN-W01982` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Warm dark hero: a near-black ground with soft amber and violet glows behind a large sans name, where the first name is set in an amber gradient that fades toward white in the surname. A small pill badge, a light subtitle and two buttons sit below. Amber is the only accent colour, and it is used on the name rather than on the buttons.

**Mood:** warm, glowing, confident, dark, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#94a3b8` · `#fbbf24` · `#64748b` · `#c084fc` · `#22d3ee` · `#cbd5e1` · `#a855f7` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(168,85,247,0.2)]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-black bg-white rounded-full hover:bg-amber-400 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #555555;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #c084fc;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#555555',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the name in a large sans with an amber (#fbbf24) to white gradient
- **Do:** Keep the buttons as one solid white and one dark outline
- **Do:** Place soft glows behind the hero, never behind body copy
- **Don't:** Don't use amber for buttons; it is reserved for the name
- **Don't:** Don't add hues beyond the amber and violet glows
- **Don't:** Don't move to a light background; the page is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
