# Design system — Roofing Services Landing Page Template

`SN-W04088` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, dramatic hero on a deep blue ground, with a large faded watermark of the company name behind the copy. The headline is bold white sans, and its second line is set in a lighter blue that carries the emphasis. Solid blue buttons and a white outline button sit under the copy, above a solid blue utility strip.

**Mood:** dramatic, bold, dependable, dark, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#52525b` · `#f4f4f5` · `#fafafa` · `#71717a` · `#e4e4e7` · `#27272a` · `#a1a1aa` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-soft`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-brand-500 text-white hover:bg-brand-600 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Team (`team`)
7. Services (`services`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#52525b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, with the second line in a lighter blue
- **Do:** Keep the company watermark faint behind the hero copy
- **Do:** Use solid blue for the primary button and a white outline for the secondary one
- **Don't:** Don't make the watermark more visible than the headline
- **Don't:** Don't set body copy in pale blue on the dark ground; it stays white or grey
- **Don't:** Don't add more than two buttons to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
