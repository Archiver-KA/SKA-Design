# Design system — Quantum Computing Company Overview

`SN-W04069` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, technical page with monospace labels and a display headline in capitals, where the word QUANTUM is set in a pink gradient. Figures appear in bright mono type inside thin-bordered dark cards, and a glowing panel frames the lab image. The look is futuristic and data-led, with the glow and the numbers doing most of the work.

**Mood:** technical, futuristic, dark, data-led, precise

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
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 14px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,240,192,0.3)]`, `shadow-[0_0_15px_rgba(255,42,109,0.3)]`, `shadow-lg`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-8 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Fira Code", sans-serif;
  --radius: 8px;
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

- **Do:** Set display headings in Orbitron in capitals, with one key word in a pink gradient
- **Do:** Set body copy and labels in Fira Code monospace
- **Do:** Frame figures and images in thin-bordered dark cards with a glowing top edge
- **Don't:** Don't set long paragraphs in the display face; Orbitron is for headings only
- **Don't:** Don't place glow shapes behind body text
- **Don't:** Don't round the panels softly; they keep hairline borders and square corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
