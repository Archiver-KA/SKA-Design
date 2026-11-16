# Design system — PixelCraft Professional DJ Services Landing Page Template

`SN-W04046` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, nightlife-style page on a near-black ground with soft green and violet glows behind the content. The opening view is mostly dark, and headlines are short, sentence-case sans-serif lines. Mint green (#6ee7b7) appears only on highlights and the primary action, and rounded panels and blurred shapes give the page an atmospheric, after-dark mood.

**Mood:** atmospheric, nocturnal, dark, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07100b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#07100b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6ee7b7` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#07100b` · `#6ee7b7` · `#10b981` · `#a7f3d0` · `#34d399` · `#09090b` · `#8b5cf6` · `#c4b5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Anton, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 30px · body 12px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.24em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_20px_40px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="rounded-full px-4 py-2 text-xs font-normal text-white/90 transition hover:bg-white/[0.06] font-dm-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Video / media (`video-media`)
5. Process / steps (`how-it-works`)
6. Listings (`listings`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #07100b;
  --color-text: #ffffff;
  --color-muted: #07100b;
  --color-border: #ffffff;
  --color-accent: #6ee7b7;
  --color-accent-2: #8b5cf6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07100b',
    ink: '#ffffff',
    muted: '#07100b',
    line: '#ffffff',
    accent: '#6ee7b7',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#07100b) and place glows behind content only
- **Do:** Use mint (#6ee7b7) for the primary action and small highlights
- **Do:** Keep headlines short and in sentence case
- **Don't:** Don't place light panels on the dark ground
- **Don't:** Don't add more than two glow shapes per section
- **Don't:** Don't set body copy in grey over the glow areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
