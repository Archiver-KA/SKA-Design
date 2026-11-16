# Design system — Novalume Branding & Design Landing Page Template

`SN-W01653` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a centred, large white headline set in Inter, a small status pill above it, and a row of client logos at the bottom edge of the hero. The palette is monochrome; the buttons are dark on black and separated by thin outlines. The look is clean and identity-focused, with logos providing the only colour.

**Mood:** monochrome, clean, centred, identity-led, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#171717` · `#d4d4d4` · `#a3a3a3` · `#34d399` · `#1f2937` · `#18181b` · `#2dd4bf` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 16px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-zinc-900`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Product grid (`product-grid`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #a855f7;
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
    surface: '#171717',
    ink: '#e5e5e5',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and centred in white Inter
- **Do:** Use a small pill badge above the headline with a single green dot
- **Do:** Show client logos in a row across the bottom of the hero
- **Don't:** Don't use the purple (#a855f7) accent; it does not appear in the design
- **Don't:** Don't put the logo row above the headline
- **Don't:** Don't use filled coloured buttons; the primary CTA is dark and outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
