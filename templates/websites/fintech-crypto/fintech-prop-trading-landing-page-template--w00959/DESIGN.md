# Design system — Fintech Prop Trading Landing Page Template

`SN-W00959` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page (#020202) with a large headline in Satoshi, where the middle word fades from white to grey. A scrolling ticker at the top shows prices in green (#22c55e) and red (#ef4444), which carries the trading theme into the hero. Surfaces are dark grey (#18181b) and the layout is long, with many modular sections.

**Mood:** dark, data-driven, premium, high-contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#18181b` · `#34d399` · `#52525b` · `#22c55e` · `#3f3f46` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Satoshi
- **Loaded families:** Satoshi
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Navigation bar (`navbar`)
3. Logo cloud (`logo-cloud`)
4. Hero (`hero`)
5. Pricing (`pricing`)
6. Bento grid (`bento-grid`)
7. Feature grid (`features`)
8. Benefits (`benefits`)
9. Stats band (`stats`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #ef4444;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #020202 and surfaces at #18181b.
- **Do:** Use green (#22c55e) for gains and red (#ef4444) for losses only.
- **Do:** Set the hero headline very large with a white-to-grey fade on one word.
- **Don't:** Don't use red or green decoratively.
- **Don't:** Don't put light backgrounds between dark sections.
- **Don't:** Don't drop the ticker from the top of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
