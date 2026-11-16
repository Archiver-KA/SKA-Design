# Design system — Creative Agency Services Template

`SN-W01487` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A red ground (#dc2626) fading toward black carries a centred uppercase headline in white, with the key phrase set in yellow (#facc15) and underlined by a short rule. Below, a black card holds a lead-capture form with a yellow badge and button, so the card and the yellow carry the call to action. The page is one centred block with no navigation.

**Mood:** urgent, bold, direct, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dc2626` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#171717` · `#0a0a0a` · `#262626` · `#737373` · `#a3a3a3` · `#000000` · `#d4d4d4` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h3 30px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(250,204,21,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="w-full px-6 py-3 bg-yellow-400 text-neutral-950 font-bold text-base rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all hover:-translate-y-0.5 uppercase tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #dc2626;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #facc15;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dc2626',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#facc15',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline centred in bold uppercase white sans, and mark the key phrase in yellow (#facc15).
- **Do:** Keep the form in a black card, with the yellow badge and yellow button as the only controls.
- **Do:** Keep the red as a gradient that fades to dark, never as a flat fill behind text blocks.
- **Don't:** Don't use yellow for body text on the red ground.
- **Don't:** Don't use a flat red panel; the gradient fades to dark.
- **Don't:** Don't add navigation to this landing; the page is one centred form.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
