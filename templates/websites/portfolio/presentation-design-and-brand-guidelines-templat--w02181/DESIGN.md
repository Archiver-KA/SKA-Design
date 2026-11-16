# Design system — Presentation Design & Brand Guidelines Template

`SN-W02181` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Bold, playful dark navy page (#0b1b33) with large white uppercase Inter lettering and oversized mint (#2be0a8) and teal circles floating behind it. The circles are the decoration; the mint is the primary button colour and the eyebrow dot. The layout is centred with a tracked uppercase subtitle, so the page reads like a presentation title slide.

**Mood:** bold, playful, navy, confident, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1b33` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2be0a8` | Primary action and highlights |
| Second accent | `#2aa9a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2be0a8` · `#0b1b33` · `#8a5bd6` · `#2aa9a6` · `#0f2240` · `#d9dcde`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Archivo Black, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-xs font-semibold uppercase tracking-widest bg-[#2BE0A8] text-[#0B1B33] px-4 py-2 rounded-full hover:bg-white transition">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b1b33;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2be0a8;
  --color-accent-2: #2aa9a6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1b33',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#2be0a8',
    accent2: '#2aa9a6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in white Inter uppercase at very large size
- **Do:** Use mint (#2be0a8) for the primary button and eyebrow dot
- **Do:** Place decorative circles behind the hero, never over the text
- **Don't:** Don't use purple (#8a5bd6) for buttons; it is decoration only
- **Don't:** Don't set the subtitle in lower case; it is tracked uppercase
- **Don't:** Don't add a light section; the page stays navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
