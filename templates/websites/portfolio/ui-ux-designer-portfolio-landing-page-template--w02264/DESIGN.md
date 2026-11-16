# Design system — UI/UX Designer Portfolio Landing Page Template

`SN-W02264` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold black studio page where a very large white sans headline is broken by one orange italic serif word, set in the orange (#ff5520) that is the page's single accent. The ground is near-black (#010510), and an orange pill button sits below the copy. The mix of heavy white sans with one orange italic word is the device that makes the hero recognisable.

**Mood:** bold, high-contrast, energetic, modern, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#010510` | Page ground |
| Surface | `#010510` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5520` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#010510` · `#d1d5db` · `#e5e7eb` · `#ff5520` · `#0f1420` · `#030816` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** DM Serif Display, Clash Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(245,63,6,0.3)]`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="border border-white/20 px-5 py-2 rounded-full flex items-center gap-2 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #010510;
  --color-surface: #010510;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff5520;
  --color-accent-2: #22c55e;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#010510',
    surface: '#010510',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff5520',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set one headline word in orange italic serif, at the same size as the sans around it.
- **Do:** Use the orange (#ff5520) for the primary button and that one headline word only.
- **Do:** Keep the hero on the near-black ground (#010510) with white sans headlines.
- **Don't:** Don't use the orange as a page background; it appears only as an accent.
- **Don't:** Don't set headlines in dark text; on this ground they are white.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
