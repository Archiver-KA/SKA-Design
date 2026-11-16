# Design system — MicAyla Global Asset Management Landing Page Template

`SN-W02114` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet asset-management page on a near-white ground [#fafafa] with a soft grey wash. The three-line headline steps through black serif, light grey [#a1a1aa] and then black italic, so the middle phrase recedes and the outer lines carry the weight. A floating white nav pill sits at the top with a solid near-black button at its end, and a small grey monospaced label marks the section.

**Mood:** quiet, measured, editorial, neutral, credible

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#71717a` · `#a1a1aa` · `#52525b` · `#f4f4f5` · `#27272a` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 100px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-none`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="rounded-full bg-zinc-900 dark:bg-white px-5 py-2 text-xs font-semibold text-white dark:text-zinc-950 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Team (`team`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #18181b;
  --font-display: "Newsreader", serif;
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
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#18181b',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, stepping from black to light grey (#a1a1aa) to black italic.
- **Do:** Keep the nav as a floating white pill with a solid near-black button at its end.
- **Do:** Use a small monospaced grey label above the headline to mark the section number.
- **Don't:** Don't add a second accent colour; the page is black, grey and white.
- **Don't:** Don't make the grey phrase darker than the black lines; the step-down is the hierarchy.
- **Don't:** Don't set the nav as a full-width bar; it floats.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
