# Design system — Pizza Restaurant Landing Page Template

`SN-W02957` · food-beverage · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A loud, poster-style pizza page on a saturated yellow ground with a heavy uppercase black headline set in three short lines. Black pill buttons and a thin outline button carry the actions, and a few faint geometric shapes float behind the hero. The page is black on yellow only, so type scale and the marquee-style strip do the work.

**Mood:** loud, bold, playful, fast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#262626` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-xl`, `max-w-screen-lg`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-pizza-black text-pizza-yellow px-6 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-800 transition-colors btn-glow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Menu list (`menu-list`)
5. Awards / press (`awards-press`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #262626;
  --color-border: #ffffff;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#262626',
    line: '#ffffff',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase sans in black, in short punchy lines
- **Do:** Use black pill buttons for the primary action and a thin outline for the secondary
- **Do:** Keep decorative shapes faint and behind the headline
- **Don't:** Don't use a light page ground; the ground is saturated yellow.
- **Don't:** Don't set headlines in a serif or a light weight
- **Don't:** Don't put more than two button styles in one hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
