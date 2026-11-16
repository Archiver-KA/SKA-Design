# Design system — Serenity Design Portfolio Landing Page Template

`SN-W02225` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean light portfolio shown as a white card on a mid-grey backdrop. The headline is a bold sans in near-black (#111827), with one word, human, picked out in blue (#3b82f6), and the body copy is a softer grey. A dark navy primary button and an outlined secondary sit under the copy, so the blue is the only colour and it is used once per headline.

**Mood:** clean, light, precise, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#111827` · `#6b7280` · `#2563eb` · `#9ca3af` · `#bfdbfe` · `#f3f4f6` · `#e5e7eb` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white bg-white/5 border-white/10 border rounded-xl py-3.5 px-8 relative backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans in near-black (#111827) with one word in blue (#3b82f6)
- **Do:** Keep primary buttons dark (#111827) and secondary buttons outlined
- **Do:** Show the page content on a white ground (#ffffff)
- **Don't:** Don't use the pale blue (#bfdbfe) as the page ground; the ground is white
- **Don't:** Don't colour more than one word per headline
- **Don't:** Don't set body copy in near-black; keep it grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
