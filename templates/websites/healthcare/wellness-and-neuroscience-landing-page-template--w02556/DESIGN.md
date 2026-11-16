# Design system — Wellness & Neuroscience Landing Page Template

`SN-W02556` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A pale, editorial neuroscience page on a lavender-grey ground (#ebe9f5) with dark ink headlines in a serif, one of which carries an italic clause. Three short columns sit below the hero with small serif headings and light grey bodies, so structure comes from type and spacing rather than cards or colour. The accent tints (#f5e6df and #e1e5f2) are so pale they barely register, and the stance is quiet and intellectual.

**Mood:** quiet, intellectual, editorial, pale

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebe9f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5e6df` | Primary action and highlights |
| Second accent | `#e1e5f2` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#a1a1aa` · `#ffffff` · `#27272a` · `#52525b` · `#e4e4e7` · `#f4f4f5` · `#e6efea` · `#e1e5f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-zinc-200/50`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs tracking-wide font-medium bg-white/50 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full hover:bg-white/80 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ebe9f5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f5e6df;
  --color-accent-2: #e1e5f2;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebe9f5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f5e6df',
    accent2: '#e1e5f2',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif, with one italic clause per heading
- **Do:** Keep the ground in the pale lavender (#ebe9f5) and the text in near-black (#18181b)
- **Do:** Structure the content as three short columns with small serif headings
- **Don't:** Don't use the pale peach or blue tints as text colours; they barely register
- **Don't:** Don't add bold colour blocks; the page uses tints only
- **Don't:** Don't put heavy borders around the columns; they sit open

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
