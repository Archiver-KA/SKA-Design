# Design system — AI Automation Agency Landing Page Template

`SN-W01388` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `no`

## Direction

A dark teal-black page with a green glow at the centre and a large two-line headline: EFFEKTIVE in a light italic serif and SYSTEMER in a heavy sans, both pale mint-white. Small floating UI cards with trigger labels and a live log frame the headline at the sides. The mint (#0ab979) is the accent for the badge and primary action, so the page reads as systematic.

**Mood:** systematic, dark, mint, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1616` | Page ground |
| Surface | `#0e1b1b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ab979` | Primary action and highlights |

Palette by frequency of use: `#0ab979` · `#ffffff` · `#0d1616` · `#a3a3a3` · `#f6f6f6` · `#0e1b1b` · `#0f4a33` · `#737373` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/50`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 bg-[#0AB979] hover:bg-[#0AB979]/90 text-[#0D1616] px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Feature grid (`features`)
3. Testimonials (`testimonials`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0d1616;
  --color-surface: #0e1b1b;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #0ab979;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1616',
    surface: '#0e1b1b',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#0ab979',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the background at #0d1616 and the headline in a light italic serif over a heavy sans.
- **Do:** Use the mint (#0ab979) for the badge and the primary action only.
- **Do:** Frame the headline with small floating UI cards for triggers and logs.
- **Don't:** Don't brighten the green glow into a solid section fill.
- **Don't:** Don't use the deep green (#0f4a33) as the ground; the teal-black is the base.
- **Don't:** Don't place floating cards over body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
