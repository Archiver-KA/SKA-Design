# Design system — PostNimbus SaaS Landing Page Template

`SN-W00633` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bright workflow page with heavy black sans-serif headlines stacked tightly over four lines, and the final phrase set in indigo (#6366f1). The ground is near-white with only a faint lavender glow at the top, and the indigo solid button echoes the phrase colour. The product is reduced to a workspace path bar, so the message is carried by type.

**Mood:** bold, clear, workflow, indigo, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#38bdf8` · `#8b5cf6` · `#c7d2fe` · `#0ea5e9` · `#34d399` · `#e7e8ee` · `#e0e7ff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Inter Tight
- **Scale (largest breakpoint):** h3 26px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_40px_80px_-40px_rgba(11,15,25,0.22)]`, `shadow-[0_40px_80px_-45px_rgba(11,15,25,0.2)]`
- **Content width:** `max-w-[80rem]`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center gap-1.5 rounded-full bg-[var(--pn-ink)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--pn-primary)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Process / steps (`how-it-works`)
5. Logo cloud (`logo-cloud`)
6. Integrations (`integrations`)
7. Dashboard preview (`dashboard-preview`)
8. Pricing (`pricing`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, black on white, with the final phrase in indigo (#6366f1)
- **Do:** Use an indigo (#6366f1) solid primary button that matches the headline phrase
- **Do:** Keep the background near-white with at most a faint lavender glow
- **Don't:** Don't set the page on a solid lavender ground; it is white
- **Don't:** Don't use more than one indigo phrase per screen
- **Don't:** Don't use light headline weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
