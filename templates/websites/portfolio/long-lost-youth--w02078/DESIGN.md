# Design system — Long Lost Youth

`SN-W02078` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark, moody landing page on near-black with a huge, bold uppercase sans headline in white, set in two centred lines and filling most of the hero. Supporting text is tiny, uppercase and widely tracked in grey, and the single call to action is a thin-outlined rectangle rather than a filled button. The restraint and tracking give it the feel of an underground, print-like poster.

**Mood:** stark, moody, uppercase, underground, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |
| Accent | `#7f1d1d` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#27272a` · `#52525b` · `#d4d4d8` · `#71717a` · `#ffffff` · `#3f3f46` · `#a1a1aa` · `#050505` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 60px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-1`

**Primary button**

```html
<a class="w-full py-3 border border-zinc-800 text-[10px] font-mono uppercase text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #18181b;
  --color-accent: #7f1d1d;
  --color-accent-2: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#18181b',
    accent: '#7f1d1d',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy uppercase sans in white, large and centred.
- **Do:** Use tiny, widely tracked uppercase grey text for all supporting lines.
- **Do:** Keep the call to action as a thin-outlined rectangle, not a filled button.
- **Don't:** Don't add a filled button; the outline is the only treatment for action.
- **Don't:** Don't introduce colour; the page stays black, white and grey.
- **Don't:** Don't round the outline button; it has square corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
