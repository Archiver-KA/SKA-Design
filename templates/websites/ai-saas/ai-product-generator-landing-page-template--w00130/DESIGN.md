# Design system — AI Product Generator Landing Page Template

`SN-W00130` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black developer hosting page with a large white Inter headline whose second line fades into grey. The one warm note is a small amber status tag, and the install command sits in a dark monospace pill beside the primary white button, which makes the terminal part of the hero. A dashboard mockup is cropped at the bottom of the first screen, and the layout stays quiet and centred.

**Mood:** developer, dark, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#f59e0b` · `#fbbf24` · `#404040` · `#a3a3a3` · `#22c55e` · `#262626` · `#171717` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_30px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2.5 rounded text-sm font-medium hover:bg-neutral-200 active:scale-95 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Code / terminal (`code-terminal`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #262626;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
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
    background: '#050505',
    surface: '#262626',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with the second line in a grey gradient
- **Do:** Put the install command in a dark monospace pill beside the primary button
- **Do:** Keep amber (#f59e0b) to the status tag and small highlights
- **Don't:** Don't use amber for the main buttons
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set the install command in a proportional font

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
