# Design system — Full Stack Designer Portfolio Template

`SN-W02022` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black stage with two soft glows: violet at the lower left and blue at the upper right. A thin white line-art cube sits above a centred two-line headline, the first line white and the second faded to grey. Body copy is small grey sans, and the glows, not panels or buttons, supply the colour. The page leads with the name and a single image-like object.

**Mood:** cinematic, technical, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#262626` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#000000` · `#3b82f6` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]`, `shadow-[0_0_15px_rgba(59,130,246,0.2)]`, `shadow-[0_0_15px_rgba(168,85,247,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full bg-white hover:bg-neutral-200 text-black font-medium text-xs py-3 rounded-lg transition-colors flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Case studies (`case-studies`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #3b82f6;
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
    background: '#050505',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the violet and blue glows blurred and placed at the corners as the only colour
- **Do:** Use one line-art icon above the headline
- **Do:** Fade the second headline line to grey
- **Don't:** Don't add solid colour panels behind the text
- **Don't:** Don't set the headline in a lighter weight than the first line
- **Don't:** Don't add a second icon style beside the line art

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
