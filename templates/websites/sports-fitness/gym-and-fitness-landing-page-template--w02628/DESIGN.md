# Design system — Gym & Fitness Landing Page Template

`SN-W02628` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black fitness hero with a lime accent. A heavy white sans-serif headline sits on two lines, and the second phrase is set in a lime-to-mint gradient. A solid lime button sits beside a grey outline button, and the supporting copy is short and light grey. The page is bold and simple, with one bright signal and little else.

**Mood:** bold, dark, simple, lime-accented, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#a3e635` · `#18181b` · `#27272a` · `#d4d4d8` · `#09090b` · `#a1a1aa` · `#71717a` · `#fafafa` · `#3f3f46` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(163,230,53,0.2)]`, `shadow-[0_0_30px_rgba(163,230,53,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-lime-400 text-zinc-950 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-lime-500 transition-colors shadow-[0_0_15px_rgba(163,230,53,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #d4d4d8;
  --color-border: #27272a;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#d4d4d8',
    line: '#27272a',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif, with the second phrase in the lime gradient.
- **Do:** Use lime (#a3e635) for the primary button and the gradient phrase only.
- **Do:** Keep the secondary button as a grey outline.
- **Don't:** Don't use the lime gradient on body text.
- **Don't:** Don't add a second primary colour to the hero.
- **Don't:** Don't set the supporting copy in white; it stays light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
