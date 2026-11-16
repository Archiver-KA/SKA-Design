# Design system — AI Agent Platform Landing Page Template

`SN-W00030` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained dark infrastructure page: a near-black ground (#050505) with white Inter headlines, where the large title carries the design and its last line fades toward grey. Red (#ef4444) appears only in the logo, the live badge and small status dots, while the primary button is solid white. A code-like terminal window sits below the hero to show the product in use.

**Mood:** restrained, dark, engineered, precise, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#d6d3d1` · `#ef4444` · `#78716c` · `#050505` · `#292524` · `#e7e5e4` · `#f97316` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow`, `shadow-sm`, `shadow-[0_0_10px_rgba(239,68,68,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative px-4 py-2 text-xs font-medium rounded-md transition-all flex items-center gap-2 text-black bg-white hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#292524',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at about 72px in white, with the last line in grey
- **Do:** Use solid white for the primary button
- **Do:** Show the product as a terminal or code window beneath the hero
- **Don't:** Don't fill the primary button with colour; the white button is the main action
- **Don't:** Don't use red for large areas; it is for the logo and status dots
- **Don't:** Don't add a light section between dark ones; the page stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
