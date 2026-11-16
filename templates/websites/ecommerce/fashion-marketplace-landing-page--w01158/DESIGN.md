# Design system — Fashion Marketplace Landing Page

`SN-W01158` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A marketplace hero sits on white with a bold dark headline and pink pill buttons: a solid pink (#ec4899) primary for buying and a black pill for selling, set side by side. Below the hero, cards carry the product story, including a pink-to-purple gradient card that shows an account balance. Rounded corners and soft gradients keep the tone friendly, and grey (#6b7280) is used for supporting copy.

**Mood:** friendly, marketplace, bright, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#4b5563` · `#6b7280` · `#000000` · `#1f2937` · `#3b82f6` · `#a855f7` · `#dcfce7` · `#f3e8ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 30px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center btn-hover hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-accent: #ec4899;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    accent: '#ec4899',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use pink (#ec4899) for the buy action and black for the sell action, side by side in the hero.
- **Do:** Use the pink-to-purple gradient (#ec4899 to #a855f7) only on feature cards, not on buttons.
- **Do:** Round cards and pills generously, with fully rounded buttons and large-radius cards.
- **Don't:** Don't use pink as the background of large sections; it is for actions and gradient cards.
- **Don't:** Don't set body copy in pure black; supporting copy is grey.
- **Don't:** Don't remove the search field from the header; it is part of the top bar.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
