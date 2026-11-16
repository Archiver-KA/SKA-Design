# Design system — Auto Broker Leasing Landing Page Template

`SN-W00232` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A full-bleed photographic hero with a dark sunset-tinted overlay, cars across the bottom, and a heavy white uppercase headline in three lines. The orange (#f15f22) picks out one word, and it is repeated on the nav calculator link and the filled orange button, so the colour is emphasis, not decoration. Body copy sits on the photo with a dark gradient beneath it.

**Mood:** bold, automotive, photographic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f15f22` | Primary action and highlights |

Palette by frequency of use: `#f15f22` · `#171717` · `#ffffff` · `#525252` · `#e5e5e5` · `#000000` · `#fafafa` · `#d4d4d4` · `#a3a3a3` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_-5px_rgba(241,95,34,0.4)]`, `shadow-[0_0_30px_-10px_rgba(241,95,34,0.6)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex justify-center items-center px-6 py-2.5 bg-[#F15F22] text-white text-xs font-medium hover:bg-[#d44d18] transition-colors duration-300 rounded uppercase tracking-widest shadow-[0_0_20px_-5px_rgba(241,95,34,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f15f22;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#525252',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f15f22',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans and colour one word in orange (#f15f22)
- **Do:** Keep orange for the primary button and the single emphasised word
- **Do:** Let the photo carry the hero, with a dark gradient under any text
- **Don't:** Don't add a second accent colour over the photo
- **Don't:** Don't place body copy over a busy part of the photo without the overlay
- **Don't:** Don't use lowercase in the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
