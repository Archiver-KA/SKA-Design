# Design system — Emerald Lawn Sprinklers Service Template

`SN-W03893` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A darkened photo hero with a centred white sans-serif headline and short white supporting text beneath it. The primary button is solid green, set beside a grey translucent secondary button. The navigation sits on a dark translucent bar with green pill buttons, and the centred layout keeps the hero steady.

**Mood:** steady, natural, dark, clear, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#149116` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4ade80` · `#149116` · `#000000` · `#22c55e` · `#171717` · `#e5e5e5` · `#525252` · `#86efac` · `#bbf7d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 30px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_10px_rgba(74,222,128,0.3)]`, `shadow-[0_0_15px_rgba(74,222,128,0.4)]`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="text-sm font-bold uppercase tracking-[0.15em] text-black bg-green-400 px-4 py-2 rounded-lg inline-block text-center hover:bg-green-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all w-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #149116;
  --color-accent-2: #fef3c7;
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
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#149116',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline over a darkened photo so white text stays legible
- **Do:** Use solid green (#149116) for the primary button only
- **Do:** Place the navigation on a translucent dark bar with green pill buttons
- **Don't:** Don't use bright greens for text; they are for buttons and small labels
- **Don't:** Don't set the headline in a light weight over a busy photo
- **Don't:** Don't remove the translucent secondary button; it balances the green action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
