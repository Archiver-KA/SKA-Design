# Design system — Health Consultation Landing Page Template

`SN-W02392` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A confident, dark-green consultation hero, with a large white sans-serif headline centred over a deep forest-green ground (#073e29). The single call to action is a pale lime pill (#94c662) with dark text, so the green-on-green contrast is the signature. Layout is centred and spacious, and the palette is limited to forest green, lime and white.

**Mood:** confident, natural, focused, centred, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#073e29` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94c662` | Primary action and highlights |
| Second accent | `#94c662` | Supporting highlights |

Palette by frequency of use: `#073e29` · `#ffffff` · `#94c662` · `#fafafa` · `#52525b` · `#18181b` · `#f4f4f5` · `#000000` · `#a1a1aa` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 20px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-16`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="bg-[#94C662] text-[#073E29] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Team (`team`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #073e29;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #94c662;
  --color-accent-2: #94c662;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#073e29',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#94c662',
    accent2: '#94c662',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif, centred on the deep green ground (#073e29).
- **Do:** Use the lime (#94c662) for the primary button and nothing else.
- **Do:** Keep the header on the same green with a thin divider.
- **Don't:** Don't set the page on white in the hero; the first screen is green.
- **Don't:** Don't use the lime for body text; it is reserved for the button.
- **Don't:** Don't add a second button colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
