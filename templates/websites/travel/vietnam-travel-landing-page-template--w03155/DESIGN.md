# Design system — Vietnam Travel Landing Page Template

`SN-W03155` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic travel hero on near-black (#000000) with soft coloured glows behind the content. The headline is huge heavy white sans, and its second word carries a lime-to-cyan-to-violet gradient, with a thin lime bar along the bottom edge. The search field is a dark card with a faint outline, so the page reads as night mode.

**Mood:** cinematic, dark, bold, vivid, night

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#a1a1aa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#000000` · `#a1a1aa` · `#71717a` · `#a855f7` · `#06b6d4` · `#18181b` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-purple-900/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #a1a1aa;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a3e635;
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
    background: '#000000',
    surface: '#a1a1aa',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the second word in the lime-to-violet gradient
- **Do:** Use the lime (#a3e635) for the bottom edge bar and one primary cue
- **Do:** Keep the search field as a dark card with a faint outline
- **Don't:** Don't use the lime as a full-page ground; it is an accent
- **Don't:** Don't use more than one gradient headline
- **Don't:** Don't set body copy in lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
