# Design system — Creative Developer Collective Portfolio Template

`SN-W01884` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ko`

## Direction

A dark stage with a soft, blurred light block at the centre that carries a grey gradient wordmark, 'FlavoRing'. A band of uppercase words runs across the lower third in black on pale grey, and the header is a plain white strip with a small blue dot as the only accent. Korean and English are shown as a toggle, so the bilingual setup is part of the look.

**Mood:** moody, editorial, minimal, bilingual

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#3d3bff` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#3d3bff` · `#ffffff` · `#a3a3a3` · `#737373` · `#e5e5e5` · `#d4d4d4` · `#525252` · `#f4f4f4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 24px
- **Weights in use:** extralight, normal, medium
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
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
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
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#3d3bff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the centre wordmark in a grey gradient on the blurred light block.
- **Do:** Use the blue (#3d3bff) only for the small dot beside the logo.
- **Do:** Keep the uppercase marquee band to one line of tracked words.
- **Don't:** Don't add more bright colours; the page is grey, black and white.
- **Don't:** Don't place body copy over the blurred block.
- **Don't:** Don't set the marquee in mixed case; it stays uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
