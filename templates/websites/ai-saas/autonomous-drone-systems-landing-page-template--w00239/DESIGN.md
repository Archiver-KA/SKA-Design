# Design system — Autonomous Drone Systems Landing Page Template

`SN-W00239` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black, technical hero with a heavy white uppercase headline, 'AERIAL AUTONOMY', stacked on two lines with the second in grey. Orange (#ea580c) is the only accent: it fills the primary button and the nav CTA, and a thin orange rule runs beside the body copy. Monospace telemetry cards on the right show live numbers, so the page reads as a flight console.

**Mood:** technical, stark, industrial, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#ea580c` · `#71717a` · `#a1a1aa` · `#18181b` · `#050505` · `#52525b` · `#f97316` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-orange-900/20`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-sm text-[10px] font-mono uppercase tracking-widest shadow-lg shadow-orange-900/20 active:scale-95 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Sidebar (`sidebar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #27272a;
  --color-accent: #ea580c;
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
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#27272a',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, white on the first line and grey on the second
- **Do:** Use the orange (#ea580c) for the primary button and the nav CTA only
- **Do:** Keep telemetry cards as small monospace panels with thin borders
- **Don't:** Don't use orange for body copy or large fills
- **Don't:** Don't add a second accent hue beside the orange
- **Don't:** Don't round the telemetry panels heavily

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
