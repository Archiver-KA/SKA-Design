# Design system — Color Visualizer Landing Page Template

`SN-W00288` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, friendly landing page on a warm off-white ground [#f3f4ef], with a dark charcoal headline and soft orange glow behind the hero. The orange [#eb4a26] is used for the primary call to action and the small badge, so the page reads as warm and confident. The large sans-serif headline is set heavy and tight, with the second line in a lighter grey for contrast.

**Mood:** warm, friendly, confident, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4ef` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#18181b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#eb4a26` | Primary action and highlights |

Palette by frequency of use: `#eb4a26` · `#e4e4e7` · `#ffffff` · `#f3f4ef` · `#18181b` · `#71717a` · `#3f3f46` · `#ffdad1` · `#52525b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#EB4A26]/5`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 transition-colors border border-zinc-200 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4ef;
  --color-surface: #27272a;
  --color-text: #111111;
  --color-muted: #18181b;
  --color-border: #e4e4e7;
  --color-accent: #eb4a26;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4ef',
    surface: '#27272a',
    ink: '#111111',
    muted: '#18181b',
    line: '#e4e4e7',
    accent: '#eb4a26',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the page on off-white (#f3f4ef) with charcoal (#18181b) headlines
- **Do:** Use the orange (#eb4a26) for the primary button and the badge only
- **Do:** Keep the hero headline heavy with a lighter second line for contrast
- **Don't:** Don't use the orange as the page background
- **Don't:** Don't add more than one accent colour
- **Don't:** Don't use a dark page ground; the design is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
