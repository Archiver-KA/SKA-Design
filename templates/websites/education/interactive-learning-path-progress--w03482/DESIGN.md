# Design system — Interactive Learning Path Progress

`SN-W03482` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, futuristic setup flow on a near-black ground (#111111) with a white headline and a blue gradient on the key words. A glowing blue ring animates behind the step tracker, and the selection card holds topic chips inside one rounded panel. Blue (#3b82f6) is the single accent, used for the headline's key words and the selected states.

**Mood:** futuristic, guided, dark, luminous, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#111111` · `#93c5fd` · `#818cf8` · `#2563eb` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h1 56px · h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-6 py-2 rounded-lg bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the headline's key words and selected states only
- **Do:** Keep the step tracker as a row of circles above the card
- **Do:** Place topic chips as rounded pills inside a single dark panel
- **Don't:** Don't add a second accent colour to the selected states
- **Don't:** Don't put the glowing ring behind body text
- **Don't:** Don't use light panels on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
