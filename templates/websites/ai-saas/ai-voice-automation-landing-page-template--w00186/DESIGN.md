# Design system — AI Voice Automation Landing Page Template

`SN-W00186` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

Light page on white with a large sans-serif headline in near-black, where the second line is set in grey for a two-tone statement. A deep indigo primary button sits beside a small trust line with avatars, and a phone mockup with chat bubbles carries the product on the right. The palette is near-neutral, and indigo (#4f46e5) appears only in the button and the user's chat bubble.

**Mood:** clean, neutral, product-led, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#737373` · `#f5f5f5` · `#4f46e5` · `#fafafa` · `#e0e7ff` · `#525252` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 68px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="h-12 lg:h-14 px-8 bg-white text-neutral-950 rounded-xl font-semibold hover:bg-neutral-200 focus:ring-2 focus:ring-white/20 transition-all flex items-center justify-center gap-2 lg:w-auto w-full shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-70 disabled:cursor-not-allowed">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Video / media (`video-media`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif near-black, with the second line in grey
- **Do:** Use the indigo (#4f46e5) for the primary button and the user chat bubbles only
- **Do:** Keep the page on white and use the phone mockup as the main visual
- **Don't:** Don't colour section backgrounds; the page stays on white and light grey
- **Don't:** Don't use indigo for body copy or links; it is reserved for actions
- **Don't:** Don't drop the trust line with avatars under the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
