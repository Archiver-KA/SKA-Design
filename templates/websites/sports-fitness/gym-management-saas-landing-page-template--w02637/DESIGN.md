# Design system — Gym Management SaaS Landing Page Template

`SN-W02637` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A monochrome SaaS hero on pure black. A large white sans-serif headline sits on two lines, with the second line faded to grey, over a short centred paragraph and a white filled button beside a dark outline button. A dark dashboard mockup sits below the fold. Colour is limited to a small green status dot, so the page reads as stark and product-led.

**Mood:** monochrome, stark, product-led, clean, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#171717` · `#262626` · `#d4d4d4` · `#404040` · `#34d399` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-neutral-900/50`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #6366f1;
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
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, with the second line in grey.
- **Do:** Keep the dashboard mockup in dark grey panels below the hero.
- **Do:** Use the green accent only for the small status dot.
- **Don't:** Don't add colour to the hero buttons; the primary stays white.
- **Don't:** Don't place the mockup above the headline.
- **Don't:** Don't use the indigo accent in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
