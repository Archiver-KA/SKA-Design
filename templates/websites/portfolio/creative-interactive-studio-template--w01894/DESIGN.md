# Design system — Creative Interactive Studio Template

`SN-W01894` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a tight, bold sans headline on the left and a dark camera-permission card on the right, which makes the interaction the subject. The only colour is a small green dot (#10b981) in the eyebrow tag, and the primary button is solid white. The stance is quiet, functional and instruction-led, with the interaction explained in plain text.

**Mood:** quiet, functional, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#27272a` · `#09090b` · `#71717a` · `#fafafa` · `#18181b` · `#10b981` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #10b981;
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
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline tight and white on near-black (#09090b).
- **Do:** Use the green (#10b981) only for the status dot in the eyebrow tag.
- **Do:** Set interaction prompts in a centred card with one solid white button.
- **Don't:** Don't add decorative imagery beside the interaction card; the card is the visual.
- **Don't:** Don't hide the fallback; keep the 'Use mouse instead' link visible.
- **Don't:** Don't use the green for buttons; the primary button is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
