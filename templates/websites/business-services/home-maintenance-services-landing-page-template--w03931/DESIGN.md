# Design system — Home Maintenance Services Landing Page Template

`SN-W03931` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero panel sits inside a pale slate frame, so the page reads as a framed card rather than a full-bleed screen. The headline is heavy white sans set in tight lines, with short body copy below and a white solid button beside an outlined one. A small translucent card in the lower right adds a note of trust. The tone is practical and neighbourly.

**Mood:** practical, neighbourly, framed, steady, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#94a3b8` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#f8fafc` · `#64748b` · `#475569` · `#34d399` · `#f1f5f9` · `#94a3b8` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Inter
- **Scale (largest breakpoint):** h1 20px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)
3. Map / location (`map-location`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #94a3b8;
  --color-text: #111111;
  --color-muted: #0f172a;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --color-accent-2: #34d399;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#94a3b8',
    ink: '#111111',
    muted: '#0f172a',
    line: '#ffffff',
    accent: '#0f172a',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans on the dark navy panel (#0f172a), in tight lines.
- **Do:** Use the solid white button for the primary call action and an outlined button for the email enquiry.
- **Do:** Keep the hero inside a rounded pale frame with a soft border rather than running full bleed.
- **Don't:** Don't remove the pale frame; the framed card is the layout.
- **Don't:** Don't add colour to the headline; keep it white.
- **Don't:** Don't use a light background inside the dark hero panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
