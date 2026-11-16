# Design system — FundedX FinTech Trading Landing Page Template

`SN-W00975` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black green page (#000806) with a large white headline whose second and third lines are set in mint green (#34d399). The layout is a single centred column under a thin announcement bar, with a restrained glow behind the type. Green is the only accent, so the page reads as focused and on-brand for trading.

**Mood:** dark, focused, green, centred, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000806` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#8f9ab5` · `#10b981` · `#34d399` · `#6ee7b7` · `#a7f3d0` · `#000806` · `#059669` · `#064e3b` · `#011c15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** PP Mori
- **Body:** PP Mori
- **Loaded families:** PP Mori
- **Scale (largest breakpoint):** h1 128px · h2 60px · body 20px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(16,185,129,0.3)]`, `shadow-sm`, `shadow-[0_10px_30px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[1360px]`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white/5 border border-white/5 border-t-white/10 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000806;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "PP Mori", sans-serif;
  --font-body: "PP Mori", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000806',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['PP Mori'], sans: ['PP Mori'] },
} }
```

## Do and don't

- **Do:** Set the second and third headline lines in mint green (#34d399).
- **Do:** Keep the page ground near-black (#000806) with white headlines.
- **Do:** Use a thin announcement bar above the navigation.
- **Don't:** Don't use the bright green (#10b981) and the mint together in one headline.
- **Don't:** Don't place green text on the glow.
- **Don't:** Don't add a light section between dark ones.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
