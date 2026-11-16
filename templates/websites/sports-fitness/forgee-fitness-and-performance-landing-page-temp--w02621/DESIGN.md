# Design system — FORGEE Fitness & Performance Landing Page Template

`SN-W02621` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, high-contrast gym hero with one orange highlight. Uppercase Inter headlines stack in short lines, with the word MÁGICA in orange (#e8420a) and the rest in white, and a small grey tracked caps line sits above. A solid orange button and a white outline button share the header, and the copy is in Portuguese.

**Mood:** dark, high-contrast, uppercase, focused, forceful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e8e8e8` | Headings and primary copy |
| Accent | `#e8420a` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#e8e8e8` · `#e8420a` · `#25d366` · `#1da851` · `#ffe8e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Syncopate, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, black, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(232,66,10,0.05)]'`, `shadow-[0_0_40px_rgba(232,66,10,0.4)]`
- **Content width:** `max-w-[1440px]`, `max-w-[800px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-[var(--neutral-0)] text-[var(--neutral-950)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[var(--flame-500)] hover:text-[var(--neutral-0)] transition-all duration-300">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #e8e8e8;
  --color-accent: #e8420a;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#e8e8e8',
    accent: '#e8420a',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase Inter with one orange word per headline.
- **Do:** Use the orange (#e8420a) for the header button and the single highlighted word.
- **Do:** Keep the small tracked caps line above the headline in grey.
- **Don't:** Don't set the whole headline in orange; only one word takes the accent.
- **Don't:** Don't put orange on the grey small caps.
- **Don't:** Don't place a light background behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
