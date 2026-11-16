# Design system — Auto servis 2

`SN-W03822` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A black hero where a very large display word sits behind the content in dark grey, so the type reads as texture rather than message. The navigation is a white pill and the only solid colour is a red reservation button, which keeps attention on booking. Headings are uppercase in a regular sans-serif, and the page stays flat with no decorative colour blocks.

**Mood:** dark, bold, industrial, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#000000` · `#0a0a0a` · `#171717` · `#2563eb` · `#ea580c` · `#737373` · `#a3a3a3` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 96px · h3 48px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-[240px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hover:bg-orange-600 transition-all flex items-center gap-3 hover:shadow-orange-500/20 hover:-translate-y-0.5 group text-white bg-blue-500 rounded-full px-8 py-3.5 shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep large display words in dark grey behind the content as texture.
- **Do:** Use the red button for the reservation action only.
- **Do:** Set section headings in uppercase.
- **Don't:** Don't use blue as the page background; the hero is black.
- **Don't:** Don't set the decorative display word in a colour that competes with the body text.
- **Don't:** Don't add a second solid button colour beside the red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
