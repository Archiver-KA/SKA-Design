# Design system — Startup Network Landing Page Template

`SN-W00735` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained dark community hero: a near-black ground with a large white headline whose last line steps down to a lighter grey. A small badge sits above it, and a faint violet glow lives in the lower right corner as the only colour. The primary button is white with dark text beside a thin outlined secondary, and short grey copy keeps the page calm.

**Mood:** restrained, calm, dark, community, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#09090b` · `#d4d4d8` · `#71717a` · `#e4e4e7` · `#27272a` · `#3f3f46` · `#fafafa` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_30px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium transition-all bg-white text-zinc-950 hover:bg-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Process / steps (`how-it-works`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #fafafa;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #3b82f6;
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
    surface: '#3f3f46',
    ink: '#fafafa',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans, with the last line in lighter grey.
- **Do:** Keep the primary button white with dark text and the secondary as an outline.
- **Do:** Use the violet glow in one corner only, not across the page.
- **Don't:** Don't add a bright accent to the headline.
- **Don't:** Don't spread the glow over the whole background; it is a corner light.
- **Don't:** Don't stack more than one badge above the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
