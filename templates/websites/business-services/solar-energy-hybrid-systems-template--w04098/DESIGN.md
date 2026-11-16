# Design system — Solar Energy Hybrid Systems Template

`SN-W04098` · business-services · dark mode · Sinera Atlas theme `route` · language `pt-BR`

## Direction

A dark, high-contrast lead page with a bold white headline whose key phrase is set in orange (#fb923c) with a thin hand-drawn underline. A framed form card sits at right with dark fields and a warm gradient button, so the offer and the form read as one unit. Orange carries every emphasis and call to action.

**Mood:** energetic, dark, direct, warm, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07090e` | Page ground |
| Surface | `#12151d` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fb923c` · `#fdba74` · `#07090e` · `#12151d` · `#0c0f16` · `#fed7aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_50px_rgba(249,115,22,0.45)]`, `shadow-2xl`, `shadow-[0_0_40px_rgba(249,115,22,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 text-xs font-medium bg-white/5 border border-white/10 hover:border-orange-400/50 hover:bg-orange-400/10 rounded-full px-5 py-2.5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #07090e;
  --color-surface: #12151d;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07090e',
    surface: '#12151d',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in orange (#fb923c), with a thin underline
- **Do:** Use the orange gradient button for the form's submit action
- **Do:** Frame the form in a dark card with rounded corners and dark input fields
- **Don't:** Don't use orange for body copy beyond the highlighted links
- **Don't:** Don't put the form on a light background
- **Don't:** Don't add a second gradient to the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
