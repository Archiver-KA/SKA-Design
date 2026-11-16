# Design system — AI UX Audit Landing Page Template

`SN-W00172` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Minimal dark page on near-black (#09090b) with almost no colour: the headline is white in Inter at heavy weight with a grey second line, and the buttons are white and charcoal. The nav is bare text with no container, and the hero is left open with generous empty space. Colour is held back entirely, so the page reads as plain and quiet.

**Mood:** minimal, quiet, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#ffffff` · `#18181b` · `#71717a` · `#3f3f46` · `#09090b` · `#10b981` · `#52525b` · `#f43f5e` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-950 text-sm font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Product grid (`product-grid`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ffffff;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ffffff',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary call to action as a solid white button with dark text
- **Do:** Keep the second headline line in muted grey (#71717a) for contrast
- **Do:** Leave the hero free of decoration; the empty space is part of the style
- **Don't:** Don't add an accent colour to buttons or headlines; the page is white and grey
- **Don't:** Don't give the navigation a filled bar; it sits directly on the page
- **Don't:** Don't use a light hero ground; the page stays near-black throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
