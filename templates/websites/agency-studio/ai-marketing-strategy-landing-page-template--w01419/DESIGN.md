# Design system — AI Marketing Strategy Landing Page Template

`SN-W01419` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A pale page on [#fafafa] with a heavy sans headline in near-black, where the second line drops to a mid-grey, creating a two-tone heading without colour. The hero is a plain signup row with a black solid button beside a text field, and a soft white card sits on the right as a product preview. The page reads as minimal and monochrome.

**Mood:** minimal, monochrome, pale, clean, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#111111` · `#ffffff` · `#e5e5e5` · `#737373` · `#fafafa` · `#6366f1` · `#f9fafb` · `#eef2ff` · `#e5e7eb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, JetBrains Mono, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-5 py-2 rounded shadow-sm ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #111111;
  --color-accent-2: #fb923c;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#111111',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans, near-black on the first line and mid-grey on the second.
- **Do:** Make the primary button solid black with white text, beside a plain text field.
- **Do:** Keep the page ground at #fafafa with white cards and hairline borders.
- **Don't:** Don't add an indigo accent.
- **Don't:** Don't use a coloured button; the action stays black.
- **Don't:** Don't add shadows to the preview card; the card is flat white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
