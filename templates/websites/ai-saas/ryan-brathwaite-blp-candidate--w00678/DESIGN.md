# Design system — Ryan Brathwaite - BLP Candidate

`SN-W00678` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light campaign hero with a near-black, heavy sans headline stacked over three lines, and the final word 'Together.' set in red (#dc2626) as the only colour. Four short text values sit under the headline, and a solid black primary button sits beside an outlined secondary, which keeps the hierarchy flat. The right half is reserved for a large portrait, with a small white card over it carrying the tagline.

**Mood:** bold, civic, direct, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-brand-red/5`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-xs font-medium text-surface-neutral hover:text-surface-dark hover:bg-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Call to action (`cta`)
6. Services (`services`)
7. Footer (`footer`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #22c55e;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final word of the headline in red (#dc2626) and keep the rest near-black
- **Do:** Use the solid black button (#111111) as the primary action, with a plain outline button beside it
- **Do:** Place a short white card over the portrait for the tagline, not text on the image
- **Don't:** Don't add a second accent colour such as the green (#22c55e)
- **Don't:** Don't set body copy in red; it is for the headline word and the nav button
- **Don't:** Don't leave the portrait area empty; supply the image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
