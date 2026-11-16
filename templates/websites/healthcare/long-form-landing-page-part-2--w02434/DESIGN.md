# Design system — Long Form Landing Page Part 2

`SN-W02434` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The sleep lamp page is a near-black product screen (#0b0d10) with a centred serif headline in white over a grey subline. A large dark panel holds the setup video, shown as a placeholder with a centred play control, so each section is one headline, one line and one media block. The restraint suits a premium device.

**Mood:** premium, restrained, dark, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0d10` | Page ground |
| Surface | `#14161a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#88909d` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cfa46a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#cfa46a` · `#88909d` · `#0b0d10` · `#14161a` · `#a8aeb8` · `#ef4444` · `#1f2228` · `#2d3139` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-[0_4px_24px_rgba(0,0,0,0.2)]`, `shadow-[0_0_40px_rgba(0,0,0,0.5)]`, `shadow-[0_0_40px_-10px_rgba(207,164,106,0.15)]`
- **Content width:** `max-w-2xl`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full bg-[#CFA46A] hover:bg-[#B5894B] text-[#1A1814] font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(207,164,106,0.2)] hover:shadow-[0_0_30px_rgba(207,164,106,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Feature grid (`features`)
3. Process / steps (`how-it-works`)
4. 3D / canvas scene (`3d-canvas`)
5. Comparison (`comparison`)
6. Newsletter signup (`newsletter`)
7. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0d10;
  --color-surface: #14161a;
  --color-text: #ffffff;
  --color-muted: #88909d;
  --color-border: #ffffff;
  --color-accent: #cfa46a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0d10',
    surface: '#14161a',
    ink: '#ffffff',
    muted: '#88909d',
    line: '#ffffff',
    accent: '#cfa46a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0b0d10) with a white serif headline and a grey subline
- **Do:** Hold product media in a large, dark rounded panel with a centred play control
- **Do:** Centre each section on one headline and one short subline
- **Don't:** Don't use bright colours; the page stays in white and grey.
- **Don't:** Don't place the video panel on a light ground
- **Don't:** Don't add decoration around the headline; the type is the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
