# Design system — Corporate Branding & Uniform Services Template

`SN-W01474` · agency-studio · dark mode · Sinera Atlas theme `route` · language `es`

## Direction

A dark, photographic hero: a darkened industrial photo fills the first screen under a near-black header bar (#0d0d0d). Headlines are heavy uppercase sans in white, with the final word set in the green (#75af47) as the only accent. A small green-tinted label sits above the headline. A faint, oversized brand word behind the photo adds texture without competing with the copy.

**Mood:** bold, industrial, photographic, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#0d0d0d` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#75af47` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f7f7f5` · `#75af47` · `#0d0d0d` · `#8a8a8a` · `#557f31`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 88px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(117,175,71,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-[800px]`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#75AF47] to-[#557F31] px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(117,175,71,0.3)] hover:opacity-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #0d0d0d;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #75af47;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#0d0d0d',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#75af47',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headlines in heavy uppercase sans, and colour the closing word in green (#75af47).
- **Do:** Keep the hero photograph darkened under a near-black overlay so white type stays legible.
- **Do:** Use the green only for the headline keyword and small labels, not for buttons or large areas.
- **Don't:** Don't put a light background behind the hero; the design depends on the dark photographic ground.
- **Don't:** Don't use the dark green (#557f31) for text on black; its contrast is too low.
- **Don't:** Don't drop the faint oversized brand word; it is part of the texture.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
