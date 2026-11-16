# Design system — DJ & Music Artist Landing Page Template

`SN-W03689` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, industrial layout built around a large dark knob with an orange (#f97316) ring, which becomes the page's main graphic. The headline is a sans-serif with the second phrase in a lighter grey, and the body text is small and muted. Orange marks the one control that matters, so the knob reads as the page's signature.

**Mood:** industrial, precise, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#d4d4d8` · `#52525b` · `#09090b` · `#f97316` · `#18181b` · `#a1a1aa` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · body 20px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-inner`, `shadow-[0_1px_0_rgba(255,255,255,0.1)]`, `shadow-[0_1px_0_rgba(255,255,255,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-1.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Listings (`listings`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #09090b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#09090b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for the knob ring and the primary action only
- **Do:** Set the headline in sans-serif, with the second phrase in lighter grey
- **Do:** Keep the knob and hardware graphics as the single large visual
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't use playful shapes or rounded illustrations
- **Don't:** Don't set body copy in white at full size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
