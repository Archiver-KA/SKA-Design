# Design system — Alternative Asset Management Landing Page Template

`SN-W00875` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#0a0a0a) with a large white headline whose second line is set in a light grey italic, giving it an editorial, understated tone. The eyebrow label is gold (#e5a93c), and the only imagery is a pair of dark metallic coin discs on the right with a soft glow. Gold is the single warm accent; the rest is white and grey.

**Mood:** dark, editorial, understated, premium, gold-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#52525b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e5a93c` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5a93c` · `#000000` · `#0f172a` · `#18181b` · `#94a3b8` · `#e4e4e7` · `#52525b` · `#27272a` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #52525b;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #e5a93c;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#52525b',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#e5a93c',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the eyebrow label in gold (#e5a93c) with the parenthesis styling shown
- **Do:** Break the headline into a white first line and a grey italic second line
- **Do:** Keep the coin visuals as dark discs with a faint glow, not bright graphics
- **Don't:** Don't use gold for buttons or large fills
- **Don't:** Don't add colour to the coin imagery
- **Don't:** Don't set the headline in a heavy weight; it stays light to regular

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
