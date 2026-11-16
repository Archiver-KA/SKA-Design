# Design system — Personal Brand Portfolio Website Template

`SN-W02151` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean founder page on white (#ffffff) with near-black headlines in Inter, where the second half of the headline is set in light grey, a quiet two-tone device. The actions are a solid black pill and an outlined pill, and the only colour is a small green availability dot. A tilted white card with a faint border holds a portrait, which gives the hero a soft, editorial depth.

**Mood:** clean, editorial, professional, calm, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#a1a1aa` · `#f4f4f5` · `#e4e4e7` · `#52525b` · `#fafafa` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-zinc-200/50`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-full transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Timeline (`timeline`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black and the second clause in light grey for a two-tone line.
- **Do:** Use a solid black pill for the main action and an outlined pill beside it.
- **Do:** Keep the green (#34d399) to the small availability dot only.
- **Don't:** Don't add colour blocks to the hero; the page is white and grey.
- **Don't:** Don't flatten the tilted portrait card; it carries the hero's depth.
- **Don't:** Don't use the green as a button colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
