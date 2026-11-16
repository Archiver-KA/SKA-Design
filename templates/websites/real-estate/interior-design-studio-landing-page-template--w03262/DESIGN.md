# Design system — Interior Design Studio Landing Page Template

`SN-W03262` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Minimal and quiet, on an off-white ground with a light sans headline in near-black and its key phrase set in italic grey. Buttons are square-cornered, with a black primary and an outlined secondary, and body copy sits in a narrow column offset to the right of the headline. A thin rule introduces each eyebrow. Wide margins and little colour make the layout feel like a gallery catalogue.

**Mood:** minimal, quiet, editorial, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#ffffff` · `#fafaf9` · `#292524` · `#d6d3d1` · `#f5f5f4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-800 transition-all hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in italic mid grey, and the rest in near-black.
- **Do:** Keep buttons square-cornered: black for the primary, outlined for the secondary.
- **Do:** Place body copy in a narrow column offset from the headline rather than under it.
- **Don't:** Don't add accent colour; the page is built from black, grey and off-white.
- **Don't:** Don't round the button corners.
- **Don't:** Don't set eyebrows in bold; a thin rule and small grey text carry them.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
