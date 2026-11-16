# Design system — AI Image Generator Hero Landing Page Template

`SN-W00105` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

This is the same PixelGen hero: a dark, cinematic image-generator page on a near-black ground with a faint green wash. The white sans headline has selected letters in green (#22c55e), and a dark translucent pill button sits under the sub-line. Image tiles along the lower edge show the product output, and the first screen is almost all type and imagery.

**Mood:** dark, cinematic, creative, playful, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#d1d5db` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#4ade80` · `#050505` · `#9ca3af` · `#d1d5db` · `#c084fc` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Pixelify Sans
- **Scale (largest breakpoint):** h1 72px · h3 20px · body 18px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_20px_rgba(34,197,94,0.3)]`, `shadow-[0_0_50px_rgba(34,197,94,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors border border-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#d1d5db',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans with selected letters in green (#22c55e)
- **Do:** Use a dark translucent pill for the primary button, with a small arrow icon
- **Do:** Fill the lower hero edge with image tiles, as the product proof
- **Don't:** Don't use green for body text; it is for the highlighted letters only
- **Don't:** Don't add a light background to the hero; it sits on near-black
- **Don't:** Don't set the letter highlights in more than one colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
