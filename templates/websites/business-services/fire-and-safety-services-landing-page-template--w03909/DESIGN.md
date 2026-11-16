# Design system — Fire & Safety Services Landing Page Template

`SN-W03909` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy page where a bold white sans headline meets an orange highlight on its closing phrase, setting a clear, safety-focused tone. Inter sets everything, with the headline at heavy weight and the key phrase in full orange (#f97316). A photograph of a technician sits in a rounded frame with an orange-tinted edge, and a small dark pill marks certification. The result is urgent but orderly.

**Mood:** urgent, orderly, industrial, bold, reliable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#0f172a` · `#1f2937` · `#ea580c` · `#475569` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-orange-500/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300 focus:ring-4 focus:ring-orange-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Services (`services`)
6. Logo cloud (`logo-cloud`)
7. Case studies (`case-studies`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #1f2937;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#1f2937',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of each headline in orange (#f97316) and keep the rest in white.
- **Do:** Use the solid orange button for the main contact action and an outlined dark button for the secondary action.
- **Do:** Frame photographs with rounded corners and a thin orange-tinted edge.
- **Don't:** Don't use orange for body text; keep it to headlines, buttons and small accents.
- **Don't:** Don't place light backgrounds behind the hero; the navy ground carries the page.
- **Don't:** Don't use purple as a second accent in text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
