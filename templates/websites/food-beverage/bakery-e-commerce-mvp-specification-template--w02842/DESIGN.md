# Design system — Bakery E‑Commerce MVP Specification Template

`SN-W02842` · food-beverage · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark technical specification page on near-black (#09090b), with a bold white Inter headline whose second line fades into grey. The primary action is a white pill beside a dark outline pill, and a small green dot (#34d399) marks the version badge, the only colour in the hero. Sections are divided by hairline rules, so the page reads as a flat, document-like spec rather than a marketing site.

**Mood:** technical, dark, sober, documentary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#ffffff` · `#71717a` · `#18181b` · `#34d399` · `#fbbf24` · `#3f3f46` · `#60a5fa` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 16px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #34d399;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#34d399',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#09090b) with near-white (#f4f4f5) headings
- **Do:** Use the green (#34d399) only for status dots and small markers
- **Do:** Separate sections with hairline rules, as the spec layout does
- **Don't:** Don't add further gradients to headings beyond the faded second line
- **Don't:** Don't use the blue (#60a5fa) for large areas; it is a secondary accent
- **Don't:** Don't set section headings in small caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
