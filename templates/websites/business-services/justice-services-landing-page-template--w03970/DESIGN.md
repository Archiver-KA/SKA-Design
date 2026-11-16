# Design system — Justice Services Landing Page Template

`SN-W03970` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A restrained, serious page on near-black (#000000). The wordmark is white beside a small red-orange wave mark, and the navigation is small, uppercase and widely spaced. The hero is largely empty dark space, so the page relies on spacing and a few red details rather than imagery.

**Mood:** restrained, serious, spare, dark, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#dc2626` · `#171717` · `#ef4444` · `#000000` · `#525252` · `#7f1d1d` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** var(--font-sans)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-red-900/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3.5 bg-red-700 text-white rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-900/20 border border-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Services (`services`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black (#000000)
- **Do:** Use red (#dc2626) for the logo mark and small details only
- **Do:** Set navigation in small uppercase with wide letter spacing
- **Don't:** Don't add bright gradients to the dark hero
- **Don't:** Don't use red for large fills or buttons
- **Don't:** Don't fill the hero with imagery that competes with the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
