# Design system — Marketing Agency Collective Landing Page Template

`SN-W01634` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A neutral dark-grey agency page on charcoal (#262626) with a large white sans headline in two lines, where the second line fades into grey so tone carries the emphasis. Buttons are white pills, and the hero is topped by a small floating nav and followed by a wide dashboard mock with a faint line chart. No accent colour appears on the first screen, so the page looks monochrome and tech-led.

**Mood:** monochrome, tech-led, neutral, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#262626` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ff7a59` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#262626` · `#a3a3a3` · `#171717` · `#404040` · `#0a0a0a` · `#737373` · `#f5f5f5` · `#d4d4d4` · `#e5e5e5` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 16px
- **Weights in use:** normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="font-normal px-4 py-1.5 rounded-full transition-colors bg-neutral-100 text-neutral-950 hover:bg-neutral-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #262626;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ff7a59;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#262626',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#ff7a59',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome: white and grey type on charcoal (#262626)
- **Do:** Use white pills for primary and outline pills for secondary actions
- **Do:** Show the product as a wide dashboard mock beneath the CTA row
- **Don't:** Don't add a bright accent without a clear role; none shows in the hero
- **Don't:** Don't put the dashboard mock on a light panel
- **Don't:** Don't set the whole second headline line in pure white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
