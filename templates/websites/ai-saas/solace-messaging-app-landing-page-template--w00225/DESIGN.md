# Design system — Solace Messaging App Landing Page Template

`SN-W00225` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, minimal hero with a centred, very heavy dark sans headline in two lines over a faint blue wash. The subtitle is grey and the buttons are a filled near-black primary with a text-style secondary, so the page's energy comes from the type scale and whitespace. Blue appears only as the soft haze, keeping the controls neutral.

**Mood:** light, minimal, confident, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#9ca3af` · `#f3f4f6` · `#6b7280` · `#4b5563` · `#e5e7eb` · `#f9fafb` · `#2563eb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-gray-900/10`, `shadow-blue-500/20`
- **Content width:** `max-w-5xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2563eb;
  --color-accent-2: #22c55e;
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
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans at display size, centred
- **Do:** Use near-black (#111827) for the primary button and the headline
- **Do:** Keep the blue haze faint and behind the hero, not on the controls
- **Don't:** Don't put the hero on a dark background; the ground is white
- **Don't:** Don't use a saturated blue button; the controls stay neutral
- **Don't:** Don't set the subtitle in dark text; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
