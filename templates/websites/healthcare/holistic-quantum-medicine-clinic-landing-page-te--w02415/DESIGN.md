# Design system — Holistic Quantum Medicine Clinic Landing Page Template

`SN-W02415` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The quantum medicine hero is dark and cinematic: a full-bleed photograph of a face in orange-tinted sunglasses over a deep teal-black ground. The serif headline is white, with one italic word in pale peach (#e7d1bf) for emphasis. The buttons are a solid dark pill and a white-outline pill, so the image and the serif carry the page.

**Mood:** cinematic, moody, serene, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2a332a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#526447` | Secondary copy, captions |
| Border | `#a99180` | Hairlines, dividers, outlines |
| Accent | `#e7d1bf` | Primary action and highlights |

Palette by frequency of use: `#2a332a` · `#526447` · `#a99180` · `#ffffff` · `#fcfbf8` · `#e3ded4` · `#e7d1bf` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-[#A99180]/10`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-[#2A332A] text-[#FCFBF8] text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#526447] transition-all shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Services (`services`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2a332a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #526447;
  --color-border: #a99180;
  --color-accent: #e7d1bf;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2a332a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#526447',
    line: '#a99180',
    accent: '#e7d1bf',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large serif white, with one italic word in pale peach (#e7d1bf)
- **Do:** Use a full-bleed photograph with a dark teal-black ground behind the headline
- **Do:** Pair one solid dark pill with one white-outline pill for the hero actions
- **Don't:** Don't use the cream (#fcfbf8) as the hero ground.
- **Don't:** Don't put body text in dark green on the photograph
- **Don't:** Don't add bright colour to the photograph; keep it muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
