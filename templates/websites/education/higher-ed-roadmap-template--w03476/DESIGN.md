# Design system — Higher Ed Roadmap Template

`SN-W03476` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A roadmap page on a warm off-white ground (#f5f5f4) with a large serif headline in near-black (#1c1917). The key word is set in deep green (#117040) italic, and green primary buttons sit beside outlined ones. Soft glass cards with a small tag and date line sit beneath the hero, linked to a timeline that carries the reader from one phase to the next.

**Mood:** structured, academic, calm, guided, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#a8a29e` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |
| Accent | `#117040` | Primary action and highlights |

Palette by frequency of use: `#117040` · `#1c1917` · `#78716c` · `#57534e` · `#f5f5f4` · `#d6d3d1` · `#ffffff` · `#e7e5e4` · `#44403c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="w-full sm:w-auto px-6 py-3 rounded-full bg-[#117040] hover:bg-[#0d5933] text-white font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Timeline (`timeline`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #a8a29e;
  --color-text: #1c1917;
  --color-muted: #1c1917;
  --color-border: #d6d3d1;
  --color-accent: #117040;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#a8a29e',
    ink: '#1c1917',
    muted: '#1c1917',
    line: '#d6d3d1',
    accent: '#117040',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the hero in deep green (#117040) italic serif
- **Do:** Use green for primary actions and the timeline's current step
- **Do:** Keep phase cards light and linked by one vertical timeline
- **Don't:** Don't use green as a background for long text
- **Don't:** Don't set the headline in a sans; it stays serif
- **Don't:** Don't add heavy shadows to the glass cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
