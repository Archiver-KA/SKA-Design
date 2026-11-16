# Design system — Restaurant Lunch Landing Page Template

`SN-W02990` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark lunch hero on a near-black ground (#09090b), with a large white Forum headline, a grey subtitle, and two buttons: a white filled View Lunch Menu and a rust-filled Order Click and Collect (#c65a1e). A row of four service points with icons sits below on a thin rule, which marks the lunch offer apart from the main restaurant page.

**Mood:** dark, serif-led, practical, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#c65a1e` | Primary action and highlights |

Palette by frequency of use: `#c65a1e` · `#ffffff` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#09090b` · `#f4f4f5` · `#18181b` · `#e4e4e7` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Forum
- **Body:** Forum
- **Loaded families:** Forum, Open Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(198,90,30,0.3)]`, `shadow-[0_0_15px_#C65A1E]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#C65A1E] text-white text-lg font-medium hover:bg-[#a84a16] transition-all duration-200 shadow-[0_0_20px_rgba(198,90,30,0.3)] flex items-center justify-center gap-2 border border-[#C65A1E]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Menu list (`menu-list`)
5. Call to action (`cta`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #c65a1e;
  --font-display: "Forum", sans-serif;
  --font-body: "Forum", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#c65a1e',
  },
  fontFamily: { display: ['Forum'], sans: ['Forum'] },
} }
```

## Do and don't

- **Do:** Use rust (#c65a1e) for the single order action button.
- **Do:** Set the headline in Forum at a large size, centred.
- **Do:** Put the service points in a row below the hero on a thin rule.
- **Don't:** Don't fill both buttons with rust; the menu button stays white.
- **Don't:** Don't put light backgrounds behind the serif headline.
- **Don't:** Don't use rust for the navigation text links.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
