# Design system — AI Creative Agency Landing Page Template

`SN-W01405` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

The first screen is a full-bleed photograph of violet and magenta clouds with a heavy uppercase sans set in white across three lines. Two small uppercase labels sit at the bottom. The page's colour comes from the image, and the type stays plain white and centred, so the look is bold and atmospheric.

**Mood:** bold, atmospheric, vivid, uppercase, image-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4388a` | Primary action and highlights |
| Second accent | `#c4388a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#1e5799` · `#7b2d8e` · `#c4388a` · `#3b82f6` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-sm font-medium hover:bg-neutral-100 transition-colors group/btn">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c4388a;
  --color-accent-2: #c4388a;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c4388a',
    accent2: '#c4388a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Let a full-bleed image carry the hero colour and keep the type white.
- **Do:** Set the hero headline uppercase in a heavy sans, centred, over the image.
- **Do:** Keep the small labels under the headline uppercase and short.
- **Don't:** Don't put a light background behind the hero; the first screen is the image.
- **Don't:** Don't add blue (#3b82f6) to this page.
- **Don't:** Don't place dark text over the image; the headline is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
