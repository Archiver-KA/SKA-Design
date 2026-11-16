# Design system — Digital Marketing Agency Landing Page Template

`SN-W01544` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a near-black headline in a geometric display face with slightly irregular letterforms, which gives the page its personality. A lime megaphone illustration is the single bold colour and sits beside the copy, with small circular badges echoing the lime. The primary button is solid black and the navigation is plain, so the copy stays black and grey.

**Mood:** playful, clean, illustrative, geometric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#b9ff66` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#18181b` · `#b9ff66` · `#d4d4d8` · `#27272a` · `#52525b` · `#e4e4e7` · `#dc2626` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-[40px]` (40px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="border border-zinc-300 rounded-xl px-6 py-3 text-black hover:bg-zinc-900 hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-border: #000000;
  --color-accent: #b9ff66;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e4e4e7',
    ink: '#18181b',
    line: '#000000',
    accent: '#b9ff66',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#b9ff66) in illustrations and small badges, not in text or large fills
- **Do:** Set headlines in a geometric display face at large size in black
- **Do:** Use a solid black button for the primary action
- **Don't:** Don't put lime behind body copy
- **Don't:** Don't add a second bright colour to the illustration
- **Don't:** Don't drop the outline strokes from the illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
