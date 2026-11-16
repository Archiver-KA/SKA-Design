# Design system — Luxury Restaurant Landing Page Template

`SN-W02936` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black (#0a0a0a) fine-dining hero with a large white headline in a clean sans, the second word set in a gold italic serif. A single gold filled button and an outline secondary button carry the calls to action. The gold is used only for the one emphasised word and the primary button, so the page reads as minimal and quietly luxurious.

**Mood:** minimal, luxurious, quiet, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#a3a3a3` · `#171717` · `#737373` · `#d4d4d4` · `#404040` · `#525252` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_50px_-12px_rgba(212,175,55,0.1)]`, `shadow-lg`, `shadow-[0_0_20px_rgba(212,175,55,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-950 text-xs font-medium uppercase tracking-widest hover:bg-gold-400 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large white sans with one gold italic serif word
- **Do:** Use gold only for the primary button and the one emphasised word per section
- **Do:** Keep the nav small, uppercase and widely spaced over the black ground
- **Don't:** Don't use gold for body text or background areas
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use the serif face for body copy; keep it for the emphasis word only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
