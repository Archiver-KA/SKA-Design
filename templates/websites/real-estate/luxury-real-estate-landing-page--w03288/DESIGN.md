# Design system — Luxury Real Estate Landing Page

`SN-W03288` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Cinematic and sparse: a near-black ground carries a large white serif headline stacked in three lines, where the middle word fades to grey and the last is set in italic. Small tracked capitals mark the location line and navigation, and a thin arrow at the lower right acts as the scroll cue. Nothing competes with the type, so the first screen reads like a title sequence.

**Mood:** cinematic, sparse, editorial, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#78716c` · `#1c1917` · `#d6d3d1` · `#57534e` · `#000000` · `#a8a29e` · `#050505` · `#44403c` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 rounded-lg flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Listings (`listings`)
5. Services (`services`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
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
    background: '#050505',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Stack the headline in three lines, with the middle word in grey and the last in italic.
- **Do:** Set the navigation and location line in small tracked capitals.
- **Do:** Keep the ground black (#050505) with no coloured accents.
- **Don't:** Don't add a coloured accent; the page is monochrome.
- **Don't:** Don't set the headline in bold sans.
- **Don't:** Don't place imagery over the headline; the ground stays dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
