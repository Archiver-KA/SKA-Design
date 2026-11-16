# Design system — Data-Driven Agency Landing Page Template

`SN-W01509` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#0a0a0a) with a two-line headline in white, where the second line drops to mid-grey (#737373) for a tonal step. A small monospaced status pill and tiny monospaced labels carry the technical tone, and a row of large stat figures sits across the bottom on hairline dividers. Green appears only as the status dot, so type, numbers and rules do the work.

**Mood:** technical, precise, dark, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#10b981` · `#737373` · `#0a0a0a` · `#171717` · `#a3a3a3` · `#d4d4d4` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium border border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-2 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-2 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #10b981;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#10b981',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in regular sans, white on the first line and mid-grey (#737373) on the second.
- **Do:** Use the green (#10b981) only for the status dot and small status labels.
- **Do:** Set stat figures large and white, with tiny monospaced captions and hairline dividers between them.
- **Don't:** Don't set headlines in mint (#a7f3d0); they are white.
- **Don't:** Don't add drop shadows; separation comes from hairline rules.
- **Don't:** Don't use the green for buttons or large fills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
