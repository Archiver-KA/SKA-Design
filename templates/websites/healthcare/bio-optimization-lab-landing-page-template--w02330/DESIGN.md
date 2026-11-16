# Design system — Bio-Optimization Lab Landing Page Template

`SN-W02330` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, technical lab page on a pale grey-white ground, with near-black navy text (#0f172a) and a navy pill for the login button. The headline is a heavy uppercase grotesk broken over several lines, with the word AS set in light grey italic, which gives the page its signature. A grayscale photograph sits in a square frame beside the copy, so the look is clinical and restrained.

**Mood:** clinical, technical, restrained, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#2e5c55` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#0f172a` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#cbd5e1` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-main)
- **Body:** var(--font-main)
- **Loaded families:** Manrope, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 24px · body 12px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="interactable px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-widest text-slate-500 hover:bg-white hover:text-[#2E5C55] hover:shadow-sm transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Menu list (`menu-list`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #0f172a;
  --color-text: #0f172a;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --color-accent-2: #e2e8f0;
  --font-display: "var(--font-main)", sans-serif;
  --font-body: "var(--font-main)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#0f172a',
    ink: '#0f172a',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#0f172a',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['var(--font-main)'], sans: ['var(--font-main)'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans with one line in light grey italic for contrast.
- **Do:** Keep the page on the pale ground (#f8fafc) and use navy (#0f172a) for text and the primary button.
- **Do:** Frame hero photography as a square, grayscale crop beside the copy.
- **Don't:** Don't use dark teal as the page background; the page is light.
- **Don't:** Don't add colour; the page is monochrome.
- **Don't:** Don't set headlines in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
