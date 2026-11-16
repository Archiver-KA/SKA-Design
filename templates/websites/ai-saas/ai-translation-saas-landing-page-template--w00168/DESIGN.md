# Design system — AI Translation SaaS Landing Page Template

`SN-W00168` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Monochrome dark page on pure black (#000000) with white headlines and grey supporting text. The headline pairs a heavy sans-serif with a grey gradient italic word in a serif face, and a small red status tag (#ef4444) sits above it as the only saturated mark in the hero. Soft glows appear behind the hero, while the rest of the page relies on greys and hairline borders.

**Mood:** monochrome, technical, dramatic, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#3f3f46` · `#27272a` · `#e4e4e7` · `#52525b` · `#d4d4d8` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]`, `shadow-[0_0_20px_rgba(255,79,24,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on pure black (#000000) with white headlines and grey body text
- **Do:** Use the red status tag above the headline as the only colour accent in the hero
- **Do:** Set one word per headline in grey gradient italic serif for contrast
- **Don't:** Don't colour the buttons; the primary action is a grey filled pill with white text
- **Don't:** Don't use red beyond the status tag; the rest of the palette stays neutral
- **Don't:** Don't set the emphasis word in bold sans-serif; the italic serif is the contrast device

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
