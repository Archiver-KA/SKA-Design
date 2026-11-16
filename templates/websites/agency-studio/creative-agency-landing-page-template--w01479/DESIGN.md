# Design system — Creative Agency Landing Page Template

`SN-W01479` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grey ground (#f2f2f2) where the depth comes from a stack of slate-navy cards (#1f2937) fanned behind a portrait. The featured card fades from white to dark grey, carrying a large white headline over its darker lower part and a white pill button for the action. A ghosted oversized wordmark sits behind the cards as texture. Layering, not shadows, gives the page its dimension.

**Mood:** layered, moody, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f2f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1f2937` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#111827` · `#6b7280` · `#f2f2f2` · `#d1d5db` · `#1f2937` · `#f3f4f6` · `#e5e7eb` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[inherit]` (inherit)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-inner`
- **Content width:** `max-w-4xl`, `max-w-[90vw]`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Call to action (`cta`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2f2f2;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #1f2937;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f2f2',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#1f2937',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Stack cards at slight angles in slate (#1f2937) tones behind the featured image.
- **Do:** Set the card headline in white over the darker lower part of the image.
- **Do:** Keep the ghosted wordmark behind the cards at low contrast, never in front of the copy.
- **Don't:** Don't set dark text on the gradient card; the headline is white.
- **Don't:** Don't flatten the card stack into a single rectangle.
- **Don't:** Don't add a bright accent colour; the page is grey and slate only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
