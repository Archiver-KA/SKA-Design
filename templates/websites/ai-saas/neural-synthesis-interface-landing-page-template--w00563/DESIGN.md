# Design system — Neural Synthesis Interface Landing Page Template

`SN-W00563` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, measured page on near-black (#050505) whose first screen is a stats band: large light numerals such as 99.99%, 840+ and <12ms sit over small tracked uppercase labels. Below, a grid of thin-bordered dark cards holds one small icon and a short heading each. The blue accent (#3b82f6) is kept for a single highlight, so the page reads as a sober data sheet.

**Mood:** technical, dark, measured, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#737373` · `#525252` · `#050505` · `#a3a3a3` · `#000000` · `#080808` · `#e5e5e5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Manrope
- **Scale (largest breakpoint):** h1 80px · h2 72px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#3B82F6]`, `shadow-[0_0_15px_#3B82F6]`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set stat numerals large and light in white, with small uppercase labels below
- **Do:** Use thin-bordered dark cards for feature blocks, each with one small icon
- **Do:** Keep the blue (#3b82f6) for a single highlight rather than every number
- **Don't:** Don't add heavy shadows to the cards; the borders do the separation
- **Don't:** Don't set stat labels in bold; they stay small and tracked
- **Don't:** Don't colour the numerals; they are white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
