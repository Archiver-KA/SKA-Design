# Design system — Chauffeur Service Landing Page Template

`SN-W03860` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A dark ink-navy page (#10212b) with very large white uppercase display type that fills the first screen. A single orange (#f26b1d) marks the call to action. The headline dominates the first screen, and a small gold italic line sits above it as a second voice.

**Mood:** bold, editorial, premium, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#10212b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#cdd5da` | Hairlines, dividers, outlines |
| Accent | `#f26b1d` | Primary action and highlights |
| Second accent | `#2a3f4d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4a5c68` · `#cdd5da` · `#10212b` · `#f26b1d` · `#2a3f4d` · `#c9d3d9` · `#eef1f3` · `#1f5f8b` · `#ff7f36`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 180px · h2 60px · h3 30px · body 15px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-[.12em]`, `tracking-[.14em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-x-5`

**Primary button**

```html
<a class="mt-4 inline-flex items-center justify-center min-h-[52px] px-8 bg-ink text-white font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #10212b;
  --color-text: #ffffff;
  --color-border: #cdd5da;
  --color-accent: #f26b1d;
  --color-accent-2: #2a3f4d;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#10212b',
    ink: '#ffffff',
    line: '#cdd5da',
    accent: '#f26b1d',
    accent2: '#2a3f4d',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large uppercase sans-serif, white on #10212b
- **Do:** Use #f26b1d only for the primary call to action
- **Do:** Pair the headline with one small italic gold line for contrast
- **Don't:** Don't set headlines small or in lowercase; the scale is the style
- **Don't:** Don't add a second saturated colour beside the orange
- **Don't:** Don't crowd the first screen with extra panels around the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
