# Design system — Fashion Model Agency Landing Page Template

`SN-W02746` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `sr`

## Direction

Near-black agency page with a wide-tracked wordmark and a large light sans headline in two lines. The second line fades from light grey toward dark, so the words sit in a gradient of tone rather than colour. A white filled pill is the main action with a dark ghost button beside it, and faint photographs sit behind the hero at low opacity.

**Mood:** dark, fashion, minimal, tonal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#09090b` · `#71717a` · `#52525b` · `#18181b` · `#e4e4e7` · `#f4f4f5` · `#27272a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[100rem]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-white overflow-hidden rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md hidden md:inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light sans in two lines, with the second line in a grey gradient
- **Do:** Use white filled pills for the main action and dark ghost buttons for secondary
- **Do:** Keep the photography behind the hero at low opacity so it reads as texture
- **Don't:** Don't add colour to the headline or buttons; the page is monochrome
- **Don't:** Don't brighten the background photography; it sits under the dark overlay
- **Don't:** Don't track the headline wide; only the wordmark uses letter spacing

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
