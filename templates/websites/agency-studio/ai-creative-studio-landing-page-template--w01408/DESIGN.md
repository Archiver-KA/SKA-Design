# Design system — AI Creative Studio Landing Page Template

`SN-W01408` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure near-black page where the headline is a light serif in white, with the trailing lines dropping to muted grey. Navigation is small sans caps across the top, with a thin outlined 'Start Project' button at the right. The first screen is typographic and empty of imagery, so the serif and the grey step-down carry the whole look.

**Mood:** typographic, restrained, dark, editorial, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#09090b` · `#27272a` · `#18181b` · `#52525b` · `#d4d4d8` · `#a1a1aa` · `#000000` · `#71717a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 36px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_12px_rgba(16,185,129,0.6)]`, `shadow-[0_0_10px_rgba(16,185,129,0.5)]`, `shadow-lg`
- **Content width:** `max-w-[90%]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-wide backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Process / steps (`how-it-works`)
5. Benefits (`benefits`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #10b981;
  --color-accent-2: #312e81;
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
    line: '#27272a',
    accent: '#10b981',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light serif in white, with the last lines in muted grey.
- **Do:** Keep the nav as small uppercase sans with a thin outlined button on the right.
- **Do:** Keep the first screen type-only on the near-black ground.
- **Don't:** Don't add a bright accent; the first screen has no accent colour.
- **Don't:** Don't fill the nav button; it stays outlined.
- **Don't:** Don't set the headline in a heavy sans; the contrast is a light serif against grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
