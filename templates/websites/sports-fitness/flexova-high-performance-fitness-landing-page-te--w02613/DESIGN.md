# Design system — Flexova High-Performance Fitness Landing Page Template

`SN-W02613` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black gym hero with a warm glow. Large uppercase sans-serif headlines stack in three lines, with the first word in orange-red over a diffuse red-orange light on the right and the remaining lines in white. A small uppercase line sits above the headline and a solid orange-red button sits in the header, so the page is loud and blunt, with colour carried by light rather than panels.

**Mood:** loud, dark, uppercase, glowing, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Anton, Inter, Oswald
- **Scale (largest breakpoint):** h2 56px · body 18px
- **Weights in use:** bold
- **Letter spacing:** `tracking-wide`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-[4px]` (4px), `rounded-full` (9999px), `rounded-[2px]` (2px)
- **Content width:** `max-w-[1440px]`, `max-w-[500px]`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, with the first word in orange-red.
- **Do:** Use the orange-red only for the header button and the first headline word.
- **Do:** Keep the red-orange glow behind the hero and off the body text.
- **Don't:** Don't use a light background; the page stays near-black.
- **Don't:** Don't put the glow behind body copy.
- **Don't:** Don't add more than one accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
