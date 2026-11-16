# Design system — Macrolens Academy Landing Page Template

`SN-W03498` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A premium dark academy page built on near-black (#0a0a0a) with a low, warm glow behind the hero. Inter sets the headline in large, heavy weights, and a single italic amber word (#f59e0b) carries the emphasis. Amber is used sparingly on key accents, while white and grey do the work of structure.

**Mood:** premium, restrained, dark, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a3a3a3` · `#737373` · `#171717` · `#000000` · `#262626` · `#fbbf24` · `#0a0a0a` · `#d97706`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(245,158,11,0.3)]`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[1000px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Booking form (`booking`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word in italic amber (#f59e0b) inside each large headline
- **Do:** Keep the warm glow behind the hero low in opacity and centred
- **Do:** Use white primary buttons beside grey secondary buttons for calls to action
- **Don't:** Don't use amber for body text or large filled areas
- **Don't:** Don't brighten the background above near-black
- **Don't:** Don't replace the glow with a flat fill; the depth is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
