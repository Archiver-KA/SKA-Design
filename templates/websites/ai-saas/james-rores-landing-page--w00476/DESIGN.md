# Design system — James Rores Landing page

`SN-W00476` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sales-letter style page on a deep navy ground, with a warm amber (#fbbf24) used for the sub-headline and stat emphasis. The hero is a large bold white headline, followed by a video block framed in a glass-style panel. Inter throughout, with generous spacing between sections. The tone is direct and conversational.

**Mood:** direct, conversational, dark, bold, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a101c` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#151d2c` | Supporting highlights |

Palette by frequency of use: `#fbbf24` · `#1f2937` · `#f59e0b` · `#111827` · `#cbd5e1` · `#0a101c` · `#151d2c` · `#ffffff` · `#374151` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/40`, `shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]`
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#0A101C] bg-amber-500 hover:bg-amber-400 rounded-xl transition-all duration-200 shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.4)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0A101C]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Video / media (`video-media`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a101c;
  --color-surface: #111827;
  --color-text: #e2e8f0;
  --color-muted: #cbd5e1;
  --color-border: #1f2937;
  --color-accent: #fbbf24;
  --color-accent-2: #151d2c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a101c',
    surface: '#111827',
    ink: '#e2e8f0',
    muted: '#cbd5e1',
    line: '#1f2937',
    accent: '#fbbf24',
    accent2: '#151d2c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#fbbf24) for the sub-headline and small emphasis only
- **Do:** Frame the video in a dark glass-style panel
- **Do:** Keep headlines bold white on the deep navy ground
- **Don't:** Don't use amber as a fill over large areas
- **Don't:** Don't add a light ground to the hero
- **Don't:** Don't set body copy in the amber colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
