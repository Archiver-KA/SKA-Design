# Design system — Travel & Adventure Landing Page Template

`SN-W03136` · travel · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A restrained, minimal travel page: a soft grey gradient hero with a large dark sans headline, a single navy round button, and a light header bar. The look rests on type and the grey-to-white ground. Navy (#151b33) is the one accent and matches the solid CTA.

**Mood:** restrained, minimal, clean, grey, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efeeec` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#151b33` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#151b33` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#151b33` · `#4b5563` · `#6b7280` · `#e5e7eb` · `#f3f4f6` · `#efeeec` · `#facc15` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1400px]`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Logo cloud (`logo-cloud`)
5. Listings (`listings`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #efeeec;
  --color-surface: #ffffff;
  --color-text: #151b33;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #151b33;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efeeec',
    surface: '#ffffff',
    ink: '#151b33',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#151b33',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines large in a dark sans (#151b33) on the light ground
- **Do:** Use the navy (#151b33) for the solid primary button only
- **Do:** Keep the hero a soft grey gradient so the type stays the focus
- **Don't:** Don't use the yellow (#facc15) for CTAs
- **Don't:** Don't leave a broken image placeholder in the hero
- **Don't:** Don't use more than one solid button colour per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
