# Design system — Aurelia Gaming — Premium Game Media Template

`SN-W03672` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic hero in black with a large white serif headline, shown in a blurred, half-faded state that suggests motion or a video loop. The navigation is a floating cream bar, which frames the dark screen with a warm edge. Serif type does most of the expressive work, and small letterspaced labels mark the corners.

**Mood:** cinematic, moody, editorial, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f3ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171512` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ccff00` · `#78716c` · `#57534e` · `#d6d3d1` · `#d6ff58` · `#262626` · `#171717` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.75rem]` (1.75rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_12px_35px_rgba(35,24,18,0.08)]`, `shadow-md`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Video / media (`video-media`)
5. Services (`services`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f6f3ef;
  --color-surface: #ffffff;
  --color-text: #171512;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --color-accent: #ccff00;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f3ef',
    surface: '#ffffff',
    ink: '#171512',
    muted: '#78716c',
    line: '#d6d3d1',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, in white on dark sections
- **Do:** Use the floating cream navigation bar over the hero
- **Do:** Keep corner labels small, uppercase and widely tracked
- **Don't:** Don't use the bright lime accent (#ccff00) for large fills; it works only as a small signal
- **Don't:** Don't use a sans-serif for display type
- **Don't:** Don't stack more than one text block in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
