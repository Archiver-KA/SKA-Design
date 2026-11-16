# Design system — Dermatology Clinic Landing Page Template

`SN-W02368` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, friendly dermatology hero on a pale grey ground, which contradicts the dark mode the template declares. The headline is set in tight dark sans-serif, with the word Deserves in light grey italic for contrast. Buttons are black pills, and there is no colour accent on the first screen, so the page reads as clean and neutral.

**Mood:** clean, neutral, friendly, minimal, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#ffffff` · `#a3a3a3` · `#525252` · `#737373` · `#fafafa` · `#e5e5e5` · `#000000` · `#262626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-semibold py-3 px-6 rounded-full transition-all bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Call to action (`cta`)
6. Articles (`blog-articles`)
7. FAQ (`faq`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #e5e5e5;
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
    surface: '#262626',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter, with the emphasis word in light grey italic.
- **Do:** Keep the page on the pale ground (#fafafa) with dark text (#171717).
- **Do:** Use black pill buttons (#171717) for the primary and outlined pills for secondary.
- **Don't:** Don't set the hero on a dark ground; the first screen is light.
- **Don't:** Don't add a brand colour to buttons; the page is monochrome.
- **Don't:** Don't set the headline in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
