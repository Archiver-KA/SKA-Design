# Design system — Industrial Contractor Landing Page Template

`SN-W03945` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A minimal black studio page with a near-black ground (#0a0a0a) and a large bold sans headline in white, where the second line fades to grey. The layout is centred inside a thin-bordered panel, and white and outline buttons carry the calls to action. Amber appears only in small tags and dots, so the page stays monochrome and architectural.

**Mood:** monochrome, architectural, bold, minimal, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#0a0a0a` · `#a3a3a3` · `#171717` · `#262626` · `#000000` · `#f5f5f5` · `#fafafa` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex text-sm font-medium border border-neutral-800 bg-neutral-900/50 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-950 px-6 py-2.5 rounded-full transition-all duration-500 items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Articles (`blog-articles`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with white headlines
- **Do:** Fade the second headline line to grey for contrast
- **Do:** Use amber (#f59e0b) only in small tags and status dots
- **Don't:** Don't fill buttons with amber or other saturated colours
- **Don't:** Don't remove the thin border that frames the hero
- **Don't:** Don't set headlines in a decorative typeface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
