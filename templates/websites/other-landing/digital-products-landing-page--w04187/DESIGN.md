# Design system — Digital Products Landing Page

`SN-W04187` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black landing page (#030303) with a bold white headline on the first line and a gradient on the second line, running from blue to teal. Large blurred glow shapes sit behind the hero, and backdrop-blur panels hold the navigation and the buttons over the glow. The system sans-serif keeps the text plain, so the effect comes from light and blur rather than from colour blocks.

**Mood:** glowing, dark, futuristic, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f9dff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#030303` · `#22d3ee` · `#4f9dff` · `#1fe3cf` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · body 20px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]`, `shadow-lg`, `shadow-blue-500/25`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #4f9dff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#4f9dff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the second line of the hero headline in a blue-to-teal gradient
- **Do:** Place blurred glow shapes behind the hero, never over the text
- **Do:** Use backdrop-blur panels for navigation and buttons
- **Don't:** Don't use a light background; the glow needs the dark ground
- **Don't:** Don't add more than two gradient colours to one headline
- **Don't:** Don't use sharp-edged boxes; corners stay rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
