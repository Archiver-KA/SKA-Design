# Design system — AI Video Director SaaS Landing Page Template

`SN-W00176` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black hero (#0a0a0a) with a centred, heavy sans-serif headline in white and its second line in a grey gradient. A white primary button sits beside a plain outlined secondary, and a dark product panel with small monospace status text sits at the fold. The page is stark and cinematic, and the grey fade on the second line does the emphasis work.

**Mood:** cinematic, stark, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#262626` · `#d4d4d4` · `#0a0a0a` · `#a3a3a3` · `#000000` · `#14b8a6` · `#404040` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, black
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_white]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Listings (`listings`)
5. Timeline (`timeline`)
6. Pricing (`pricing`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a grey gradient to create the emphasis
- **Do:** Use the white primary button with dark text as the main action
- **Do:** Keep the hero on near-black (#0a0a0a) with a monospace status panel at the fold
- **Don't:** Don't use a light background; the hero stays near-black
- **Don't:** Don't add colour to the buttons; they are white and grey
- **Don't:** Don't set the status labels at display size; they stay small monospace text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
