# Design system — AI YouTube Dubbing Chrome Extension Landing Page Template

`SN-W00198` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark page on near-black (#171717) with a bold white headline whose second line drops to a muted grey. The two buttons are a solid white primary and a dark outlined secondary, and a small status pill sits above the headline. A dark browser-window mock sits below the buttons with an address bar, and the glow behind the hero is soft and neutral.

**Mood:** dark, neutral, simple, product-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#262626` · `#171717` · `#6366f1` · `#a3a3a3` · `#d4d4d4` · `#10b981` · `#404040` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group relative px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #6366f1;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans-serif with the second line in muted grey
- **Do:** Use the solid white button for the install action and a dark outlined button for the demo
- **Do:** Keep the glow neutral and place the browser mock below the hero
- **Don't:** Don't add green or indigo accents; the page is white and grey
- **Don't:** Don't use a light background; the page stays dark
- **Don't:** Don't drop the status pill above the headline; it sets the version tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
