# Design system — Client Testimonials Masonry Layout

`SN-W04169` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark masonry grid of testimonial cards on a near-black ground (#0a0a0a), under a large white heading. The heading's final word is set in violet (#a78bfa), the only colour on the page. Cards are staggered in columns with rounded corners, small avatars, bold white names and grey role lines, so the layout reads through its rhythm.

**Mood:** rhythmic, dark, restrained, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |
| Second accent | `#a78bfa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4ade80` · `#a78bfa` · `#8b5cf6` · `#22c55e` · `#3b82f6` · `#60a5fa` · `#f97316` · `#a855f7` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a78bfa;
  --color-accent-2: #a78bfa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#a78bfa',
    accent2: '#a78bfa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet (#a78bfa) only for the heading highlight.
- **Do:** Set names in bold white and roles in small grey text.
- **Do:** Keep cards in a staggered masonry grid with rounded corners.
- **Don't:** Don't align the cards to one row height.
- **Don't:** Don't add a second accent colour to the cards.
- **Don't:** Don't place the cards on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
