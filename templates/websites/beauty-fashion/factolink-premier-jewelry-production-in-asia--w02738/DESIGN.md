# Design system — FactoLink | Premier Jewelry Production in Asia

`SN-W02738` · beauty-fashion · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Clean white corporate page where the headline is set entirely in emerald green (#059669) and centred over a grey subline. The header carries a solid green button, and the hero's primary action is a green button under the copy. Green is the only brand colour on screen, so every headline and action reads as one system.

**Mood:** clean, corporate, trustworthy, single-colour

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#059669` · `#e2e8f0` · `#ffffff` · `#64748b` · `#0f172a` · `#475569` · `#047857` · `#a7f3d0` · `#f1f5f9` · `#064e3b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-emerald-900/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex-1 flex items-center justify-center py-3 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-lg shadow-lg shadow-emerald-900/10">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #059669;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#059669',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in emerald green (#059669) centred over a grey subline
- **Do:** Use green solid buttons for the header action and the hero action
- **Do:** Keep the header simple, with the logo at left and a single action at right
- **Don't:** Don't add second accent colours to the hero; green is the only colour on screen
- **Don't:** Don't set the headline in black; the green headline is the signature
- **Don't:** Don't use dark section backgrounds; the template is white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
