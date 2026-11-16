# Design system — AI Lead Engine Landing Page Template

`SN-W00114` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Agency Valet is a light, plain lead-generation page on an off-white ground (#fafafa), with a large dark sans headline and a grey second line. Its primary and secondary buttons are a solid near-black pill and a white outline pill, so the page uses charcoal rather than a colour for action. A pale blue status tag sits above the title, and the page is kept spare with generous margins.

**Mood:** light, plain, direct, spare, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#71717a` · `#fafafa` · `#ffffff` · `#f4f4f5` · `#52525b` · `#3f3f46` · `#4f46e5` · `#e0e7ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-zinc-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark sans on the off-white ground (#fafafa), with the second line in grey
- **Do:** Use the near-black pill (#18181b) for the primary action and a white outline pill for the second
- **Do:** Keep the status tag small and pale, above the headline
- **Don't:** Don't use indigo (#4f46e5) as a button colour; the buttons are near-black
- **Don't:** Don't add gradients to the headline; the type is flat
- **Don't:** Don't fill the hero with a colour block

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
