# Design system — OTT Streaming UI Landing Page Template

`SN-W00619` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic streaming home screen on near-black (#09090b), where poster artwork supplies most of the colour. Purple (#9333ea) is kept for the Play button and the section marker line, and the hero title is set in uppercase Inter. Rows of posters, a Live Channels strip and a dark gradient over the hero keep the screen consistent and image-led.

**Mood:** cinematic, dark, image-led, dense, purple-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#52525b` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9333ea` · `#52525b` · `#71717a` · `#18181b` · `#d4d4d8` · `#27272a` · `#4f46e5` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 14px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-black/50`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:opacity-90 transition active:scale-95 font-medium text-sm md:text-base shadow-lg shadow-indigo-500/25">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #52525b;
  --color-accent: #9333ea;
  --color-accent-2: #818cf8;
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
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#52525b',
    accent: '#9333ea',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#9333ea) only for the Play action and section markers
- **Do:** Let poster artwork supply the colour; keep the interface neutral
- **Do:** Set hero titles in uppercase Inter at display size
- **Don't:** Don't put light cards over the poster rows; surfaces stay dark (#18181b)
- **Don't:** Don't use purple as a fill for large areas
- **Don't:** Don't add a second accent hue; the screen uses purple and neutrals only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
