# Design system — Korean Restaurant Landing Page Template

`SN-W02925` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A stark black hero where a very large uppercase sans headline fills the left column, with the last word 'SEOUL.' fading from white to grey. The single colour is a vermilion (#f05830), used on the Korean eyebrow and the small status dot in a floating stat card at bottom-right. The stance is bold and minimal, with type at maximum scale and the colour kept to two small marks.

**Mood:** stark, bold, minimal, monochrome, oversized

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f05830` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f05830` · `#f5f5f5` · `#9ca3af` · `#6b7280` · `#171717` · `#737373` · `#a3a3a3` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Antonio, Inter, Poppins
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(240,88,48,0.4)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group bg-[#F05830] hover:bg-[#d04622] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(240,88,48,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f05830;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f05830',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans at very large size, with the last word graded white to grey.
- **Do:** Use vermilion (#f05830) only for the eyebrow and one status dot.
- **Do:** Keep the page black and place a small floating stat card in the lower right.
- **Don't:** Don't use vermilion for buttons or large fills; it marks two small details.
- **Don't:** Don't add a light section; the page is black from edge to edge.
- **Don't:** Don't set the headline in a serif; it is a heavy sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
