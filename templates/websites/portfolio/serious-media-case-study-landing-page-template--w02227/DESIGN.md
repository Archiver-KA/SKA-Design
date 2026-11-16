# Design system — Serious Media Case Study Landing Page Template

`SN-W02227` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, minimal case-study hero: a very large bold uppercase grotesque wordmark in white dominates the first screen, with a short grey intro line below. Small outlined tags and a band of four labelled facts (client, service, year, outcome) sit quietly at the bottom. The one bright spot is a lime button in the nav, so the page is monochrome with a single action that stands out.

**Mood:** monochrome, minimal, confident, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#000000` · `#71717a` · `#050505` · `#52525b` · `#18181b` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 144px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-10`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-4 px-8 py-4 bg-lime rounded-full text-black font-semibold tracking-tight overflow-hidden transition-transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Timeline (`timeline`)
5. Dashboard preview (`dashboard-preview`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
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
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero title in a very large bold uppercase grotesque in white
- **Do:** Keep the lime nav button as the only bright element on the first screen
- **Do:** Set fact labels in small uppercase grey above their values
- **Don't:** Don't add a second bright colour to the fact band
- **Don't:** Don't reduce the title to a normal size; its scale is the point
- **Don't:** Don't put the lime on large areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
