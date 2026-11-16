# Design system — Developer Portfolio Website Template

`SN-W01967` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Restrained monochrome portfolio: a near-black ground (#09090b) with zinc text, and white used for the name headline and the primary Contact button. No brand colour shows in the first screen, so hierarchy comes from the large Inter name, a short role line and a column of grey paragraphs. A translucent glass card and thin #27272a borders do the layout work.

**Mood:** monochrome, quiet, spare, neutral, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#e4e4e7` | Primary action and highlights |

Palette by frequency of use: `#6366f1` · `#818cf8` · `#27272a` · `#e4e4e7` · `#ffffff` · `#18181b` · `#71717a` · `#a1a1aa` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 14px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-screen-xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-400">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-white (#e4e4e7) for the primary button and white (#ffffff) for the name headline
- **Do:** Keep paragraphs in zinc grey (#a1a1aa) at a comfortable line length
- **Do:** Separate the profile card from the page with #27272a borders and a glass background
- **Don't:** Don't rely on the indigo (#6366f1) in the palette; it does not show on the first screen
- **Don't:** Don't add gradients or glows; the first screen is flat black and grey
- **Don't:** Don't use coloured buttons; emphasis here is white on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
