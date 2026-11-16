# Design system — КП для КВН by AVO

`SN-W00846` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A plain, light proposal page with tight, dark grey Inter headlines and grey body copy on a near-white ground. Colour is almost absent: a small grey pill sits above the headline and the sections are numbered in bold. The layout is a text-led document with generous white space, so the hierarchy comes entirely from size and weight.

**Mood:** plain, text-led, spacious, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#71717a` · `#ffffff` · `#a1a1aa` · `#fafafa` · `#52525b` · `#3f3f46` · `#d4d4d8` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at 60px with tight line spacing, in near-black
- **Do:** Number sections in bold and keep them left-aligned
- **Do:** Keep the ground near-white (#fafafa) and use grey for supporting text
- **Don't:** Don't add a colour accent to this layout
- **Don't:** Don't centre the section headings
- **Don't:** Don't use decorative imagery in the proposal text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
