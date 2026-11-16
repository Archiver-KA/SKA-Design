# Design system — Mouvmedia

`SN-W00553` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark hero on near-black (#161616) with a lime (#e3ff04) glow at the top and a lime dot in the tag above the headline. The headline is heavy white uppercase in two lines, the second fading to grey. The primary button is solid white beside a dark outline secondary, and small uppercase labels sit in the corners, giving the page an editorial, poster-like finish.

**Mood:** bold, dark, editorial, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#161616` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#e3ff04` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e3ff04` · `#333333` · `#1b1b1b` · `#161616` · `#000000` · `#252525`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 12px
- **Weights in use:** semibold, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-brand transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. About (`about`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #161616;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #333333;
  --color-accent: #e3ff04;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#161616',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#333333',
    accent: '#e3ff04',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#e3ff04) only for the glow, the tag dot and key highlights
- **Do:** Set headlines in heavy uppercase white, with the second line in grey
- **Do:** Keep the primary button solid white and the secondary a dark outline
- **Don't:** Don't fill large sections with lime; it is an accent, not a ground
- **Don't:** Don't set lime text on the dark ground at small sizes
- **Don't:** Don't put the page on a white ground; it stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
