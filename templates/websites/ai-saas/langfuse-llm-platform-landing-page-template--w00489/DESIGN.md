# Design system — Langfuse LLM Platform Landing Page Template

`SN-W00489` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, atmospheric product page where a deep violet-to-magenta gradient glows behind large white Inter headlines on a near-black base. Translucent glass cards with thin light borders sit on top, with small monospaced-style status tags in the corners. The mood is confident and technical, and the gradient is the one thing that makes the page recognisable.

**Mood:** atmospheric, technical, glassy, confident, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a5b4fc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#34d399` · `#a5b4fc` · `#10b981` · `#ec4899` · `#000000` · `#fbcfe8` · `#f59e0b` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`, `shadow-inner`
- **Content width:** `max-w-[1700px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-500/25">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #a5b4fc;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#a5b4fc',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the violet gradient behind the hero only, not on every section.
- **Do:** Use translucent glass panels with thin light borders for feature cards.
- **Do:** Keep headlines in white Inter at large size on the dark base.
- **Don't:** Don't flood full sections with the gradient.
- **Don't:** Don't use solid bright cards; panels stay translucent.
- **Don't:** Don't add more than one highlight colour beside the violet and green tags.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
