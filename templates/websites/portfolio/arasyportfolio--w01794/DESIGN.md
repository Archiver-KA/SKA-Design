# Design system — ArasyPortfolio

`SN-W01794` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large white sans name headline in a subtle grey-to-white gradient, followed by a small grey paragraph and a dark outlined primary button. Dark cards with thin borders hold the experience and project counts, and one card carries a small icon row. The stance is a quiet, dark dashboard-style hero, with grey doing most of the work.

**Mood:** quiet, dark, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#81d8d0` · `#000000` · `#111111` · `#171717` · `#27272a` · `#52525b` · `#4f46e5` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 70px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-6`, `gap-x-2`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in white Inter with a subtle grey-to-white gradient.
- **Do:** Keep cards dark (#171717) with thin borders rather than shadows.
- **Do:** Keep buttons dark and outlined, with the primary's edge tinted blue.
- **Don't:** Don't add shadows; depth comes from thin borders.
- **Don't:** Don't use a light background; the page is black.
- **Don't:** Don't add colour beyond the subtle edge tint.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
