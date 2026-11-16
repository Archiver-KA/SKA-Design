# Design system — Creative Agency Landing Page

`SN-W01475` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black hero (#000000) with white type, and a single gradient running through the headline's first word, from lavender (#a5b4fc) to pink (#f472b6). The type is a clean geometric sans with generous leading and short, direct copy. Buttons are a solid white primary and a dark outlined secondary, so the gradient word is the only thing that draws the eye on the first screen.

**Mood:** minimal, dark, modern, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f3f4f6` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#a5b4fc` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#374151` · `#a5b4fc` · `#d1d5db` · `#d8b4fe` · `#f472b6` · `#e5e7eb` · `#4f46e5` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 72px · body 24px
- **Weights in use:** light, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-none`, `shadow-lg`, `shadow-indigo-600/10`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="bg-white text-black font-light rounded-md px-7 py-3 hover:bg-opacity-90 transition-all shadow-lg shadow-indigo-600/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #f3f4f6;
  --color-border: #374151;
  --color-accent: #a5b4fc;
  --color-accent-2: #f472b6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#f3f4f6',
    line: '#374151',
    accent: '#a5b4fc',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the headline gradient to one or two words, running from #a5b4fc to #f472b6.
- **Do:** Use a solid white button for the primary action and a dark outlined button for the secondary.
- **Do:** Keep the background pure black (#000000) with white and light-grey text only.
- **Don't:** Don't apply the gradient to body copy or buttons.
- **Don't:** Don't add a light section or photograph to the hero; the first screen stays black.
- **Don't:** Don't use more than one accent gradient on the same screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
