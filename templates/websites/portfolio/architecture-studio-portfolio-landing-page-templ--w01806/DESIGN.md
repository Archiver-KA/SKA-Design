# Design system — Architecture Studio Portfolio Landing Page Template

`SN-W01806` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Quiet and literary on white: a large serif headline in near-black, with the second phrase in mid-grey, followed by a short grey intro paragraph. Navigation is small uppercase at the top right. No accent colour appears, the hero is left-aligned, and the first screen stays mostly empty before a full-width image.

**Mood:** quiet, literary, restrained, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#737373` · `#525252` · `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#e5e5e5` · `#fafafa` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[2px]` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="group flex items-center justify-between w-full bg-neutral-900 text-white px-6 py-4 mt-4 hover:bg-neutral-800 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Sign-in form (`auth-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #171717;
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
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#525252',
    line: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif with the second phrase in grey
- **Do:** Keep the intro paragraph short, grey and left-aligned
- **Do:** Leave the first screen mostly empty before the full-width image
- **Don't:** Don't add an accent colour; the palette stays neutral
- **Don't:** Don't centre the hero text; it is left-aligned
- **Don't:** Don't set headlines in a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
