# Design system — Premium Chauffeur Service Landing Page Template

`SN-W04060` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A dark, cinematic hero with a full-width photograph of a car behind a shadowed gradient, giving the chauffeur service a premium tone. Gold (#d4af37) marks the primary button and the small availability badge, while large white headlines with a muted second line set the hierarchy. The navigation floats translucent over the photo, so the chrome stays quiet and the image carries the page.

**Mood:** premium, cinematic, dark, understated, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#000000` · `#27272a` · `#18181b` · `#a16207` · `#52525b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Audiowide
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-gold-400/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all group hover:border-gold-400/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Bento grid (`bento-grid`)
9. Logo cloud (`logo-cloud`)
10. Testimonials (`testimonials`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on a dark ground (#18181b) with the photograph behind a shadowed gradient
- **Do:** Use gold (#d4af37) only for the primary button and the availability badge
- **Do:** Break headlines over two or three lines, with the final line in a muted grey
- **Don't:** Don't place light backgrounds behind the hero; the dark photographic ground is part of the look
- **Don't:** Don't use gold for body text, links or icons outside the badge and button
- **Don't:** Don't cover the photograph with large solid panels; the image should stay visible

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
