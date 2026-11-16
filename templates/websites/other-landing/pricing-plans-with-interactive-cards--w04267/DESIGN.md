# Design system — Pricing Plans with Interactive Cards

`SN-W04267` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy pricing section with glass-effect plan cards placed over a faint particle field. Headings are set in Space Grotesk in white, while lilac (#c084fc) is kept for hover and highlight states and violet for the buttons. The cards are blurred and semi-transparent, so depth comes from translucency rather than shadows.

**Mood:** glassy, futuristic, dark, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#c084fc` | Primary action and highlights |

Palette by frequency of use: `#c084fc` · `#ffffff` · `#9ca3af` · `#6b7280` · `#312e81` · `#9333ea` · `#a855f7` · `#4f46e5` · `#0f172a` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 24px
- **Weights in use:** semibold, bold, extrabold

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-9`

**Primary button**

```html
<a class="w-full py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:bg-purple-600/30 hover:text-white transition font-semibold text-base">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-accent: #c084fc;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#d1d5db',
    muted: '#6b7280',
    accent: '#c084fc',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headings in Space Grotesk and keep them white on the navy ground
- **Do:** Use translucent glass panels with backdrop blur for the plan cards
- **Do:** Reserve the lilac accent (#c084fc) for hover states and the highlighted plan
- **Don't:** Don't use solid opaque fills on the plan cards
- **Don't:** Don't add drop shadows; depth comes from blur and borders
- **Don't:** Don't remove the particle backdrop behind the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
