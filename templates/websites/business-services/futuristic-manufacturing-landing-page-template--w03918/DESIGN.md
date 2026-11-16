# Design system — Futuristic Manufacturing Landing Page Template

`SN-W03918` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark violet ground carries a very large display headline set in a magenta-to-violet gradient, which gives the page a theatrical, atmospheric tone. Syne supplies the wide, geometric character of the headline, while Inter handles the body. Three translucent cards with small monospace labels present the audiences side by side. Soft blur and glass surfaces keep the page layered without solid fills.

**Mood:** theatrical, atmospheric, layered, futuristic, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#150a1f` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e879d9` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#14b8a6` · `#2dd4bf` · `#150a1f` · `#f3f4f6` · `#e879d9` · `#6b7280` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Syne, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h3 30px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(168,85,247,0.4)]`, `shadow-[0_0_30px_rgba(232,121,217,0.6)]`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #150a1f;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #e879d9;
  --color-accent-2: #14b8a6;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#150a1f',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#e879d9',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Syne at very large size, with the magenta gradient (#e879d9) over the key words.
- **Do:** Use a small monospace label above each card title to name the audience.
- **Do:** Keep cards as translucent dark glass with thin borders, three in a row.
- **Don't:** Don't put solid bright fills behind the cards; they stay translucent.
- **Don't:** Don't use more than two accent hues in one view.
- **Don't:** Don't set body copy in the monospace face; it is for labels only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
