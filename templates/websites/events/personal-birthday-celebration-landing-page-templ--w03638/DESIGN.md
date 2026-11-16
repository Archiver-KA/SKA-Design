# Design system — Personal Birthday Celebration Landing Page Template

`SN-W03638` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, minimal birthday page on a near-black ground with a faint warm glow at the top centre. The headline is a large bold sans-serif in white, and the name beneath it is set in a silver-to-grey gradient, with a small pill label above for the occasion. A short centred paragraph in light grey carries the message, and there is no other colour, so the words lead the page.

**Mood:** intimate, minimal, dark, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Text | `#fafafa` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#0a0a0a` · `#171717` · `#6366f1` · `#818cf8` · `#09090b` · `#fafafa` · `#d4d4d4` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 30px · body 24px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-text: #fafafa;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    ink: '#fafafa',
    line: '#ffffff',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans-serif, centred, with the name in a silver gradient
- **Do:** Use a small pill label above the headline for the occasion
- **Do:** Keep the message to one short centred paragraph in light grey
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't use a light page background for this layout
- **Don't:** Don't add a second headline gradient on the same screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
