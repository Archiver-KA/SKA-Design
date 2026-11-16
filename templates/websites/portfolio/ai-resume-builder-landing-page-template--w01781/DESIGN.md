# Design system — AI Resume Builder Landing Page Template

`SN-W01781` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy page with a centred black Inter headline over a grey subline, and a large prompt input in the middle with a purple focus border. Three resume previews in white cards sit beneath, with thin grey lines suggesting text. The page uses a light grey ground (#f4f4f5) and white cards, and the interface stays neutral apart from the purple input border.

**Mood:** light, neutral, clear, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#27272a` · `#d4d4d8` · `#a1a1aa` · `#71717a` · `#52525b` · `#3f3f46` · `#ffffff` · `#f4f4f5` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, PT Serif
- **Scale (largest breakpoint):** h1 14px · h2 6px · body 5px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`, `shadow-[0_2px_20px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-xs text-white shadow-sm transition-all hover:bg-zinc-800 hover:scale-[1.02] focus-visible:outline-none active:scale-[0.98] font-sans font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f4f5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #d4d4d8;
  --color-accent: #2563eb;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#d4d4d8',
    accent: '#2563eb',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground light grey (#f4f4f5) and the cards white.
- **Do:** Centre the headline and keep the prompt input as the single focal control.
- **Do:** Use the purple focus border only on the active input.
- **Don't:** Don't add colour to the resume previews; they stay neutral.
- **Don't:** Don't add heavy shadows around the cards.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
