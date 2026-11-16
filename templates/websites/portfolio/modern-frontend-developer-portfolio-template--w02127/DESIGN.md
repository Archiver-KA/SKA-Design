# Design system — Modern Frontend Developer Portfolio Template

`SN-W02127` · portfolio · light mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A minimal Russian-language developer portfolio on an off-white ground (#fafafa) with near-black (#18181b) headlines. Emphasis is made with tone rather than colour: one hero word is set in mid grey (#71717a), and the nav and buttons are plain black pills. A faint glow sits in the top area, but the content stays monochrome.

**Mood:** minimal, monochrome, clean, modern, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#71717a` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#f4f4f5` · `#fafafa` · `#52525b` · `#27272a` · `#a1a1aa` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-zinc-900/10`, `shadow-md`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-sm shadow-zinc-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #71717a;
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
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#71717a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word in the hero in mid grey (#71717a) and the rest in #18181b.
- **Do:** Use black pill buttons for primary and secondary actions.
- **Do:** Keep the page on #fafafa, with white (#ffffff) cards where sections need separating.
- **Don't:** Don't add a bright accent colour; the design is built on neutrals.
- **Don't:** Don't put the faint glow behind text blocks.
- **Don't:** Don't use the green (#34d399) as a link colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
