# Design system — Astrology & Tarot Landing Page Template

`SN-W03811` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A night-dark landing page where a large serif headline sets its second line in pale gold (#fde68a) against near-black. A round planetary photograph sits behind the right side of the hero as a cosmic focal point. The gold fill and a dark translucent outline form the button pair, and the navigation stays small and quiet.

**Mood:** mystical, dark, elegant, cosmic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |
| Second accent | `#fecdd3` | Supporting highlights |

Palette by frequency of use: `#fde68a` · `#fcd34d` · `#292524` · `#1c1917` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#d6d3d1` · `#f5f5f4` · `#0c0a09`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[inset_-3px_1px_4px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 py-4 bg-amber-200 text-stone-900 rounded-full font-medium text-base hover:bg-amber-100 transition-colors shadow-[0_0_20px_rgba(253,230,138,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #fde68a;
  --color-accent-2: #fecdd3;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#292524',
    accent: '#fde68a',
    accent2: '#fecdd3',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond at a large size, with the second line in pale gold (#fde68a).
- **Do:** Use the gold fill (#fde68a) for the primary button and the highlighted phrase only.
- **Do:** Place the planetary image behind the right side of the hero as the focal point.
- **Don't:** Don't add bright colours beside the gold.
- **Don't:** Don't set long body copy in the display serif.
- **Don't:** Don't place the planetary image behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
