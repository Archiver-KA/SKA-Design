# Design system — AI Ad Creatives SaaS Landing Page Template

`SN-W00028` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A bright, conversion-first light page where the headline does the work: heavy, tight Inter at 72px in near-black, with the second line in red-orange (#e43d30) and a red-orange button directly under it. The ground is white with a faint pink wash at the top, and red is kept for the headline phrase and primary buttons. Sections are simple, centred and separated by white space.

**Mood:** bold, energetic, direct, clean, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#777777` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e43d30` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e43d30` · `#111111` · `#777777` · `#e5e7eb` · `#f9fafb` · `#444444` · `#f3f4f6` · `#f97316` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-glow`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-gradient-brand hover:brightness-110 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-glow hover:shadow-[0_0_20px_rgba(241,90,60,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #111111;
  --color-text: #111111;
  --color-muted: #777777;
  --color-border: #e5e7eb;
  --color-accent: #e43d30;
  --color-accent-2: #e2e8f0;
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
    surface: '#111111',
    ink: '#111111',
    muted: '#777777',
    line: '#e5e7eb',
    accent: '#e43d30',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at about 72px with the second line in red-orange (#e43d30)
- **Do:** Use the red-orange only for the primary button and the headline accent
- **Do:** Keep sections centred on white with generous space between them
- **Don't:** Don't use a red page background; the ground is white
- **Don't:** Don't set body copy in pure black; the grey (#777777) carries secondary text
- **Don't:** Don't add a second saturated accent colour beside the red-orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
