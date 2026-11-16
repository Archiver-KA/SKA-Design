# Design system — Website Services Navigation UI

`SN-W04132` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A deep indigo panel holds the hero, with a bold white sans headline whose second line is set in cyan (#06b6d4). A floating rounded indigo navigation strip sits above the panel, with a cyan button at its right end. Small translucent tiles carry the stats, and a secondary outline button sits beside the headline.

**Mood:** bold, glassy, indigo, futuristic, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#06b6d4` · `#22d3ee` · `#312e81` · `#38bdf8` · `#34d399` · `#0ea5e9` · `#fafafa` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 18px · h3 30px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="hidden md:block text-xs lg:text-sm font-medium bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 px-4 lg:px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:from-sky-400 hover:to-emerald-400 text-white font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #312e81;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in cyan (#06b6d4) on the indigo panel
- **Do:** Keep the navigation as a floating rounded indigo strip above the hero
- **Do:** Use cyan only for the header button and one headline phrase
- **Don't:** Don't use cyan for body text
- **Don't:** Don't put the navigation on a light background
- **Don't:** Don't add more than two stat tiles in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
