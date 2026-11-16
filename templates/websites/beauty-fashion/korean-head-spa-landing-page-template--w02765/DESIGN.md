# Design system — Korean Head Spa Landing Page Template

`SN-W02765` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm wellness template where a deep brown (#2c2420) does the structural work: the nav, the outlined booking button and the top strip use it, over a soft neutral ground. Hero photography of a grey bottle and pink tulips sits behind a large white sans headline, with an italic serif line for the second phrase. A thin vertical rule beside the intro copy is the only other decorative detail.

**Mood:** calm, airy, luxurious, soft, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#2c2420` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2c2420` · `#1c1917` · `#e7e5e4` · `#57534e` · `#78716c` · `#f5f5f4` · `#fde68a` · `#f59e0b` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#2C2420] text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Process / steps (`how-it-works`)
5. Menu list (`menu-list`)
6. Team (`team`)
7. About (`about`)
8. Gallery / portfolio (`gallery-portfolio`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcfb;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #2c2420;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcfb',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#2c2420',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark brown (#2c2420) for the nav, the booking button and the top strip.
- **Do:** Pair the large white headline with an italic serif second line.
- **Do:** Set hero text over the darker left side of the photograph, never over the light tulip area.
- **Don't:** Don't add green or amber accents; the page uses brown and neutrals only.
- **Don't:** Don't use the pale pink of the flowers as a UI colour.
- **Don't:** Don't thin the intro copy to a light weight over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
