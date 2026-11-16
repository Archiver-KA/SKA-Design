# Design system — Health & Nutrition Coaching Landing Page Template

`SN-W02388` · healthcare · light mode · Sinera Atlas theme `calm` · language `sk`

## Direction

A bright, friendly coaching hero on a white ground, with a large system sans-serif headline in near-black and one phrase set in coral (#ff887c). The header and primary button use a coral-to-orange gradient, and the rounded pill shapes keep it soft and approachable. Colour is limited to the coral family, so the page feels warm and encouraging without being loud.

**Mood:** warm, encouraging, soft, approachable, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff887c` | Primary action and highlights |
| Second accent | `#8b2b73` | Supporting highlights |

Palette by frequency of use: `#ff887c` · `#ffffff` · `#1c1917` · `#ffb364` · `#78716c` · `#57534e` · `#f5f5f4` · `#fafaf9` · `#fffdfb` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-[#FF887C]/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden lg:inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#FF887C] to-[#FFB364] rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#FF887C]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafaf9;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ff887c;
  --color-accent-2: #8b2b73;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafaf9',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ff887c',
    accent2: '#8b2b73',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, with the emphasis phrase in coral (#ff887c).
- **Do:** Use the coral-to-orange gradient only for the header button and the top bar.
- **Do:** Keep the page on the white and warm off-white grounds with rounded cards.
- **Don't:** Don't set body copy in coral; the contrast is too low on white.
- **Don't:** Don't use the plum (#8b2b73) for large areas; it is a minor accent.
- **Don't:** Don't mix in cool colours.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
