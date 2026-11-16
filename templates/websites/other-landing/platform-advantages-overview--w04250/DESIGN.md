# Design system — Platform Advantages Overview

`SN-W04250` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A split-screen feature layout works in two tones of indigo. A brighter left panel holds a serif headline and two stats, while a deeper right panel stacks five dark feature rows with small coloured icons. The headline's last word is set in pale periwinkle (#818cf8) for emphasis.

**Mood:** structured, bold, indigo, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3730a3` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#4338ca` · `#818cf8` · `#22d3ee` · `#06b6d4` · `#3730a3` · `#ffffff` · `#60a5fa` · `#312e81` · `#3b82f6` · `#c7d2fe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · body 14px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-[0.3em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px)
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full flex items-center justify-between bg-indigo-800/60 hover:bg-indigo-700/60 transition-all duration-300 p-5 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #3730a3;
  --color-text: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #22d3ee;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3730a3',
    ink: '#ffffff',
    accent: '#818cf8',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face, with the last word in periwinkle (#818cf8)
- **Do:** Keep the two panels in two indigo tones with a clear split down the middle
- **Do:** Use small coloured icon tiles in the feature rows, one colour per row
- **Don't:** Don't use light backgrounds in either panel; the indigo tones are the look
- **Don't:** Don't add more than one highlight word to the headline
- **Don't:** Don't make the feature rows light; they sit on the dark panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
