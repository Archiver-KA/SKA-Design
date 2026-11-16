# Design system — Sakura AI Agency Landing Page Template

`SN-W01685` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cream page with a soft orange glow behind the header and a black pill button for the main action. The first screen is mostly empty space, so the design leans on the glow and generous spacing rather than imagery. Orange (#f97316) is used as light, not as a text colour.

**Mood:** calm, airy, warm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf7f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#e5e5e5` · `#fb923c` · `#171717` · `#a3a3a3` · `#737373` · `#ea580c` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-neutral-900/5`, `shadow-md`, `shadow-orange-500/10`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf7f2;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf7f2',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero background cream (#faf7f2) with the orange glow behind the content.
- **Do:** Use black (#171717) for primary buttons; orange stays in the glow.
- **Do:** Leave generous space above the headline; the first screen carries little content.
- **Don't:** Don't use orange as a solid button fill; the template uses black for actions.
- **Don't:** Don't add busy imagery to the first screen; the design depends on space.
- **Don't:** Don't use a dark background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
