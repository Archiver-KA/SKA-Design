# Design system — Futuristic Engineering Portfolio Landing Page Template

`SN-W02027` · portfolio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm stone ground (#edebdd) with an engineering-drawing feel: three stacked black headline words, with FORM in deep red (#810100) as the one colour accent. A greyscale wave-like image sits in a framed box with corner brackets and crosshair marks, and small monospaced labels run along the edges. The bilingual labels and a black square glyph give the page a technical, catalogue-like tone.

**Mood:** technical, stark, catalogue-like, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#edebdd` | Page ground |
| Text | `#1b1717` | Headings and primary copy |
| Border | `#1b1717` | Hairlines, dividers, outlines |
| Accent | `#810100` | Primary action and highlights |
| Second accent | `#810100` | Supporting highlights |

Palette by frequency of use: `#edebdd` · `#810100` · `#1b1717` · `#0a0a0a` · `#630000` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, Noto Sans SC
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 48px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden sm:flex px-5 py-2 bg-dark dark:bg-cream text-cream dark:text-dark hover:bg-red dark:hover:bg-red hover:text-cream dark:hover:text-cream transition-colors text-xs font-mono uppercase tracking-wider border border-dark dark:border-cream items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #edebdd;
  --color-text: #1b1717;
  --color-border: #1b1717;
  --color-accent: #810100;
  --color-accent-2: #810100;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#edebdd',
    ink: '#1b1717',
    line: '#1b1717',
    accent: '#810100',
    accent2: '#810100',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep red (#810100) for one headline word and the status tag only
- **Do:** Frame images with corner brackets and thin rules, as in technical drawings
- **Do:** Keep small labels in a monospaced face along the edges
- **Don't:** Don't colour the image; it stays greyscale against the stone ground
- **Don't:** Don't use the red for large areas
- **Don't:** Don't drop the corner brackets; they define the frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
