# Design system — Data Enrichment SaaS Landing Page Template

`SN-W00331` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained, editorial light page on a warm off-white ground (#fafaf9) with near-black sans headlines. One word, refined, is set in a grey italic serif, a single gesture of contrast that carries the tone. Buttons are dark or thin-outlined, and the product preview sits below as a flat card, so the page reads precise and calm.

**Mood:** editorial, calm, precise, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#fafaf9` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#fafaf9` · `#ffffff` · `#000000` · `#1c1917` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter-custom`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-black text-white px-4 py-2 text-xs font-medium rounded-lg hover:bg-stone-800 transition-all shadow-lg shadow-stone-200/50 border border-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #1c1917;
  --color-border: #fafaf9;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#1c1917',
    line: '#fafaf9',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set one emphasis word per headline in grey italic serif
- **Do:** Keep the page on warm off-white (#fafaf9) with white cards
- **Do:** Use near-black (#1c1917) for primary buttons
- **Don't:** Don't add gradient fills to headlines or buttons
- **Don't:** Don't use amber as a fill
- **Don't:** Don't add glow shapes behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
