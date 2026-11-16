# Design system — Byte Builders Technology Agency Template

`SN-W01462` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#09090b]) with an indigo ([#6366f1]) gradient on the phrase Growth Systems and a white headline in a heavy sans. Stat cards with large white numerals sit under the hero, and the buttons are a solid indigo and a dark outline. The look is clean and product-led, with the gradient as the only colour statement.

**Mood:** clean, dark, product-led, confident, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#f4f4f5` · `#6366f1` · `#71717a` · `#a1a1aa` · `#18181b` · `#09090b` · `#111113` · `#818cf8` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Syne
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-black/50`, `shadow-lg`, `shadow-[0_0_30px_rgba(99,102,241,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden sm:flex text-sm font-medium bg-indigo-500 text-white px-5 py-2.5 rounded-full hover:bg-indigo-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Marquee (`marquee`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --color-accent-2: #22d3ee;
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
    ink: '#f4f4f5',
    muted: '#27272a',
    line: '#27272a',
    accent: '#6366f1',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo gradient only on the highlighted phrase in the headline
- **Do:** Set stats as large white numerals on dark cards
- **Do:** Keep the primary button solid indigo (#6366f1) with white text
- **Don't:** Don't use indigo as a page background
- **Don't:** Don't put the gradient on the stat numbers
- **Don't:** Don't add a second gradient to the same section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
