# Design system — TheCodeCompany

`SN-W04308` · other-landing · light mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A stark light page on pale grey [#f2f2f2] with heavy black uppercase headlines set very large. A big grey circular image sits in the centre of the hero, framed by thin lines and a small circular text badge, and the single black button is the only solid colour. The design depends on contrast, white space and monochrome tones.

**Mood:** stark, monochrome, bold, editorial, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f2f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#a1a1aa` · `#71717a` · `#27272a` · `#d4d4d8` · `#e4e4e7` · `#52525b` · `#18181b` · `#f5f4e8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h3 14px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[3rem]` (3rem), `rounded-[2rem]` (2rem)
- **Content width:** `max-w-[95%]`, `max-w-[1800px]`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-6`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="border border-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2f2f2;
  --color-surface: #ffffff;
  --color-text: #09090b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f2f2',
    surface: '#ffffff',
    ink: '#09090b',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black (#09090b) for headlines and the primary button only
- **Do:** Keep headlines uppercase and set them very large
- **Do:** Frame hero imagery with thin lines and white space rather than shadows
- **Don't:** Don't add colour accents; the page stays monochrome
- **Don't:** Don't add drop shadows or gradient fills to the hero image
- **Don't:** Don't set hero headlines in a small size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
