# Design system — Family Therapy Landing Page Template

`SN-W02377` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A warm, emotive therapy hero on a deep plum ground (#5d3f6a), with a large uppercase serif-style headline in pale cream and one word underlined in peach (#e2a76f). Faded polaroid and quote cards sit to the right, adding a personal, collage-like texture. The palette is warm and intimate, and the peach is the only bright colour used for emphasis.

**Mood:** warm, intimate, personal, emotive, collage

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#5d3f6a` | Page ground |
| Surface | `#6b8f5b` | Cards, panels, raised areas |
| Text | `#f3e5dc` | Headings and primary copy |
| Muted text | `#5d3f6a` | Secondary copy, captions |
| Border | `#5d3f6a` | Hairlines, dividers, outlines |
| Accent | `#e2a76f` | Primary action and highlights |
| Second accent | `#5ec8d4` | Supporting highlights |

Palette by frequency of use: `#f3e5dc` · `#5d3f6a` · `#e2a76f` · `#5ec8d4` · `#9dc183` · `#6b8f5b` · `#d1965e` · `#4ba3ad` · `#ffffff` · `#2e1f35`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Lora, Oswald, Special Elite
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-none`, `shadow-2xl`, `shadow-[3px_3px_0px_0px_rgba(243,229,220,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-[720px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="font-heading uppercase tracking-wide text-xs text-[#9DC183] border border-[#9DC183]/30 px-4 py-2 rounded-sm hover:bg-[#9DC183]/10 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Newsletter signup (`newsletter`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #5d3f6a;
  --color-surface: #6b8f5b;
  --color-text: #f3e5dc;
  --color-muted: #5d3f6a;
  --color-border: #5d3f6a;
  --color-accent: #e2a76f;
  --color-accent-2: #5ec8d4;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#5d3f6a',
    surface: '#6b8f5b',
    ink: '#f3e5dc',
    muted: '#5d3f6a',
    line: '#5d3f6a',
    accent: '#e2a76f',
    accent2: '#5ec8d4',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set the headline in cream (#f3e5dc) on the plum ground (#5d3f6a), with one word underlined in peach (#e2a76f).
- **Do:** Keep the hero on the plum ground and use the faded cards as the only imagery.
- **Do:** Use the peach for the underline and the primary button.
- **Don't:** Don't set the page ground in peach or green; the first screen is plum.
- **Don't:** Don't use the cyan (#5ec8d4) for text; it is a small decorative line only.
- **Don't:** Don't set body copy in the faded lavender (#5d3f6a) on plum; it has too little contrast.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
