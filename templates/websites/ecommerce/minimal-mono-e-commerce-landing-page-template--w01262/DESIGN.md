# Design system — Minimal Mono E-commerce Landing Page Template

`SN-W01262` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A rugged outdoor hero: a desaturated motorcycle photograph under a grey overlay, with a bold white monospace headline, PROVISIONS FOR THE WILD, stacked over three lines. A tan solid button sits beside a white outlined one, and a thin charcoal bar on top carries the shipping message. Tan is the one warm colour, and the monospace sets the tone.

**Mood:** rugged, outdoor, monospaced, warm-neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a58c69` | Page ground |
| Surface | `#1c1a19` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1c1a19` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a58c69` | Primary action and highlights |

Palette by frequency of use: `#a58c69` · `#1c1a19` · `#ffffff` · `#f0f0f0` · `#000000` · `#f8f8f8` · `#e5e5e5` · `#fafafa` · `#8f6f4a` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 16px · body 12px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Content width:** `max-w-[1792px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-mono border border-[#1c1a19] bg-[#1c1a19] text-white rounded-none transition-all hover:opacity-90">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Product grid (`product-grid`)
6. Timeline (`timeline`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #a58c69;
  --color-surface: #1c1a19;
  --color-text: #ffffff;
  --color-muted: #1c1a19;
  --color-border: #ffffff;
  --color-accent: #a58c69;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a58c69',
    surface: '#1c1a19',
    ink: '#ffffff',
    muted: '#1c1a19',
    line: '#ffffff',
    accent: '#a58c69',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold monospace, uppercase, stacked over several lines
- **Do:** Use the tan (#a58c69) for the primary button only
- **Do:** Keep the photograph desaturated under a grey overlay
- **Don't:** Don't use a proportional sans for headlines; the monospace is the identity
- **Don't:** Don't use tan for large fills or backgrounds
- **Don't:** Don't brighten the photo; the overlay keeps the type legible

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
