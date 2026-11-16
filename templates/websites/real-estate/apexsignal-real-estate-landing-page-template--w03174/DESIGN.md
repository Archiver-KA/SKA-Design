# Design system — ApexSignal Real Estate Landing Page Template

`SN-W03174` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, high-contrast property sales page with a grey photographic background, a heavy white grotesk headline and a red call-to-action block. Red (#d92f24) is the only accent, used on the primary button and the brand mark. The layout is direct and sales-led rather than decorative.

**Mood:** blunt, high-contrast, direct, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d92f24` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#111111` · `#d92f24` · `#4ade80` · `#e8d45a` · `#f7f6f3` · `#16a34a` · `#050505` · `#b5261d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight, IBM Plex Mono
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 36px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#D92F24] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#b5261d] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. 3D / canvas scene (`3d-canvas`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #000000;
  --color-accent: #d92f24;
  --color-accent-2: #4ade80;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#000000',
    accent: '#d92f24',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Use red (#d92f24) only for the primary button and the brand mark
- **Do:** Set headlines in Inter Tight at heavy weight in white
- **Do:** Keep the hero dark with a photographic or textured background
- **Don't:** Don't use the green or yellow accents from the palette in the hero
- **Don't:** Don't put light backgrounds behind the hero text
- **Don't:** Don't add decorative gradients to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
