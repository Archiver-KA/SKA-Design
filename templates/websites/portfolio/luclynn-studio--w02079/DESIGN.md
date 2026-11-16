# Design system — Luclynn Studio

`SN-W02079` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, monochrome portfolio built on near-black [#000000] with very large white Inter headlines, where the middle word of each headline is dimmed to grey [#737373] to create rhythm. Colour is almost absent; depth comes from translucent glass cards and soft blurred glow shapes behind the hero. The small uppercase nav and the pill status badge give it a technical, interface-like tone.

**Mood:** monochrome, technical, restrained, high-contrast, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ff5f57` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#171717` · `#000000` · `#a3a3a3` · `#737373` · `#f5f5f5` · `#d4d4d4` · `#050505` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-glow`
- **Content width:** `max-w-7xl`, `max-w-[1600px]`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hover:bg-neutral-200 dark:hover:bg-white/10 dark:text-neutral-400 transition-all text-neutral-600 rounded-full p-2 spring-active">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #ff5f57;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#ff5f57',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at display size with tight tracking, and dim one word per headline to #737373.
- **Do:** Build cards as translucent glass panels with backdrop blur over the dark ground.
- **Do:** Keep the nav to small uppercase labels with one outlined pill button on the right.
- **Don't:** Don't use the green accent (#10b981) for buttons or highlights; the first screen has no green.
- **Don't:** Don't place the page on a light grey ground; the hero sits on black.
- **Don't:** Don't add saturated colour to the hero or the glow shapes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
