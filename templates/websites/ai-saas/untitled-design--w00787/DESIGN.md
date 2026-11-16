# Design system — Untitled Design

`SN-W00787` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product-planning page with a centred headline in Inter, where a lilac gradient runs across the words 'smarter, ship faster' and is the only colour in the type. The buttons are pale grey with a soft glow, and a small pill above the headline announces a release. The layout is a centred stack with generous space above the headline.

**Mood:** calm, dark, product, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a12` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4b5fd` | Primary action and highlights |
| Second accent | `#c4b5fd` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#94a3b8` · `#f8fafc` · `#cbd5e1` · `#d4d4d8` · `#18181b` · `#e2e8f0` · `#e4e4e7` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Pricing (`pricing`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Hero (`hero`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a12;
  --color-surface: #171717;
  --color-text: #f4f4f5;
  --color-border: #ffffff;
  --color-accent: #c4b5fd;
  --color-accent-2: #c4b5fd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a12',
    surface: '#171717',
    ink: '#f4f4f5',
    line: '#ffffff',
    accent: '#c4b5fd',
    accent2: '#c4b5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key words of the headline in the lilac gradient (#c4b5fd)
- **Do:** Use a pale grey pill button as the primary action with a soft glow
- **Do:** Centre the hero stack and keep generous space above the headline
- **Don't:** Don't add a second accent beside the lilac
- **Don't:** Don't place the glow shapes behind body text
- **Don't:** Don't use bright primary colours for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
