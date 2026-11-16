# Design system — 3D Footwear E-commerce Landing Page Template

`SN-W01071` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark luxury product page on near-black (#030303), with a heavy sans headline whose second line is dimmed to grey so the two-tone title carries the hero. The one warm colour is amber (#f59e0b), used sparingly on a small dot and the limited-release tag. Specs are set as small uppercase labels above large numerals, and buttons are solid white or hairline outlined.

**Mood:** luxurious, dark, restrained, technical, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#d4d4d8` · `#000000` · `#a1a1aa` · `#18181b` · `#27272a` · `#52525b` · `#78350f` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,255,255,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[100vw]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="h-12 px-8 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold sans, white on black, with the second line in grey
- **Do:** Use amber (#f59e0b) only for the status tag and one highlight per section
- **Do:** Show specs as small uppercase labels above large numerals
- **Don't:** Don't use drop shadows; depth comes from hairline borders and tonal surfaces
- **Don't:** Don't use amber for buttons or body text
- **Don't:** Don't add photographic backgrounds behind the hero copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
