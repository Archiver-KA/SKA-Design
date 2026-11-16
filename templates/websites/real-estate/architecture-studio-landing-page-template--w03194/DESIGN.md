# Design system — Architecture Studio Landing Page Template

`SN-W03194` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, editorial studio page on pale off-white, with a heavy near-black sans-serif headline whose middle word is set in grey serif italic, the stylistic signature of the page. A small black logo block and a black button carry the brand. Labels sit in small monospace caps above the headline, and a large grey image frame sits below.

**Mood:** editorial, minimal, contrast, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#34d399` · `#f4f4f5` · `#065f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Awards / press (`awards-press`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
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
    background: '#ffffff',
    surface: '#e4e4e7',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, with the middle word in grey serif italic
- **Do:** Use the black (#18181b) for the logo block and the Inquire button
- **Do:** Set labels in small monospace caps above the headline
- **Don't:** Don't add colour; the page is black, grey and off-white
- **Don't:** Don't set body copy in the italic serif
- **Don't:** Don't use the green from the palette in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
