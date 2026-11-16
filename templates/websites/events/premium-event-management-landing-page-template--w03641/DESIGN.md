# Design system — Premium Event Management Landing Page Template

`SN-W03641` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, confident event-planning hero on a near-black ground, with a heavy sans-serif headline in white and one phrase set in an amber gradient as the page's accent. Body text is light grey in a centred block, with a solid amber button as the primary action and a dark outlined button beside it. The layout is direct, and amber is used for emphasis only.

**Mood:** bold, confident, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a3a3a3` · `#0a0a0a` · `#d4d4d4` · `#737373` · `#171717` · `#fbbf24` · `#525252` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_0_100px_rgba(10,10,10,0.8)]`, `shadow-[0_0_40px_-15px_rgba(245,158,11,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
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
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy sans-serif in white, with one key phrase in amber (#f59e0b)
- **Do:** Use the solid amber fill for the primary button only
- **Do:** Keep body copy in light grey (#d4d4d4) in narrow centred blocks
- **Don't:** Don't set body text in amber
- **Don't:** Don't use green highlights on the hero
- **Don't:** Don't use light section backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
