# Design system — Spiritual Retreat Landing Page Template

`SN-W03130` · travel · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A serene, editorial retreat hero on a deep navy-black ground (#03090f). A centred serif headline runs in two tones: white for the first line, then a muted grey-blue italic for the second. Small tracked caps in teal (#4fd1c5) label the nav and pill, so teal is the one accent and it is used sparingly.

**Mood:** serene, editorial, dark, contemplative, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#03090f` | Page ground |
| Surface | `#eae7df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4fd1c5` | Primary action and highlights |
| Second accent | `#2a3c4f` | Supporting highlights |

Palette by frequency of use: `#4fd1c5` · `#f7f5f0` · `#1a1a1a` · `#03090f` · `#555555` · `#ffffff` · `#eae7df` · `#8fa3b5` · `#aabbc8` · `#2a3c4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 60px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(79,209,197,0.3)]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-5`, `gap-12`

**Primary button**

```html
<a class="w-full group relative flex items-center justify-between gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 hover:text-[#03090F]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #03090f;
  --color-surface: #eae7df;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #ffffff;
  --color-accent: #4fd1c5;
  --color-accent-2: #2a3c4f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#03090f',
    surface: '#eae7df',
    ink: '#ffffff',
    muted: '#555555',
    line: '#ffffff',
    accent: '#4fd1c5',
    accent2: '#2a3c4f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline in a serif, with the second line in italic muted tone (#8fa3b5)
- **Do:** Use teal (#4fd1c5) only for small labels and the pill outline
- **Do:** Set the logo and nav in small tracked uppercase
- **Don't:** Don't use a light cream page ground; the hero is dark navy
- **Don't:** Don't put teal on large fills or buttons in this style
- **Don't:** Don't set body copy at full white size; keep it a softer grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
