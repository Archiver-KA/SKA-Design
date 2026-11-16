# Design system — Plumbing Services Landing Page Template

`SN-W04053` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A plain, functional French service page on an off-white ground. The headline is large dark sans-serif on two lines, with the second line set in grey for tonal contrast. Actions are solid near-black pills with a light outlined companion, and small icons mark each feature. Colour is kept neutral, so the page reads as practical.

**Mood:** practical, neutral, clear, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#ffffff` · `#71717a` · `#a1a1aa` · `#27272a` · `#f4f4f5` · `#fafafa` · `#10b981` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-zinc-900/10`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-10`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in grey
- **Do:** Use near-black (#18181b) for primary pills
- **Do:** Keep the page neutral and use colour only for small status indicators
- **Don't:** Don't introduce green as a page colour
- **Don't:** Don't use heavy shadows on the cards
- **Don't:** Don't centre long paragraphs of body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
