# Design system — Agriculture Brand Landing Page Template

`SN-W03795` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm cream landing page with a large sans-serif headline in near-black, where the second line is set in a muted grey-taupe for contrast. The hero is open and sparse, with a faint curved shape behind the copy and black pill buttons as the only solid elements. Heritage comes from the cream ground and restraint rather than from colour, so the page reads as calm and grounded.

**Mood:** warm, calm, grounded, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5ead7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f5ead7` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#000000` · `#f5ead7` · `#ffffff` · `#34d399` · `#111111` · `#d1fae5` · `#065f46` · `#d4c5ad` · `#27272a` · `#ca8a04`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-black/5`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-[#F5EAD7] text-black font-semibold rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5ead7;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #f5ead7;
  --color-accent-2: #d1fae5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5ead7',
    surface: '#ffffff',
    ink: '#000000',
    line: '#000000',
    accent: '#f5ead7',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page on warm cream (#f5ead7) and headlines in near-black (#000000).
- **Do:** Set the second headline line in muted grey, not in a second accent colour.
- **Do:** Use black pill buttons for primary actions and outlined pills for secondary ones.
- **Don't:** Don't add a bright accent colour to the hero.
- **Don't:** Don't place the headline on a dark background.
- **Don't:** Don't add shadows under the pill buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
