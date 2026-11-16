# Design system — Elite Fitness Coaching Landing Page Template

`SN-W02589` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, high-contrast coaching page on near-black, with a very large white headline and a bright lime (#e7ff72) second line. The lime is the only colour and is used for the headline emphasis and the small logo mark, and the layout uses a thin-bordered nav and a bold sans-serif. Lime works as an accent rather than a background, and the page ground stays near-black throughout.

**Mood:** dark, high-contrast, bold, energetic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e7ff72` | Primary action and highlights |

Palette by frequency of use: `#e7ff72` · `#ffffff` · `#0a0a0a` · `#000000` · `#9ca3af` · `#151515` · `#6b7280` · `#4b5563` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Impact
- **Body:** Impact
- **Loaded families:** Impact
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-[#e7ff72] text-black px-5 py-2.5 rounded-full font-semibold text-lg hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e7ff72;
  --font-display: "Impact", sans-serif;
  --font-body: "Impact", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e7ff72',
  },
  fontFamily: { display: ['Impact'], sans: ['Impact'] },
} }
```

## Do and don't

- **Do:** Set the emphasised headline line in the lime (#e7ff72) and keep the rest white
- **Do:** Use the lime for the logo mark and the primary action only
- **Do:** Keep the page on the near-black ground with a thin border under the nav
- **Don't:** Don't use the lime as a page background; it is the accent and the ground is near-black
- **Don't:** Don't set body copy in lime; it is for emphasis
- **Don't:** Don't set the page to a light ground; it is dark throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
