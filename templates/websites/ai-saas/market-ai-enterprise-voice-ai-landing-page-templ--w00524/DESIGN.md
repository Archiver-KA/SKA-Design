# Design system — Market.AI Enterprise Voice AI Landing Page Template

`SN-W00524` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black voice-AI page with very large white sans headlines, one of them wrapping onto a second line, on a #0a0a0a ground. A faint orange (#f97316) glow sits at the top edge, and the small pill tags and nav stay in grey. The bold type and the single warm glow make the product read as enterprise software rather than a playful tool.

**Mood:** enterprise, bold, futuristic, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#f97316` · `#737373` · `#171717` · `#a3a3a3` · `#22c55e` · `#404040` · `#4ade80` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-orange-900/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black hover:bg-neutral-200 text-xs font-medium px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Stats band (`stats`)
5. Code / terminal (`code-terminal`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
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
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#262626',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines in very large white sans-serif type.
- **Do:** Use the orange (#f97316) only for the top glow and one highlight per section.
- **Do:** Keep the nav and small tags in grey on the black ground.
- **Don't:** Don't set the page on an orange ground; it stays near-black.
- **Don't:** Don't use the green (#22c55e) on buttons; it is for status only.
- **Don't:** Don't add light panels to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
