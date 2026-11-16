# Design system — Renewable Energy Services Landing Page Template

`SN-W04075` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A restrained layout built on a near-black hero field beneath a light grey navigation bar. The brand mark is a green rounded square (#22c55e) beside a dark sans wordmark, and the one solid call to action is a black pill button. Slide markers at the foot of the hero suggest a rotating showcase, with the emphasis on empty space and a quiet frame.

**Mood:** restrained, minimal, quiet, spacious, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#16a34a` · `#171717` · `#22c55e` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#fafafa` · `#000000` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-green-500/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. About (`about`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #e5e5e5;
  --color-accent: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    muted: '#262626',
    line: '#e5e5e5',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the navigation bar light grey with dark text and a solid black pill button
- **Do:** Use the green (#22c55e) only for the logo mark
- **Do:** Set the hero on near-black (#171717) and leave generous empty space
- **Don't:** Don't add decorative colour blocks to the hero
- **Don't:** Don't use green for buttons or body text
- **Don't:** Don't remove the slide markers; they set the rhythm of the rotating showcase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
