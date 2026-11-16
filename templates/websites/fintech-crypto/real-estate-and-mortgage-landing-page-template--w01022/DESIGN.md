# Design system — Real Estate & Mortgage Landing Page Template

`SN-W01022` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A dark Russian-language property finance page on near-black (#0a0a0a), with a soft dark blue glow behind a centred headline. The headline is a large light sans, and its second clause fades from white to grey. The buttons are a white primary pill and a dark grey secondary, so the page stays monochrome with one neutral highlight.

**Mood:** monochrome, dark, calm, premium, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#262626` · `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#404040` · `#d4d4d4` · `#525252` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light sans, with the second clause in a white-to-grey fade.
- **Do:** Use the white pill as the primary button and a dark grey pill for the secondary.
- **Do:** Keep the hero centred on the near-black ground (#0a0a0a).
- **Don't:** Don't add a coloured accent to the hero.
- **Don't:** Don't put body text over the blue glow.
- **Don't:** Don't set the headline in a heavy weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
