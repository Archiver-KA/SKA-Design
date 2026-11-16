# Design system — Ubuntu Guesthouse Landing Page Template

`SN-W03154` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A sage-green guesthouse hero on a pale sage ground (#e4e8d6), with a centred white serif headline over a wide rounded hotel-pool photograph. Italic lines and a quoted tagline sit beneath the title, and a dark slate pill button carries the action. The contrast comes from the photograph and the white serif type rather than from an accent colour.

**Mood:** hospitable, calm, classic, soft, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e4e8d6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#202a2d` | Headings and primary copy |
| Border | `#202a2d` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#e4e8d6` · `#202a2d` · `#ffffff` · `#000000` · `#1a2124` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Serif Display
- **Loaded families:** DM Serif Display, IBM Plex Sans, Reenie Beanie
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 18px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="group/dot flex items-center bg-[#e4e8d6] text-[#202a2d] h-4 w-4 rounded-full overflow-hidden hover:w-auto hover:h-12 hover:px-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xl hover:shadow-2xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e4e8d6;
  --color-surface: #ffffff;
  --color-text: #202a2d;
  --color-border: #202a2d;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Serif Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e4e8d6',
    surface: '#ffffff',
    ink: '#202a2d',
    line: '#202a2d',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Serif Display'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white serif over a rounded photograph
- **Do:** Use a dark slate (#202a2d) pill button for the main action
- **Do:** Keep the nav in small uppercase serif on the sage ground
- **Don't:** Don't set the headline in dark ink over the photo; use white
- **Don't:** Don't add accent colours; the page is sage and slate
- **Don't:** Don't use sharp corners on the photograph frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
