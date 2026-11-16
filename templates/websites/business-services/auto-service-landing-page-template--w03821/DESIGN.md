# Design system — Auto Service Landing Page Template

`SN-W03821` · business-services · dark mode · Sinera Atlas theme `route` · language `sk`

## Direction

A dark hero on black (#000000) with a large white Inter headline in which the phrase o vaše is set in blue (#3b82f6). A rounded photo card on the right carries a translucent dark panel with small status rows, which gives a live-workshop feel. The buttons are a white solid and a dark outline, and the blue is kept to the single highlighted phrase.

**Mood:** modern, direct, dark, service-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#525252` · `#e5e5e5` · `#000000` · `#f5f5f5` · `#3b82f6` · `#22c55e` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex group relative h-10 items-center justify-center rounded-xl bg-neutral-900 dark:bg-white px-5 text-sm font-semibold text-white dark:text-black hover:opacity-90 transition-all duration-200 shadow-lg shadow-neutral-500/20 dark:shadow-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Highlight one phrase per headline in blue (#3b82f6).
- **Do:** Set the hero on black (#000000) with white headline type.
- **Do:** Frame photos in rounded cards with a translucent dark status panel.
- **Don't:** Don't use blue for more than one highlighted phrase per section.
- **Don't:** Don't put a light background behind the hero.
- **Don't:** Don't place the status panel over the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
