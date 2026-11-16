# Design system — Next.js SSR Architecture Landing Page Template

`SN-W03321` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, centred layout inside a large rounded card on a pale grey page. The headline is a serif with 'Perfected.' set in light grey italic beneath 'Server-Side', and a dark code panel begins at the bottom edge of the first screen. A floating pill navigation sits on top, and small green status dots and a dark button give the page its only signal colours.

**Mood:** technical, calm, precise, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#6b7280` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#f3f4f6` · `#e5e7eb` · `#ffffff` · `#111827` · `#6b7280` · `#000000` · `#f9fafb` · `#4b5563` · `#93c5fd` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, JetBrains Mono, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group bg-black text-white text-xs px-4 py-2.5 rounded-full hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-lg shadow-black/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Code / terminal (`code-terminal`)
5. Stats band (`stats`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #6b7280;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#6b7280',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the second line in light grey italic.
- **Do:** Keep the page in pale greys inside one large rounded card.
- **Do:** Use small green dots only as status markers in the eyebrow pill and the navigation.
- **Don't:** Don't add more colour to the hero; the page is grey, white and near-black.
- **Don't:** Don't set the code panel in light grey; it stays dark.
- **Don't:** Don't use heavy shadows on the floating navigation; it is separated by white and a hairline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
