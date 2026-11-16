# Design system — Beauty Salon Landing Page Template

`SN-W02725` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Near-black page with a rose-red glow behind the hero and rose used for small highlights such as the status dot and the rating. The headline is large and bold sans-serif, with the lower lines fading toward grey, which gives the type a layered look. Translucent blurred cards float over the hero image, creating depth without drop shadows.

**Mood:** bold, cinematic, dark, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#f43f5e` · `#fb7185` · `#262626` · `#e5e5e5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[0_0_8px_rgba(244,63,94,0.6)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #404040;
  --color-accent: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#404040',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines large and bold in Inter, with the lower lines faded toward grey
- **Do:** Use rose (#f43f5e) for the status dot, the rating and one highlight per view
- **Do:** Place cards as translucent blurred panels over the hero image
- **Don't:** Don't use rose for large fills or full buttons; the primary button is white
- **Don't:** Don't flatten the hero; the floating card stack gives it its depth
- **Don't:** Don't move to a lighter ground; the look depends on near-black (#0a0a0a)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
