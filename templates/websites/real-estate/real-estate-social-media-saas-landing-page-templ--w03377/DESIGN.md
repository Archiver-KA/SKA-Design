# Design system — Real Estate Social Media SaaS Landing Page Template

`SN-W03377` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Clean product-marketing page built around one large centred headline in near-black sans, with a single highlighted word set in blue. The primary action is a blue button in the navbar and a black pill in the hero, so blue marks the brand and black carries the main call to action. Grey subhead copy sits under the headline on a white ground with generous space.

**Mood:** clean, centred, confident, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#171717` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#e5e5e5` · `#f5f5f5` · `#fafafa` · `#262626` · `#a3a3a3` · `#525252` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-brand-500/30`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-base font-medium rounded-full transition-all shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Integrations (`integrations`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #2563eb;
  --color-accent-2: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#2563eb',
    accent2: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline word in blue (#2563eb) and leave the rest of the headline in near-black.
- **Do:** Use the black pill (#171717) for the hero call to action and the blue for the navbar trial button.
- **Do:** Keep the subhead in grey (#737373) at a lighter weight than the headline.
- **Don't:** Don't set the whole headline in colour; only one word takes the accent.
- **Don't:** Don't square off the rounded pill buttons.
- **Don't:** Don't set long body copy centred; centring is for the headline block only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
