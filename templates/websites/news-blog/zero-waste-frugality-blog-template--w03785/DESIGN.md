# Design system — Zero-Waste Frugality Blog Template

`SN-W03785` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sage-toned blog layout with a pale green page ground and white ledger cards set beside a large hero. The hero image fades into deep green beneath a serif headline, and the ledger figures in a monospaced face give the page a household-accounts character. Red is kept for negative amounts, while dark green carries the primary button.

**Mood:** practical, earthy, clear, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d1e2c4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1b262c` | Headings and primary copy |
| Border | `#1b262c` | Hairlines, dividers, outlines |
| Accent | `#2d5a27` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#1b262c` · `#2d5a27` · `#ffffff` · `#d1e2c4` · `#f9f9f6` · `#dc2626` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Baskervville, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[inset_0_0_30px_rgba(27,38,44,0.03)]`
- **Content width:** `max-w-7xl`, `max-w-[800px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden sm:block bg-[#2D5A27] text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#1B262C] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)
3. Pricing (`pricing`)
4. Hero (`hero`)
5. Footer (`footer`)
6. Newsletter signup (`newsletter`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #d1e2c4;
  --color-surface: #ffffff;
  --color-text: #1b262c;
  --color-border: #1b262c;
  --color-accent: #2d5a27;
  --color-accent-2: #dc2626;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d1e2c4',
    surface: '#ffffff',
    ink: '#1b262c',
    line: '#1b262c',
    accent: '#2d5a27',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page on pale sage (#d1e2c4) and place ledgers on white cards.
- **Do:** Use dark green (#2d5a27) for the primary button only.
- **Do:** Show negative amounts in red (#dc2626) and keep positive amounts in the text colour.
- **Don't:** Don't set the hero headline in a sans-serif face.
- **Don't:** Don't add unrelated accent colours to the ledger cards.
- **Don't:** Don't place the white ledger cards on a dark background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
