# Design system — Luxury Travel Membership Landing Page Template

`SN-W03110` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black hero (#09090b) with a large white sans-serif headline in three lines, the middle line in grey. A small gold (#fbbf24) eyebrow sits above it, and a solid gold button with dark text sits below the subline. Gold is the only colour and marks the eyebrow and the main call to action. A small grey note under the button keeps the tone calm, and the layout is centred and formal.

**Mood:** exclusive, dark, focused, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#71717a` · `#27272a` · `#a1a1aa` · `#f4f4f5` · `#18181b` · `#fbbf24` · `#e4e4e7` · `#09090b` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="bg-amber-400 text-zinc-950 px-8 py-3 rounded-md font-medium text-base hover:bg-amber-300 transition-colors w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Sign-in form (`auth-form`)
7. Contact form (`contact-form`)
8. Services (`services`)
9. FAQ (`faq`)
10. Process / steps (`how-it-works`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #fbbf24;
  --color-accent-2: #34d399;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#fbbf24',
    accent2: '#34d399',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the gold (#fbbf24) for the eyebrow and the single primary button
- **Do:** Set the headline in sans-serif with the middle line in grey
- **Do:** Add a short grey note under the primary button to lower the commitment
- **Don't:** Don't use the emerald (#34d399) in the hero
- **Don't:** Don't fill more than one button in gold on the same screen
- **Don't:** Don't set the subline in pure white; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
