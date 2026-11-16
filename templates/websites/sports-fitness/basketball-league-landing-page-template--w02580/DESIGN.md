# Design system — Basketball League Landing Page Template

`SN-W02580` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light sports-league page: an off-white ground (#f0f0ed) with very large near-black type, and a deep green serif italic (#065f46) for the one emphasised word. The layout is editorial, with a stat list and a bordered register button on the right, and the photograph is a small framed image. The contrast between heavy type and the italic serif is the recognisable feature.

**Mood:** editorial, bold, light, competitive, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0f0ed` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |
| Accent | `#065f46` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#065f46` · `#71717a` · `#d4d4d8` · `#ffffff` · `#f0f0ed` · `#064e3b` · `#52525b` · `#3f3f46` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Caveat, Inter, Oswald, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 36px · h2 128px · h3 36px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[150px]`
- **Common gaps:** `gap-y-16`, `gap-x-12`, `gap-4`

**Primary button**

```html
<a class="bg-zinc-900 text-white px-8 py-3 rounded-none font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f0f0ed;
  --color-surface: #18181b;
  --color-text: #18181b;
  --color-muted: #d4d4d8;
  --color-border: #d4d4d8;
  --color-accent: #065f46;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0f0ed',
    surface: '#18181b',
    ink: '#18181b',
    muted: '#d4d4d8',
    line: '#d4d4d8',
    accent: '#065f46',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised word in the deep green serif italic (#065f46) and keep the rest of the headline in heavy black
- **Do:** Use the green only for the highlighted word and the stat values
- **Do:** Keep the stat list as a bordered column of label and value pairs beside the headline
- **Don't:** Don't switch to a dark background; the ground is light off-white.
- **Don't:** Don't set the italic accent in sans-serif; the serif contrast is the design
- **Don't:** Don't leave the framed photograph out of the layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
