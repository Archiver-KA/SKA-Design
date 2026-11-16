# Design system — Workifyr Enterprise SaaS Landing Page Template

`SN-W00837` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black enterprise hero with a thin white headline set in Inter at 72px and a faint green glow behind the page. Buttons are dark pills with a green outline and soft glow, and a neutral outlined pill for the second action. Green (#10b981) is the one accent, kept to the glow and the button edges, so the page feels precise and quiet rather than loud.

**Mood:** precise, dark, enterprise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05070d` | Page ground |
| Surface | `#030610` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#030610` · `#a7f3d0` · `#020617` · `#6ee7b7` · `#fbbf24` · `#05070d` · `#02050d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 14px · body 11px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_18px_rgba(52,211,153,0.42),0_0_38px_rgba(16,185,129,0.28),inset_0_0_14px_rgba(52,211,153,0.18)]`, `shadow-[0_0_30px_rgba(52,211,153,0.65),0_0_70px_rgba(16,185,129,0.45),inset_0_0_22px_rgba(52,211,153,0.22)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-2`

**Primary button**

```html
<a class="rounded-full px-4 py-1.5 text-xs font-light text-white/65 transition-colors hover:bg-white/10 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Code / terminal (`code-terminal`)
4. Navigation bar (`navbar`)
5. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05070d;
  --color-surface: #030610;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05070d',
    surface: '#030610',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero headline in Inter at 72px, weight light to regular, in white
- **Do:** Use the green (#10b981) only for button edges and the soft glow behind the hero
- **Do:** Give primary buttons a dark fill with a green outline
- **Don't:** Don't fill buttons with solid green
- **Don't:** Don't add more than one glow source per section
- **Don't:** Don't set the headline in bold; the look depends on the light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
