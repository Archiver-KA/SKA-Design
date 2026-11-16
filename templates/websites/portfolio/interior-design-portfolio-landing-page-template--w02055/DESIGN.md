# Design system — Interior Design Portfolio Landing Page Template

`SN-W02055` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean white hero with a large, tightly set two-line headline in near-black (#111827): a sans first line over an italic serif second line. Buttons are dark pills, a solid one with an icon and a grey ghost beside it, and no colour appears beyond the ink and grey. The contrast between the sans and the italic serif in the headline is the recognisable device.

**Mood:** clean, sophisticated, minimal, airy, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#111827` · `#4b5563` · `#9ca3af` · `#e5e7eb` · `#f3f4f6` · `#374151` · `#f9fafb` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, SF Pro Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 48px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Articles (`blog-articles`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --color-accent-2: #a855f7;
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
    surface: '#e5e7eb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#111827',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline as a sans first line over an italic serif second line, in near-black.
- **Do:** Use dark pill buttons with icons for the primary action and grey ghost buttons for secondary.
- **Do:** Keep the page white and grey, with no colour beyond the ink.
- **Don't:** Don't add a blue or purple accent to the page.
- **Don't:** Don't use square buttons; the pills are part of the look.
- **Don't:** Don't set the entire headline in italic.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
