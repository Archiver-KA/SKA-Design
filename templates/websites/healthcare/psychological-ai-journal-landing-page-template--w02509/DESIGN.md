# Design system — Psychological AI Journal Landing Page Template

`SN-W02509` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

An archival, editorial page on warm off-white (#fdfbf7), with a very large serif headline in near-black and one italic word in soft grey (#a8a29e). Small uppercase labels with figure numbers and thin rules give it the feel of a journal index. The palette is only ink and paper, so type size and whitespace do all the work.

**Mood:** archival, editorial, quiet, intellectual

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#a8a29e` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#ffffff` · `#292524` · `#fdfbf7` · `#57534e` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 18px
- **Weights in use:** light, thin
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="border border-stone-900 text-stone-900 px-5 py-2 font-mono text-xs hover:bg-stone-900 hover:text-white transition-all duration-300 uppercase tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Articles (`blog-articles`)
5. Video / media (`video-media`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #a8a29e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#a8a29e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines very large in Cormorant Garamond with one italic word in grey (#a8a29e)
- **Do:** Use small uppercase labels with figure numbers above each headline
- **Do:** Keep the ground in paper (#fdfbf7) and ink in near-black (#1c1917)
- **Don't:** Don't add colour; the page is ink and paper only
- **Don't:** Don't put glow shapes behind the headline; the ground stays plain
- **Don't:** Don't set the italic word in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
