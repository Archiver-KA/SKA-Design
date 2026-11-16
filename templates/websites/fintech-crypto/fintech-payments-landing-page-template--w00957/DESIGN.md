# Design system — Fintech Payments Landing Page Template

`SN-W00957` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#09090b) with a large white headline and its second line in mint green (#10b981). Buttons pair a solid mint primary with a dark outlined secondary, and the hero shows a dashboard outline in dark grey. The restraint of two colours on a dark ground gives the page a precise, quiet tone.

**Mood:** dark, precise, quiet, neutral, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#10b981` · `#71717a` · `#34d399` · `#18181b` · `#a1a1aa` · `#09090b` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(16,185,129,0.3)]`, `shadow-2xl`, `shadow-[0_0_40px_rgba(16,185,129,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 text-zinc-950 font-medium rounded-full hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Footer (`footer`)

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
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #10b981;
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
    muted: '#71717a',
    line: '#27272a',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in mint green (#10b981).
- **Do:** Use dark grey surfaces (#18181b) for product frames.
- **Do:** Keep the page to white, grey and mint only.
- **Don't:** Don't add a third accent colour.
- **Don't:** Don't use soft glow behind the hero.
- **Don't:** Don't set the primary button in white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
