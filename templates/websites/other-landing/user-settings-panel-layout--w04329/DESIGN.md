# Design system — User Settings Panel Layout

`SN-W04329` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet settings screen on a warm off-white ground, with rounded white groups for account and preferences. Each group is one card with thin rules between its rows, and each row pairs a plain label on the left with a native select on the right. Type is system sans-serif, and the plain grey avatar is the only ornament.

**Mood:** quiet, plain, functional, warm, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · h2 14px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Group settings rows into white cards with thin rules between them
- **Do:** Put each preference label on the left and its control on the right
- **Do:** Use the plain grey avatar as the only ornament
- **Don't:** Don't add accent colours to the settings rows
- **Don't:** Don't set row labels in a bold weight
- **Don't:** Don't split one settings group across two cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
