# Design system — Minimal Discipline Journal Template

`SN-W03774` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page [#0b0c0e] with a soft grey glow behind a large uppercase serif headline in off-white, set across three short lines. A thin dash and a tracked uppercase label open the copy, and one pale filled button is the only solid element. A vertical hairline divides the hero from its side notes, and the whole page stays monochrome.

**Mood:** austere, disciplined, monochrome, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c0e` | Page ground |
| Text | `#0b0c0e` | Headings and primary copy |
| Muted text | `#26272c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f2f1ec` · `#b8a883` · `#98999e` · `#ffffff` · `#26272c` · `#0b0c0e` · `#101114` · `#1a1b1f` · `#000000` · `#e6e3da`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 24px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-[0.18rem]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-black/40`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-14`, `py-28`
- **Common gaps:** `gap-4`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="border border-[#F2F1EC]/50 px-5 py-3 text-xs font-medium uppercase tracking-[0.18rem] text-[#F2F1EC] outline-none transition-colors duration-500 hover:bg-[#F2F1EC] hover:text-[#0B0C0E] focus-visible:ring-1 focus-visible:ring-[#B8A883] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0C0E]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0c0e;
  --color-text: #0b0c0e;
  --color-muted: #26272c;
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
    background: '#0b0c0e',
    ink: '#0b0c0e',
    muted: '#26272c',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large uppercase serif in off-white
- **Do:** Use one pale filled button for the main action and outlined pills for navigation
- **Do:** Use a thin vertical hairline to separate the hero from its side notes
- **Don't:** Don't add colour to the glow or the buttons
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't set body copy in bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
