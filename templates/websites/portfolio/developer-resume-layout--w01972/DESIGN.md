# Design system — Developer Resume Layout

`SN-W01972` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A two-column resume in a dark panel: a left sidebar with the name, contact lines and section links, and a right column of professional summary, outlined skill chips and dated experience entries. Text is white and grey, with thin dividers between sections and small uppercase labels for each section. The circular profile frame is the only shape with a strong outline.

**Mood:** documentary, structured, dark, sober, readable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#e5e7eb` · `#ffffff` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#6b7280` · `#f3f4f6` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 18px · body 16px
- **Weights in use:** semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use small uppercase labels for section headings in the sidebar
- **Do:** Set each job as title first, then company and dates on one muted line
- **Do:** Keep bullet lists tight, in grey body text (#9ca3af)
- **Don't:** Don't add colour to the skill chips; they are outlined only
- **Don't:** Don't remove the dividers between sections; the layout relies on them
- **Don't:** Don't place the dark resume on a light page without checking contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
