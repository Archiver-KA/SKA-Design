# Design system — Slater Gym Fitness Landing Page Template

`SN-W02674` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark gym page on #0a0a0a with heavy white sans-serif headlines, where the second line is set in blue (#3b82f6). Pill-shaped blue buttons carry the calls to action, and a small uppercase eyebrow sits above the headline. A dimmed photograph of gym equipment sits behind the hero. The design is a close sibling of the other dark blue gym template, with the same type and colour roles.

**Mood:** direct, dark, clean, motivating, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#0a0a0a` · `#a3a3a3` · `#2563eb` · `#737373` · `#1e3a8a` · `#171717` · `#d4d4d4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-blue-900/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-neutral-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. About (`about`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in #3b82f6 and keep the first line white.
- **Do:** Use #3b82f6 for primary pill buttons and outlined buttons for secondary actions.
- **Do:** Place a small uppercase eyebrow above each hero headline.
- **Don't:** Don't use the green (#22c55e) for buttons.
- **Don't:** Don't use blue for body text.
- **Don't:** Don't put light text on the bright parts of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
