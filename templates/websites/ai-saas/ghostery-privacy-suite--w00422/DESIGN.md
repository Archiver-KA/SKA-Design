# Design system — Ghostery Privacy Suite

`SN-W00422` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cream-white page with bold black outlines and flat cards in pink (#ff9ebb) and pale blue (#bfdbfe), a playful neo-brutalist look. The headline is a large black serif, and the phrase 'Reclaim privacy.' is marked by a yellow highlight band. Cards are tilted slightly and given a hard offset edge, so they read as stickers. Each card takes one pastel, and black outlines hold them together.

**Mood:** playful, neo-brutalist, bold, bright, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf7` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff9ebb` | Primary action and highlights |
| Second accent | `#bfdbfe` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#52525b` · `#fafafa` · `#71717a` · `#fefce8` · `#fffdf7` · `#ff9ebb` · `#2563eb` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter, Playfair Display, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#ff9ebb] text-black px-6 py-2.5 text-sm font-bold rounded-lg border-2 border-black brutal-shadow hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Dashboard preview (`dashboard-preview`)
8. Call to action (`cta`)
9. Comparison (`comparison`)
10. Logo cloud (`logo-cloud`)
11. Product grid (`product-grid`)
12. FAQ (`faq`)
13. Video / media (`video-media`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffdf7;
  --color-surface: #d4d4d8;
  --color-text: #000000;
  --color-muted: #52525b;
  --color-border: #000000;
  --color-accent: #ff9ebb;
  --color-accent-2: #bfdbfe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf7',
    surface: '#d4d4d8',
    ink: '#000000',
    muted: '#52525b',
    line: '#000000',
    accent: '#ff9ebb',
    accent2: '#bfdbfe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give every card a thick black outline and a hard offset edge, not a soft shadow
- **Do:** Use one pastel per card, pink (#ff9ebb) or pale blue (#bfdbfe)
- **Do:** Mark one key phrase in the hero headline with a yellow highlight band
- **Don't:** Don't use soft blurred shadows; the style is flat and hard-edged
- **Don't:** Don't put more than one highlight band in a hero
- **Don't:** Don't tint the page ground pink; it stays cream white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
