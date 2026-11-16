# Design system — Digital Agency Portfolio Landing Page Template

`SN-W01976` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic black minimalism: a black page with a bold white uppercase Inter headline on the first line and a dim grey italic serif word below it. Small grey body copy sits in a right-hand column, and the call to action is a thin outlined circle. The contrast comes from weight and tone rather than from colour.

**Mood:** cinematic, minimal, high-contrast, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#f2f2f2` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** medium, light, thin
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="cursor-hover px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-colors flex items-center gap-2 text-sm font-medium group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first hero word in white bold uppercase sans and the second in dim grey italic serif
- **Do:** Keep body copy small, grey and in the right-hand column
- **Do:** Use a thin outlined circular button for the Explore action
- **Don't:** Don't add colour; the page is black, white and grey
- **Don't:** Don't set the grey italic at full white; its dimness is part of the look
- **Don't:** Don't place the hero text over imagery; the black ground is the stage

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
