# Design system — Digital Product Agency Landing Page Template

`SN-W01553` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero with a centred headline in heavy white sans-serif, the second line in a grey gradient, over a faint warm glow. Yellow (#ffd700) appears only as a small logo mark and a dot in the status badge, and the primary nav button is solid white.

**Mood:** bold, dark, minimal, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffd700` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ffd700` · `#262626` · `#000000` · `#0a0a0a` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Pricing (`pricing`)
6. About (`about`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #262626;
  --color-accent: #ffd700;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    line: '#262626',
    accent: '#ffd700',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#ffd700) for the logo mark and the status dot only
- **Do:** Set the headline in heavy white sans-serif with the second line in a grey gradient
- **Do:** Keep the page on black (#000000) with a faint warm glow behind the headline
- **Don't:** Don't use yellow as the page background
- **Don't:** Don't set body copy in yellow
- **Don't:** Don't add a second badge style to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
