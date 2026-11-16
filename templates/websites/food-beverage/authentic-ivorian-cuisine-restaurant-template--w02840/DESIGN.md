# Design system — Authentic Ivorian Cuisine Restaurant Template

`SN-W02840` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A bold, sunny restaurant hero set on a saturated red-orange field (#ce3f23), with a large white uppercase headline whose middle line is yellow (#ffc446). A cream navigation sits on top, and a yellow-backed food photograph sits to the right, so red and yellow carry the mood. A deep green pill (#1c7755) in the navigation adds a second, cooler note for the take-away promise.

**Mood:** bold, sunny, appetising, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f1e9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ce3f23` | Primary action and highlights |
| Second accent | `#1c7755` | Supporting highlights |

Palette by frequency of use: `#ce3f23` · `#ffffff` · `#111827` · `#e5e7eb` · `#f5f1e9` · `#4b5563` · `#1c7755` · `#ffc446` · `#f44a35` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Bebas Neue, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 24px
- **Weights in use:** normal, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[#ce3f23]/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full py-5 bg-[#ce3f23] text-white rounded-2xl font-normal tracking-tight text-3xl hover:bg-[#f44a35] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#ce3f23]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Menu list (`menu-list`)
5. Cart / checkout (`cart-checkout`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f1e9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #ce3f23;
  --color-accent-2: #1c7755;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f1e9',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#ce3f23',
    accent2: '#1c7755',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Use the red-orange (#ce3f23) for the hero field and the primary action
- **Do:** Set the middle headline line in yellow (#ffc446)
- **Do:** Keep the green (#1c7755) to small pills and labels
- **Don't:** Don't put the yellow headline line on the cream navigation; the contrast is too low
- **Don't:** Don't use pale grey panels; the page is red, yellow and cream
- **Don't:** Don't set body copy in white over the yellow photograph card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
