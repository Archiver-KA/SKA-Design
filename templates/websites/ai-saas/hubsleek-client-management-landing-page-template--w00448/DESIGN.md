# Design system — Hubsleek Client Management Landing Page Template

`SN-W00448` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black, monochrome SaaS page where white is the accent: white pill buttons, a white headline and a muted grey second line. Type is Inter at large size, with the second headline line dropping to grey for contrast. Depth comes from a faint dark product frame and a soft shadow under the hero buttons rather than from colour. The page reads restrained and tool-like.

**Mood:** monochrome, restrained, tool-like, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#525252` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#fb923c` · `#525252` · `#f97316` · `#0a0a0a` · `#000000` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #525252;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#050505',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#525252',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white pill buttons for the primary hero action and outlined dark pills for secondary ones
- **Do:** Set the second headline line in muted grey (#737373)
- **Do:** Keep the hero centred with a small pill label above the headline
- **Don't:** Don't add a coloured accent; the page is monochrome
- **Don't:** Don't use square corners on the hero buttons
- **Don't:** Don't use bright colour fills in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
