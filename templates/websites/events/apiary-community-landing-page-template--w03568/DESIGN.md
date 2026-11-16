# Design system — Apiary Community Landing Page Template

`SN-W03568` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Apiary is a photograph-led hero: a dark-toned mountain landscape sits under a bold white sans-serif headline. Honey yellow (#fbbf24) picks out the phrase hive enthusiasts in the intro and fills the small logo mark, which gives the page its accent. Navigation floats as a translucent pill over the image, and the buttons are rounded pills.

**Mood:** photographic, bold, warm, rounded, community

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#09090b` · `#fbbf24` · `#27272a` · `#f4f4f5` · `#e4e4e7` · `#d4d4d8` · `#f59e0b` · `#a1a1aa` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 60px · h3 48px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Map / location (`map-location`)
3. Services (`services`)
4. Schedule (`schedule-agenda`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #fbbf24;
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
    surface: '#ffffff',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use honey yellow (#fbbf24) only for the logo mark and key phrases
- **Do:** Keep the hero photograph under a dark overlay
- **Do:** Set headlines in bold white sans-serif with tight leading
- **Don't:** Don't use yellow as a full background
- **Don't:** Don't place yellow text on light photography
- **Don't:** Don't remove the translucent navigation pill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
