# Design system — GrabGO Delivery Landing Page Template

`SN-W02382` · healthcare · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, friendly delivery hero on a flat terracotta ground, with a white headline and the word fast set in the orange (#fe6132) to pop against the background. The floating pill nav in white and the scalloped edge at the bottom give it a playful, rounded feel. The first screen is one solid warm colour, and the orange is used sparingly for the highlight and the download button.

**Mood:** playful, energetic, rounded, warm, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fe6132` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#4b5563` · `#f3f4f6` · `#fe6132` · `#111827` · `#d1d5db` · `#fafafa` · `#0f172a` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 30px · body 20px
- **Weights in use:** semibold, medium, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-sm'`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-[128px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex items-center space-x-2 bg-brand-primary text-white px-5 h-[45px] rounded-full font-extrabold text-xl tracking-tight hover:scale-105 transition-transform">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-border: #ffffff;
  --color-accent: #fe6132;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#4b5563',
    line: '#ffffff',
    accent: '#fe6132',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif white, with one word in orange (#fe6132).
- **Do:** Use the floating white pill nav and rounded buttons throughout.
- **Do:** Keep the page on one flat ground colour per section, with no gradients.
- **Don't:** Don't set body text in the orange on the terracotta ground; contrast is too low.
- **Don't:** Don't use the orange for large background areas.
- **Don't:** Don't add a second bright accent beside the orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
