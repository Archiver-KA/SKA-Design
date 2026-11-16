# Design system — AI E-commerce Automation SaaS Landing Page Template

`SN-W01075` · ecommerce · light mode · Sinera Atlas theme `market` · language `pt-BR`

## Direction

A high-contrast marketing page on a near-white ground, with a solid black primary button and a single yellow marker behind one headline word. The type is heavy Inter set tightly, and a thin announcement bar sits above the navigation. Partner marketplace logos run in a muted row under the hero, which keeps the page sober and businesslike.

**Mood:** direct, sober, high contrast, commercial, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#e4e4e7` · `#a1a1aa` · `#71717a` · `#3f3f46` · `#f4f4f5` · `#27272a` · `#fafafa` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 10px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-card`, `shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-black text-white text-xs font-bold py-2 px-4 rounded w-full hover:bg-zinc-800 transition-colors flex justify-between items-center font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
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
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow marker behind one headline word only
- **Do:** Keep primary buttons solid black with white text
- **Do:** Keep partner logos in a single muted row
- **Don't:** Don't add gradients behind the hero text
- **Don't:** Don't use a second highlight colour in the headline
- **Don't:** Don't set long body paragraphs centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
