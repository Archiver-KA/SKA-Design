# Design system — Designer Portfolio Case Study Template

`SN-W01945` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a large sans headline in heavy black, and an italic grey word for emphasis on the second line. Below it sit three equal case-study cards, each with a small grey mono label, a bold title and a short description. Hairline dividers and a solid black nav button give the page a catalogue feel with no colour accent.

**Mood:** catalogue, minimal, neutral, structured, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#fef08a` | Primary action and highlights |

Palette by frequency of use: `#e5e5e5` · `#a3a3a3` · `#737373` · `#ffffff` · `#171717` · `#f5f5f5` · `#d4d4d4` · `#525252` · `#262626` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-8`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 text-base font-medium hover:bg-neutral-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #fef08a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#fef08a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold sans, black, with one italic grey word for emphasis
- **Do:** Lay case studies in equal-width cards with a small mono label on top
- **Do:** Separate sections with hairline dividers
- **Don't:** Don't add a colour accent; the page is black, grey and off-white
- **Don't:** Don't use a dark background for the cards
- **Don't:** Don't set card titles in mono; mono is for labels only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
