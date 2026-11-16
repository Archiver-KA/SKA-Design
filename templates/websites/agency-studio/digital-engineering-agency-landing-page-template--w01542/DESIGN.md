# Design system — Digital Engineering Agency Landing Page Template

`SN-W01542` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a bold black sans-serif headline in which one word, Optimized, is underlined by a lime highlight bar, which is the signature. The primary button is lime with black text and the secondary is an outline, and floating status cards on the right show system states in pale grey and lime. Lime is the single accent and it is used sparingly.

**Mood:** fresh, technical, clean, lime-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c1ff72` | Primary action and highlights |
| Second accent | `#002f43` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#c1ff72` · `#a8a29e` · `#292524` · `#e7e5e4` · `#57534e` · `#78716c` · `#d6d3d1` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Montserrat, Geist, Google Sans Flex, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #1c1917;
  --color-border: #e7e5e4;
  --color-accent: #c1ff72;
  --color-accent-2: #002f43;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#1c1917',
    line: '#e7e5e4',
    accent: '#c1ff72',
    accent2: '#002f43',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use lime (#c1ff72) for the highlight under one headline word and the primary button only
- **Do:** Set headlines in Geist bold with tight leading
- **Do:** Keep status cards white with thin borders (#e7e5e4)
- **Don't:** Don't use lime as a page background
- **Don't:** Don't set body text in lime
- **Don't:** Don't add the dark teal (#002f43) to the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
