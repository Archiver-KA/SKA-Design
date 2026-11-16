# Design system — Shilajit E-commerce Landing Page Template

`SN-W01318` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, warm product landing page on near-black with a soft amber glow behind the hero. The first headline line is white sans-serif, and the second line 'From Nature.' switches to amber italic serif, which is the page's signature. Amber (#f59e0b) fills the primary button and the badge, and the product jar in a dark card keeps the palette to black, white and gold.

**Mood:** dark, warm, natural, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#737373` · `#a3a3a3` · `#fbbf24` · `#000000` · `#171717` · `#d4d4d4` · `#525252` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Sign-in form (`auth-form`)
4. Hero (`hero`)
5. Benefits (`benefits`)
6. Product grid (`product-grid`)
7. Stats band (`stats`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#171717) with a warm amber glow behind the hero
- **Do:** Use amber (#f59e0b) for the primary button and the one italic headline line
- **Do:** Set the first headline line in white sans-serif and the second in amber italic serif
- **Don't:** Don't use light section backgrounds; the page depends on the dark ground
- **Don't:** Don't use more than one bright accent per screen; amber does the work alone
- **Don't:** Don't use amber for body text; it is for emphasis and actions

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
