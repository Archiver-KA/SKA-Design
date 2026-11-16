# Design system — Jomar Madarico Portfolio

`SN-W02063` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome, almost empty opening screen on a near-black ground (#0a0a0c), with a centred grey-white headline and a faint radial vignette behind it. A small tracked label sits above the title and a row of dots runs along the bottom as a progress indicator, giving the page a slow, data-stream rhythm. The restraint is the design: no accent colour appears in the hero.

**Mood:** monochrome, restrained, quiet, technical, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0c` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f2ef` | Headings and primary copy |
| Muted text | `#9c988f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5b8d0` | Primary action and highlights |

Palette by frequency of use: `#f5b8d0` · `#ffffff` · `#9c988f` · `#e8e6e3` · `#171717` · `#c9c4bd` · `#b8b4ae` · `#f4efe7` · `#050505` · `#0a0a0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-[77.5rem]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-sm font-normal px-4 py-1.5 rounded-full bg-[#ededed] text-[#1a1a1a] hover:bg-white transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Logo cloud (`logo-cloud`)
5. Integrations (`integrations`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0c;
  --color-surface: #171717;
  --color-text: #f4f2ef;
  --color-muted: #9c988f;
  --color-border: #ffffff;
  --color-accent: #f5b8d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0c',
    surface: '#171717',
    ink: '#f4f2ef',
    muted: '#9c988f',
    line: '#ffffff',
    accent: '#f5b8d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome on near-black (#0a0a0c) with a soft radial vignette.
- **Do:** Set the headline in a grey-white sans, centred, at display size.
- **Do:** Use a row of small dots as the progress indicator, with a tracked uppercase label above the headline.
- **Don't:** Don't add accent colour to the hero.
- **Don't:** Don't crowd the centred headline with navigation or buttons.
- **Don't:** Don't set the headline in pure white; it is grey-white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
