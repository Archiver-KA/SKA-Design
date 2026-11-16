# Design system — Synergeus AI Fintech Landing Page Template

`SN-W01043` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page where the headline is a large serif (Instrument Serif) in white, with the emphasised phrase set in italic, and that serif-italic pairing is the identity. A floating dark pill navigation sits above the hero, and the primary call to action is a white pill with a black switch inside. The only colour comes from the green-tinted product imagery in the card below.

**Mood:** editorial, monochrome, elegant, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1a1a1a` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter Tight, \'Instrument Serif\
- **Scale (largest breakpoint):** h1 102px · h2 21px · h3 26px · body 13px
- **Weights in use:** normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.09375rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[160px]`, `max-w-[1200px]`
- **Section padding:** `py-20`, `py-[9px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-2.5`

**Primary button**

```html
<a class="rounded-full bg-white px-5 py-2.5 text-[0.875rem] font-normal text-black">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Dashboard preview (`dashboard-preview`)
3. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1a1a1a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif in white, with the key phrase in italic
- **Do:** Use a floating dark pill for the navigation, centred above the hero
- **Do:** Use white pills (#ffffff) on black for the primary call to action
- **Don't:** Don't set the headline in a sans-serif; the serif italic is the identity
- **Don't:** Don't put the navigation on a full-width bar; it floats
- **Don't:** Don't add a second accent colour; the page is black and white plus the imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
