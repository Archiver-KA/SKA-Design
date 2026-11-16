# Design system — Guia del invitado

`SN-W02034` · portfolio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A warm off-white page with a centred serif headline in dark brown-black, set over two lines and preceded by a small tracked grey label. A gold pill (#c5a028) marks the nav action, and a near-black pill carries the download button under the intro line. Below, three cards hold travel photographs beneath a small emoji section heading. The palette is quiet and neutral, with gold as the only accent.

**Mood:** quiet, warm, neutral, guide-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c5a028` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#ffffff` · `#57534e` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#a8a29e` · `#fafaf9` · `#c5a028` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-[0.65rem] tracking-widest uppercase text-white bg-gold-500 hover:bg-gold-600 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Map / location (`map-location`)
3. FAQ (`faq`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #c5a028;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#c5a028',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at moderate size, in dark ink on the warm off-white
- **Do:** Use the gold (#c5a028) for the nav action and small highlights only
- **Do:** Use near-black pill buttons for the main content actions
- **Don't:** Don't leave a card photograph missing
- **Don't:** Don't add more than one emoji per section heading
- **Don't:** Don't set body copy in the serif; the sans is for paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
