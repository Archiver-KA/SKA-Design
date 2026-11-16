# Design system — flavoring

`SN-W01162` · ecommerce · dark mode · Sinera Atlas theme `market` · language `ko`

## Direction

A bilingual product launch page opens on a black field with a soft white glow behind a large grey-to-white wordmark, FlavoRing, set in a clean sans. A thin grey marquee of uppercase phrases cuts across the hero, while the white header and Korean navigation keep the chrome plain. Colour is almost absent; the drama comes from the glow, the wordmark and the marquee.

**Mood:** monochrome, dramatic, minimal, bilingual

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#3d3bff` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#3d3bff` · `#ffffff` · `#a3a3a3` · `#737373` · `#e5e5e5` · `#000000` · `#d4d4d4` · `#525252` · `#f4f4f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 24px
- **Weights in use:** extralight, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_1px_3px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center text-xl font-extralight tracking-wide text-[#111] border border-[#111] rounded-full px-7 py-3 hover:bg-[#111] hover:text-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Video / media (`video-media`)
6. Feature grid (`features`)
7. Schedule (`schedule-agenda`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #3d3bff;
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
    ink: '#111111',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#3d3bff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the wordmark over the black hero with the soft white glow behind it.
- **Do:** Run uppercase phrases in a grey marquee strip across the hero, one line high.
- **Do:** Keep the header white with dark type, and keep the hero black.
- **Don't:** Don't add a saturated accent to the hero; it stays black, white and grey.
- **Don't:** Don't remove the language switch; the page is bilingual, Korean and English.
- **Don't:** Don't put body copy on the glow; the glow is for the wordmark only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
