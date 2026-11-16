# Design system — AI Automation SaaS Landing Page Template

`SN-W00053` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page carries a large white sans headline with a grey subline and a small purple logo mark. Two pill buttons sit under the copy: a white primary and a dark translucent secondary. A dark product window sits lower in the hero, and the layout is centred and calm. Indigo (#6366f1) is the accent and is kept to the logo and the primary actions.

**Mood:** calm, dark, centred, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#818cf8` · `#27272a` · `#6366f1` · `#09090b` · `#71717a` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="shimmer relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-zinc-900 px-4 text-xs font-medium text-white transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black (#09090b) with white headlines
- **Do:** Use indigo (#6366f1) for the logo and the primary action only
- **Do:** Centre the hero copy and the subline under the headline
- **Don't:** Don't switch to a light page treatment
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't put the product window above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
