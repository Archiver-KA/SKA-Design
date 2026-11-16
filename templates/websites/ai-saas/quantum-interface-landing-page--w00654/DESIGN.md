# Design system — Quantum Interface Landing Page

`SN-W00654` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark cyberpunk hero where the headline is uppercase Orbitron with a cyan-to-pink gradient across the key word. The two buttons pick up those colours as a solid cyan-green and an outlined pink. A glowing console card on the right holds status rows and a neon action button, so the page reads as a control panel.

**Mood:** cyberpunk, neon, dark, console, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Orbitron
- **Body:** Fira Code
- **Loaded families:** Fira Code, Orbitron
- **Scale (largest breakpoint):** h1 48px
- **Weights in use:** bold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-8 rounded glow transition-all duration-300 transform hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Fira Code", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['Orbitron'], sans: ['Fira Code'] },
} }
```

## Do and don't

- **Do:** Set display headlines in Orbitron, uppercase, with a cyan-to-pink gradient on the key word
- **Do:** Use a solid cyan-green primary button and a pink outlined secondary button
- **Do:** Frame the proof panel as a dark console card with a glowing edge
- **Don't:** Don't set the page on white; it is black
- **Don't:** Don't put the neon gradient on body copy in Fira Code
- **Don't:** Don't add neon colours beyond the cyan and pink pair

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
