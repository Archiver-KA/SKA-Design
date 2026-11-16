# Design system — Digital Artisan Portfolio Landing Page Template

`SN-W01978` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Quiet, literary dark page: a near-black ground with a serif headline in two lines, Digital in regular weight and Alchemist in a light italic serif, both in pale grey-white. Navigation is small sans text, with a spaced uppercase status line. A single outlined pill button under the hero is the only control, so the look rests on the serif and the dark field.

**Mood:** literary, quiet, serif-led, moody, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e5e5e5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#737373` · `#a3a3a3` · `#e5e5e5` · `#0a0a0a` · `#333333` · `#555555` · `#262626` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Merriweather
- **Body:** Merriweather
- **Loaded families:** Merriweather, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h3 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-4 px-8 py-4 border border-neutral-800 hover:border-[#D4AF37]/50 rounded-full bg-black/20 backdrop-blur-sm transition-all duration-500 overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #e5e5e5;
  --font-display: "Merriweather", serif;
  --font-body: "Merriweather", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#e5e5e5',
  },
  fontFamily: { display: ['Merriweather'], sans: ['Merriweather'] },
} }
```

## Do and don't

- **Do:** Set the headline in the serif face, with the second word in italic
- **Do:** Keep the ground near-black (#0a0a0a) with pale type (#e5e5e5)
- **Do:** Use a single outlined pill button for the main action under the hero
- **Don't:** Don't mix in a sans display face; the serif carries the look
- **Don't:** Don't use the gold (#d4af37).
- **Don't:** Don't set the italic at small sizes; it works at display scale only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
