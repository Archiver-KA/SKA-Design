# Design system — AI SaaS Landing Page Template

`SN-W00146` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black AI platform page on #030303 with a centred white Inter headline whose second line fades into grey. A white primary button and a dark translucent secondary sit under a short subhead, and a dashboard window is cropped at the bottom of the first screen. Indigo (#6366f1) appears only as a status dot, so the page reads as austere and institutional.

**Mood:** austere, institutional, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#6366f1` · `#161616` · `#000000` · `#0a0a0a` · `#262626` · `#e5e7eb` · `#22c55e` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(255,255,255,0.4)]`, `shadow-[0_0_20px_-3px_rgba(255,255,255,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full bg-white text-black hover:bg-gray-200 font-medium text-sm py-2.5 rounded-lg transition-all transform active:scale-95 flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Video / media (`video-media`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #161616;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#161616',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline in white Inter with the second line in a grey gradient
- **Do:** Use the white primary button and the dark translucent secondary side by side
- **Do:** Reserve indigo (#6366f1) for the status dot and one highlight
- **Don't:** Don't use indigo for large fills
- **Don't:** Don't add colourful illustrations to the hero
- **Don't:** Don't use a light background for the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
