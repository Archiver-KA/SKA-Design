# Design system — AI Agency HighLevel Landing Page Template

`SN-W01363` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a large white Inter headline in which the word Agency is filled with a pale lilac-to-indigo gradient. Indigo (#6366f1) appears in the glow and the status badge, and a white primary button sits beside a dark outlined one. The first screen is restrained, with the gradient on a single word carrying the emphasis.

**Mood:** restrained, dark, technical, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a3a3a3` · `#737373` · `#262626` · `#171717` · `#0a0a0a` · `#a5b4fc` · `#818cf8` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative px-4 py-2 rounded-full bg-white text-black text-sm font-semibold overflow-hidden transition-all hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white Inter, with the key noun filled by the lilac-indigo gradient.
- **Do:** Use indigo (#6366f1) for accents and the status badge, not for large fills.
- **Do:** Make the primary button white on the dark ground and the secondary dark and outlined.
- **Don't:** Don't apply the gradient to more than one word per headline.
- **Don't:** Don't apply the gradient to body copy or small labels.
- **Don't:** Don't use a bright coloured fill for the hero button; the primary is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
