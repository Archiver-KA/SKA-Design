# Design system — Luxury Automotive Landing Page Template

`SN-W04005` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark, dark automotive hero with a large, tight-set white sans-serif headline in two lines, the second line fading into grey for depth. Pill-shaped buttons pair a solid white primary with an outlined secondary. Copy stays short and precise, and the page relies on black space rather than colour.

**Mood:** stark, precise, monochrome, dark, performance

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#e5e5e5` · `#525252` · `#020202` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_30px_rgba(255,255,255,0.03)]`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex justify-center items-center bg-white text-black px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 glow-effect">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    surface: '#000000',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight-tracked bold sans-serif, with the second line in a grey gradient
- **Do:** Use white solid pills for the main action and outlined pills for secondary actions
- **Do:** Keep the ground near-black (#0a0a0a) with no colour accents
- **Don't:** Don't add colour accents; the page is monochrome
- **Don't:** Don't set hero paragraphs wider than two lines
- **Don't:** Don't use square corners on the buttons; they are pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
