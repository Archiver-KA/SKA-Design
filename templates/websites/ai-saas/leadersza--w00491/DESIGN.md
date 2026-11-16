# Design system — LeadersZA

`SN-W00491` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, restrained lead-generation page built on near-black surfaces with white Inter headlines and grey secondary text. The primary buttons are white pills, so the contrast comes from the page's own greys rather than from a hue. Dark cards in zinc tones hold a sample AI prompt in a monospaced block, which makes the product feel like a working tool.

**Mood:** restrained, dark, professional, neutral, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f3f4f6` · `#a1a1aa` · `#f9fafb` · `#52525b` · `#e5e7eb` · `#09090b` · `#3f3f46` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.03)]`, `shadow-lg`
- **Content width:** `max-w-[200px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-16`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 bg-white text-zinc-950 hover:bg-gray-100">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Process / steps (`how-it-works`)
4. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white pill buttons for primary actions.
- **Do:** Keep headlines in white Inter at large size over the dark ground.
- **Do:** Show product detail in monospaced blocks on dark zinc cards.
- **Don't:** Don't introduce a green accent; the actions use white.
- **Don't:** Don't use light section backgrounds between dark sections.
- **Don't:** Don't add gradients to the card surfaces.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
