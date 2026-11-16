# Design system — Digital Agency Landing Page Template

`SN-W01530` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A near-black hero with a centred, stacked, uppercase headline whose lower lines fade to grey, set over a dim olive glow. Lime appears only as a faint glow and small labels. Navigation is minimal, with a white contact button at the top right and small uppercase labels at the bottom edges.

**Mood:** dark, uppercase, glowing, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#222222` | Hairlines, dividers, outlines |
| Accent | `#e3ff04` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e3ff04` · `#222222` · `#0a0a0a` · `#121212` · `#1a1a1a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-brand transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #222222;
  --color-accent: #e3ff04;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#222222',
    accent: '#e3ff04',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase, stacked, with the lower lines fading to grey
- **Do:** Use the lime (#e3ff04) only as a soft glow and small status labels
- **Do:** Keep the page on near-black (#0a0a0a) with white text
- **Don't:** Don't use lime as a solid page ground
- **Don't:** Don't set body copy in lime
- **Don't:** Don't put body copy in the small bottom-corner labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
