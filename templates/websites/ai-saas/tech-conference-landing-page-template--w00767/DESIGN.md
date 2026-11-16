# Design system — Tech Conference Landing Page Template

`SN-W00767` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero with a deep purple glow across the top half and a large white Inter headline, The Next Tech, with the version number 1.0 in lilac (#c084fc). A thin subtitle of three words separated by bars sits beneath, with pills for date and venue. Below, three dark zone cards with small tags make the page read like an event guide.

**Mood:** bold, dark, event-led, purple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a855f7` · `#c084fc` · `#18181b` · `#a1a1aa` · `#52525b` · `#27272a` · `#050505` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_-5px_rgba(168,85,247,0.4)]`, `shadow-[0_0_10px_rgba(168,85,247,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all shadow-[0_0_15px_-5px_rgba(168,85,247,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Bento grid (`bento-grid`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, large and centred, with the version number in lilac (#c084fc)
- **Do:** Use the purple glow only as a wash behind the hero
- **Do:** Keep event cards dark (#18181b) with small uppercase tags in the corner
- **Don't:** Don't use a light background for event sections
- **Don't:** Don't colour more than the version number in the headline
- **Don't:** Don't use the purple as a fill for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
