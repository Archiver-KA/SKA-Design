# Design system — Studio EMS Fitness Landing Page Template

`SN-W02685` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

Dark-hero fitness landing page. The first screen sits on a near-black gradient, with a large white sans headline whose second line is set in warm orange (#ffa62e). Glass-style panels and the orange primary button sit on the dark ground, so the orange is the strongest signal on screen. The template is labelled light, but its opening screen reads as dark, so the dark ground is the real page ground.

**Mood:** dark hero, energetic, bold, clean sans

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ffa62e` | Primary action and highlights |

Palette by frequency of use: `#ffa62e` · `#ffffff` · `#18181b` · `#27272a` · `#09090b` · `#d4d4d8` · `#a1a1aa` · `#e4e4e7` · `#3f3f46` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,166,46,0.3)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#ffa62e] hover:bg-[#e6901a] text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. FAQ (`faq`)
6. Articles (`blog-articles`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ffa62e;
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
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ffa62e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on the near-black gradient (#09090b) with white headlines.
- **Do:** Use orange (#ffa62e) for the second headline line and the primary button only.
- **Do:** Set headlines in Inter at large size with tight leading.
- **Don't:** Don't put orange on large background areas; it is an emphasis colour.
- **Don't:** Don't switch the hero to a light background to match the light mode label.
- **Don't:** Don't add a second accent colour to the hero beside white and orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
