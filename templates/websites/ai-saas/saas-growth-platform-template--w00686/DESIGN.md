# Design system — SaaS Growth Platform Template

`SN-W00686` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A split sign-up page: a vivid orange-to-pink gradient panel carries a large white sans headline and three stat cards, beside a plain white form panel. The form uses a segmented tab control, plain field labels and a full-width gradient button, and the pink-red gradient is the single brand colour. The layout is energetic on one side and quiet on the other.

**Mood:** energetic, bold, social, contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff2e5f` | Primary action and highlights |
| Second accent | `#ff2e5f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#ff2e5f` · `#334155` · `#0f172a` · `#00b67a` · `#cbd5e1` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 36px · h2 24px · body 14px
- **Weights in use:** semibold, extrabold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Section padding:** `py-14`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-2`

**Primary button**

```html
<a class="google-btn mt-6 w-full flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-2xl py-3.5 font-semibold text-slate-900 text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sign-in form (`auth-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ff2e5f;
  --color-accent-2: #ff2e5f;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ff2e5f',
    accent2: '#ff2e5f',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the pink-red gradient (#ff2e5f) on the primary button and the brand panel only
- **Do:** Set the left panel's headline in white, with stat cards in translucent white
- **Do:** Keep the form panel white with plain field labels and a segmented tab control
- **Don't:** Don't put the gradient on the form fields; they stay white with grey borders
- **Don't:** Don't add emoji to headlines as a system rule; the emoji here is decoration
- **Don't:** Don't set small body copy in white on the gradient; the contrast is weak

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
