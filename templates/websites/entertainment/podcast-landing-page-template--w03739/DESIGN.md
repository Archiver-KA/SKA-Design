# Design system — Podcast Landing Page Template

`SN-W03739` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark editorial podcast page on a near-black ground [#111111]. The hero splits into a large bold sans-serif headline and grey intro copy on the left, with a player card on the right. Warm sand tone [#c9a96e] appears only in the audio waveform, and pale rounded buttons sit on the dark ground.

**Mood:** editorial, warm, dark, understated, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#d4cfc4` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c9a96e` · `#a1a1aa` · `#333333` · `#111111` · `#71717a` · `#52525b` · `#d4d4d8` · `#ebe9e1` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium leading-6 text-zinc-900 bg-[#EBE9E1] px-4 py-2 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Video / media (`video-media`)
5. About (`about`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #333333;
  --color-text: #d4cfc4;
  --color-muted: #71717a;
  --color-border: #333333;
  --color-accent: #c9a96e;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#333333',
    ink: '#d4cfc4',
    muted: '#71717a',
    line: '#333333',
    accent: '#c9a96e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy Inter at display size, left-aligned
- **Do:** Use the sand tone (#c9a96e) only for the waveform and small highlights
- **Do:** Keep primary buttons pill-shaped and pale on the dark ground
- **Don't:** Don't add a second warm accent beside the sand tone
- **Don't:** Don't use bright red for emphasis; it is reserved for live or alert states
- **Don't:** Don't fill the player card with colour; keep it dark and flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
