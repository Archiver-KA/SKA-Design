# Design system — Tai Chi Studio Landing Page Template

`SN-W02688` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

Calm wellness studio landing page on a warm off-white ground (#f5f5f4). The layout is airy, with a left-set headline, large empty space and one small green mark (#a7f3d0) as the only accent.

**Mood:** calm, airy, minimal, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#4a4e46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e0d8c8` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#a7f3d0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e0d8c8` · `#1c1917` · `#a8a29e` · `#4a4e46` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#292524` · `#3c3832`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-white text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-200 transition hidden md:block">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Bento grid (`bento-grid`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #4a4e46;
  --color-text: #ffffff;
  --color-muted: #e0d8c8;
  --color-border: #e7e5e4;
  --color-accent: #a7f3d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#4a4e46',
    ink: '#ffffff',
    muted: '#e0d8c8',
    line: '#e7e5e4',
    accent: '#a7f3d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground warm off-white (#f5f5f4) and the accent a single small green (#a7f3d0).
- **Do:** Leave generous empty space around the headline; the layout depends on it.
- **Do:** Set the headline at full opacity so it reads clearly on the light ground.
- **Don't:** Don't add a second accent colour; the green is the only one.
- **Don't:** Don't set the hero headline in a pale tone on a light ground; it becomes unreadable.
- **Don't:** Don't fill the hero with imagery; the hero is type and space.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
