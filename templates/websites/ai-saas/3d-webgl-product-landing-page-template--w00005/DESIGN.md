# Design system — 3D WebGL Product Landing Page Template

`SN-W00005` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page holds a very large sans headline, with 'Digital' in solid white and 'serenity.' fading into grey. The only warm colour is the small amber mark (#f59e0b) in the logo and the top-bar button, so the page reads cool and quiet. The primary action is a white pill, and the install command sits beside it as a dark monospaced pill.

**Mood:** calm, atmospheric, minimal, developer-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f59e0b` · `#34d399` · `#fde68a` · `#fbbf24` · `#0f172a` · `#e5e7eb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-3 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Dashboard preview (`dashboard-preview`)
6. App download (`app-download`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large, with the second line in a fading grey
- **Do:** Use the amber (#f59e0b) only for the logo mark and the top-bar button
- **Do:** Pair the primary call to action with a monospaced code pill for install commands
- **Don't:** Don't use the amber as a page background colour
- **Don't:** Don't put white text on light page backgrounds
- **Don't:** Don't add accent colours beyond the amber and neutral greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
