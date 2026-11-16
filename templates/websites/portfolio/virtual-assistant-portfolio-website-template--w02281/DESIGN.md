# Design system — Virtual Assistant Portfolio Website Template

`SN-W02281` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with near-black headlines and a gold-brown accent on one phrase in the hero. Inter carries everything, and the 60px headline does most of the work, set tight and heavy. A pale card with hairline borders frames a small product mockup on the right, so the layout stays calm and text-led.

**Mood:** calm, warm, professional, text-led, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#44403c` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fafaf9` · `#f5f5f4` · `#e7e5e4` · `#a8a29e` · `#44403c` · `#57534e` · `#78716c` · `#d6d3d1` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-charcoal-900 text-white rounded-xl hover:bg-charcoal-800 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-charcoal-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #44403c;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ffedd5;
  --color-accent-2: #4ade80;
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
    ink: '#44403c',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ffedd5',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy Inter at 60px with the key phrase in the gold-brown accent
- **Do:** Keep the page on the off-white ground and use white only for cards
- **Do:** Frame supporting visuals in a pale card with a hairline border
- **Don't:** Don't add drop shadows to cards; borders and tint separate them
- **Don't:** Don't use more than one accent phrase per hero
- **Don't:** Don't set body copy in the darker headline colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
