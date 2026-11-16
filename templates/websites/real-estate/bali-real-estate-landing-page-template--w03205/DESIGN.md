# Design system — Bali Real Estate Landing Page Template

`SN-W03205` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, glassy investment page where a near-black brown hero carries a large ghosted BALI word behind the headline. Two translucent stat cards sit on the right with large white figures and short grey captions. The navigation is a rounded pill, and the white button carries the primary action.

**Mood:** dark, glassy, investment-led, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fed7aa` | Primary action and highlights |
| Second accent | `#bfdbfe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#292524` · `#f5f5f4` · `#d6d3d1` · `#e7e5e4` · `#44403c` · `#a8a29e` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[1600px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Map / location (`map-location`)
4. Case studies (`case-studies`)
5. Video / media (`video-media`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #fed7aa;
  --color-accent-2: #bfdbfe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#fed7aa',
    accent2: '#bfdbfe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use large white figures in stat cards, with short grey captions
- **Do:** Keep the ghosted location word low-contrast behind the headline
- **Do:** Keep the nav as a rounded pill and the primary button white
- **Don't:** Don't brighten the ghosted word; it must stay low-contrast
- **Don't:** Don't use coloured accents; the figures carry the emphasis
- **Don't:** Don't place light cards with dark text on the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
