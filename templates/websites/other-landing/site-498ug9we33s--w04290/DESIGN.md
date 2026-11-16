# Design system — site-498ug9we33s

`SN-W04290` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single centred message on a soft blush ground (#ffe4e6), with a bold sans question set large and a small uppercase label above it. One dark navy button (#0f172a) is the only control, and emoji are the only decoration. The restraint keeps the playful copy at the centre of the screen.

**Mood:** playful, soft, minimal, romantic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffe4e6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#fecdd3` · `#f43f5e` · `#ffe4e6` · `#fb7185` · `#94a3b8` · `#475569` · `#64748b` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-rose-100/20`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-40 px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-lg shadow-rose-200/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffe4e6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffe4e6',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the message centred on the soft pink ground (#ffe4e6) with one dark navy button
- **Do:** Set the question in bold sans at large size, with emoji as the only decoration
- **Do:** Keep the small uppercase label above the message and the small footer below it
- **Don't:** Don't add a second button to the screen
- **Don't:** Don't use rose as the button fill
- **Don't:** Don't crowd the message with extra imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
