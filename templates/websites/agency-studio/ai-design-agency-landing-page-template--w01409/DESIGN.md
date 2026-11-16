# Design system — AI Design Agency Landing Page Template

`SN-W01409` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A floating glass navigation pill sits on a black ground. The nav is a translucent dark pill with a thin border and a white pill button at its end. Display headlines use Instrument Serif, with glass panels and gradient fills on a pure black ground with white type.

**Mood:** glassy, dark, minimal, serif-accented, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Barlow
- **Scale (largest breakpoint):** h3 36px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1.5 ml-2">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
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
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Use the glass nav pill: translucent dark fill, thin border, white pill button at the end.
- **Do:** Set display headlines in Instrument Serif in white on pure black (#000000).
- **Do:** Keep gradient fills and glass panels to the hero and cards, not to body text.
- **Don't:** Don't add a bright accent; the page is black and white.
- **Don't:** Don't use a light page ground.
- **Don't:** Don't square off the nav; the pill shape is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
