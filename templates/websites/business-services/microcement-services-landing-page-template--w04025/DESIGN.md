# Design system — Microcement Services Landing Page Template

`SN-W04025` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, light page built on a warm off-white ground with a very large headline in black and mid-grey. The last word of the headline is set in grey, creating a tonal shift rather than a colour one. Solid black and outlined rectangular buttons sit under a small uppercase status line, and generous space around the centred copy keeps it calm.

**Mood:** quiet, minimal, tactile, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3ef` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f3ef` · `#e5e7eb` · `#22c55e` · `#121212` · `#cccccc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-black/5`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-brand-black text-brand-bg px-6 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. About (`about`)
6. Feature grid (`features`)
7. Case studies (`case-studies`)
8. Product grid (`product-grid`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f3ef;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #000000;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3ef',
    ink: '#000000',
    line: '#000000',
    accent: '#000000',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final word of the headline in mid-grey
- **Do:** Use solid black for the primary button and an outline for the secondary
- **Do:** Keep the hero centred with generous space around it
- **Don't:** Don't use green as a page colour; keep it to a small status dot
- **Don't:** Don't add glow or blur effects
- **Don't:** Don't place dark sections on the warm off-white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
