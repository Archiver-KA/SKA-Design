# Design system — Meet&move ⏐ Transformer tes sorties en vraies rencontres

`SN-W00530` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A warm off-white page on #fafaf9 with a large dark serif headline and a near-black pill as the primary button, so the call to action is dark rather than coloured. The rounded photo frame sits to the right of the copy, and small green status dots carry the only colour. The serif and the restrained palette give it a friendly but considered tone for a social-events app.

**Mood:** warm, friendly, considered, editorial, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#fafaf9` · `#292524` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-stone-200 text-stone-600 font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Newsletter signup (`newsletter`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
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
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large dark serif on the off-white ground.
- **Do:** Use a near-black (#1c1917) pill for the primary call to action.
- **Do:** Use the green (#22c55e) only for small status dots.
- **Don't:** Don't colour the primary button in amber (#f59e0b); it stays near-black.
- **Don't:** Don't set the page on a white card over the photo.
- **Don't:** Don't use the green as a button fill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
