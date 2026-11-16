# Design system — Step-by-Step Prototype Workflow

`SN-W00740` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain black section with a centred heading in Manrope, where one word, Prototype, takes a pink-to-peach gradient. Three numbered steps sit in gradient circles (#fdba74 to #c084fc) separated by thin vertical rules, and a single gradient pill button closes the section. Gradient is the only colour device, and it is kept to the highlighted word, the step numbers and the button.

**Mood:** minimal, gradient-led, instructional, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fdba74` · `#c084fc` · `#f9a8d4` · `#d1d5db` · `#60a5fa` · `#e5e7eb` · `#9333ea` · `#f472b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Clashdisplay, Clash Display
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 18px
- **Weights in use:** bold, semibold, normal
- **Letter spacing:** `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-10`, `gap-0`

**Primary button**

```html
<a class="inline-block rounded-lg px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 transition hover:brightness-110 text-black font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 text-base">…</a>
```

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #000000;
  --color-accent: #fdba74;
  --color-accent-2: #c084fc;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#000000',
    accent: '#fdba74',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use gradient fills only on the highlighted heading word, the step numbers and the primary button
- **Do:** Lay out steps as three equal columns separated by hairline vertical rules
- **Do:** Set headings and step titles in Manrope, with short body copy under each step
- **Don't:** Don't add gradients to body text or card backgrounds
- **Don't:** Don't put a surface colour behind the steps; the black ground stays
- **Don't:** Don't use more than one gradient-filled button per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
