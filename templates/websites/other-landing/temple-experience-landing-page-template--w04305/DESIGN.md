# Design system — Temple Experience Landing Page Template

`SN-W04305` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic dark page on deep navy [#020617] with a large white display headline and one gold [#f59e0b] phrase used for emphasis. The hero is centred and generous, with a pale button and a faint blurred panel below for the first section. Headlines are big and sans-serif, and the gold is the single warm note against the cool ground.

**Mood:** cinematic, spiritual, warm, dark, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e1b4b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#f59e0b` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#6366f1` · `#ef4444` · `#000000` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(245,158,11,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-[10px] font-semibold bg-amber-500 text-black px-2 py-1 rounded">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #1e1b4b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#94a3b8',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#1e1b4b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gold (#f59e0b) for one emphasised phrase per headline
- **Do:** Keep the hero headline large, around 72px, in a heavy sans-serif
- **Do:** Set content cards on translucent panels with backdrop blur
- **Don't:** Don't use a light page background; the look depends on the dark navy ground
- **Don't:** Don't use more than one warm colour in a single headline
- **Don't:** Don't add small decorative icons beside section titles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
