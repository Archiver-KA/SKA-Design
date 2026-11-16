# Design system — Industrial Printing Services Landing Page Template

`SN-W03956` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark black-and-cream page where very large uppercase headlines run across the hero, with the second line in pale cream (#f4e7c4). The layout is wide and unhurried, with short tracked labels above each headline and body copy kept to a narrow column at the lower right. Cream is the only colour, so the page reads as high-end and print-led.

**Mood:** stark, high-end, print-led, minimal, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f4e7c4` | Primary action and highlights |

Palette by frequency of use: `#f4e7c4` · `#ffffff` · `#000000` · `#27272a` · `#a1a1aa` · `#18181b` · `#0a0a0a` · `#d4d4d8` · `#71717a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk, ./index.html
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 12px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(244,231,196,0.4)]`, `shadow-[0_0_10px_#F4E7C4]`, `shadow-[0_0_40px_rgba(244,231,196,0.2)]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-48`, `py-40`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(244,231,196,0.4)] transition-all duration-300 active:scale-95 flex gap-2 group cursor-pointer text-sm font-semibold text-black tracking-widest font-geist bg-[#F4E7C4] rounded-sm py-4 items-center justify-center">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f4e7c4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f4e7c4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large uppercase sans-serif, with the second line in cream (#f4e7c4)
- **Do:** Use cream as the only accent colour
- **Do:** Set small labels above headlines in tracked uppercase
- **Don't:** Don't add a second accent colour
- **Don't:** Don't set body copy at full width; keep it in a narrow column
- **Don't:** Don't place cream text on light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
