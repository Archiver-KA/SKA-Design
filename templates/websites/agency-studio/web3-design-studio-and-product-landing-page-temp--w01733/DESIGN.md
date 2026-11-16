# Design system — Web3 Design Studio & Product Landing Page Template

`SN-W01733` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, precise design-studio page on warm near-black [#0f0c0b] with a serif headline in cream [#fbf6ec], where the second phrase is italic. The orange [#ff8b3e] appears as a single data line and status word, and the hero sits on a faint grid panel with small mono labels. Colour is rare and purposeful, so the page reads as an instrument panel for product design.

**Mood:** precise, dark, editorial, technical, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0c0b` | Page ground |
| Surface | `#dfd8d3` | Cards, panels, raised areas |
| Text | `#fbf6ec` | Headings and primary copy |
| Muted text | `#54504e` | Secondary copy, captions |
| Border | `#54504e` | Hairlines, dividers, outlines |
| Accent | `#ff8b3e` | Primary action and highlights |

Palette by frequency of use: `#54504e` · `#dfd8d3` · `#ff8b3e` · `#fbf6ec` · `#0f0c0b` · `#1b1613` · `#ffffff` · `#b1aca6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 30px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[4px]` (4px), `rounded-full` (9999px)
- **Content width:** `max-w-[1684px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="px-4 py-2 bg-[#1b1613] border border-[#54504e] rounded-[4px] font-mono-custom text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#ff8b3e] hover:text-white hover:border-[#ff8b3e] transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0c0b;
  --color-surface: #dfd8d3;
  --color-text: #fbf6ec;
  --color-muted: #54504e;
  --color-border: #54504e;
  --color-accent: #ff8b3e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0c0b',
    surface: '#dfd8d3',
    ink: '#fbf6ec',
    muted: '#54504e',
    line: '#54504e',
    accent: '#ff8b3e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif cream with the second phrase in italic
- **Do:** Use the orange (#ff8b3e) only for the status word and one data line per panel
- **Do:** Place small uppercase mono labels inside a faint grid panel
- **Don't:** Don't use the orange as a background or large fill
- **Don't:** Don't set body copy in the orange
- **Don't:** Don't set the page on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
