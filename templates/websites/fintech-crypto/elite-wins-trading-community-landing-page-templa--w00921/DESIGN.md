# Design system — Elite Wins Trading Community Landing Page Template

`SN-W00921` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark trading-community hero on deep black with a soft violet glow behind the headline. The second line is set in a grey gradient, and the primary button is a solid violet pill. A thin announcement bar at the top carries an offer code in a small outlined tag. The glass-style navigation sits above the hero and stays low-key.

**Mood:** glowing, dark, community, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#065f46` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8f9ab5` · `#a78bfa` · `#c4b5fd` · `#a8a1bd` · `#000000` · `#8b5cf6` · `#ddd6fe` · `#34d399` · `#7e22ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Satoshi
- **Loaded families:** Satoshi
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(168,85,247,0.22)]`, `shadow-[0_0_8px_rgba(139,92,246,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-4`, `gap-0.5`, `gap-2`

**Primary button**

```html
<a class="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Stats band (`stats`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Articles (`blog-articles`)
8. FAQ (`faq`)
9. Video / media (`video-media`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #065f46;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#065f46',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Use violet (#8b5cf6) for the primary button and the glow only
- **Do:** Set the second headline line in a grey gradient
- **Do:** Keep the announcement bar thin with a small outlined code tag
- **Don't:** Don't use green for the background; the ground is dark
- **Don't:** Don't let the glow compete with the headline
- **Don't:** Don't add extra filled buttons beside the violet one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
