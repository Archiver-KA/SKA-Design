# Design system — PulseGrid SaaS Landing Page Template

`SN-W00651` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-duplicate of its sibling creative-operations page, with the same headline, black pill button and faint mint and blue wash. Heavy Inter at display size carries the page in near-black on white, and integration chips run in a row beneath the buttons. Mint (#34d399) is limited to a status dot and the background wash, while the black button carries the action.

**Mood:** calm, airy, clean, tool-like, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#09090b` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e4e4e7` · `#09090b` · `#fafafa` · `#52525b` · `#71717a` · `#18181b` · `#3f3f46` · `#d4d4d8` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[1.25rem]` (1.25rem)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Product grid (`product-grid`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #09090b;
  --color-muted: #52525b;
  --color-border: #e4e4e7;
  --color-accent: #09090b;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#09090b',
    muted: '#52525b',
    line: '#e4e4e7',
    accent: '#09090b',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, near-black (#09090b) on white, across three lines
- **Do:** Make the primary button a black pill and keep the secondary button a light outline
- **Do:** Keep the mint and blue wash faint at the top and away from text
- **Don't:** Don't use mint (#34d399) for buttons; it marks status only
- **Don't:** Don't add a strong colour block to the hero
- **Don't:** Don't set integration chips in saturated colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
