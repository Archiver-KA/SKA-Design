# Design system — AI Operations SaaS Landing Page Template

`SN-W00122` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Beam is a light, crisp SaaS page on a white ground, with a large dark sans headline and a grey second line where the final word fades. The primary button is solid green (#16a34a), the only saturated colour in the hero, and a secondary white button sits beside it. A small monospace version tag and a hairline border give the page a developer-tool tone.

**Mood:** light, crisp, developer-focused, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#fca5a5` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#16a34a` · `#6b7280` · `#f3f4f6` · `#e5e7eb` · `#f9fafb` · `#1f2937` · `#dcfce7` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-gray-200/40`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-green-600 hover:bg-green-500 text-white text-base font-medium px-8 py-3.5 rounded-xl shadow-xl shadow-green-200/50 transition-all transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Code / terminal (`code-terminal`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #16a34a;
  --color-accent-2: #fca5a5;
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
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#16a34a',
    accent2: '#fca5a5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark sans (#111827), with the second line faded to grey
- **Do:** Use the green (#16a34a) for the primary button and the status signals
- **Do:** Use a monospace tag with a hairline border for version or status labels
- **Don't:** Don't use the pink (#fca5a5) as an accent; it appears only in the secondary colours
- **Don't:** Don't fill the hero with colour blocks; it stays white
- **Don't:** Don't use heavy shadows on the cards; they use hairline borders

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
