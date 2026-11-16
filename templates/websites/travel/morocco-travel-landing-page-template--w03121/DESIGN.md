# Design system — Morocco Travel Landing Page Template

`SN-W03121` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, warm hero on white with a bold navy (#181e4b) headline in a heavy serif, Explore the Magic of the Golden Sahara, where the word Magic is underlined in coral (#df6951). A coral circle beside a Watch Video label sits under the copy, and a tall arched photograph of a fountain fills the right side.

**Mood:** warm, vibrant, traditional, inviting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#181e4b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#df6951` | Primary action and highlights |
| Second accent | `#181e4b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#4b5563` · `#df6951` · `#f3f4f6` · `#9ca3af` · `#000000` · `#181e4b` · `#374151` · `#fff1da`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins, Volkhov
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 14px · body 16px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_20px_50px_rgba(0,0,0,0.07)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[370px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-12`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#F1A501] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 transition font-medium text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Swiper
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #181e4b;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #df6951;
  --color-accent-2: #181e4b;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#181e4b',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#df6951',
    accent2: '#181e4b',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold navy (#181e4b) and underline one word in coral (#df6951)
- **Do:** Use the coral circle for the video control and small emphasis only
- **Do:** Set imagery in a tall arch shape at the right of the hero
- **Don't:** Don't use coral for the headline text; it is the underline colour
- **Don't:** Don't set small body copy in navy; the paragraph is grey
- **Don't:** Don't add a second loud colour beyond coral and navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
