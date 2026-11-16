# Design system — Instagram Carousel Post Template

`SN-W01604` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A set of dark carousel slides on black, with white type for most lines and a mint-green (#34d399) accent for the key words. Statement headlines are set in Playfair Display, and simple line diagrams are drawn in thin mint strokes beside them. Each slide holds one statement, one diagram and a small tag, so the slides read as a single calm series rather than a busy feed.

**Mood:** calm, editorial, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#000000` · `#3f3f46` · `#34d399` · `#064e3b` · `#a1a1aa` · `#71717a` · `#18181b` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 48px · h2 30px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-emerald-900/20`, `shadow-lg`
- **Content width:** `max-w-[1400px]`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use mint (#34d399) for the key words in each headline and for thin diagram strokes
- **Do:** Set statement headlines in Playfair Display, white on black
- **Do:** Keep each slide to one statement, one diagram and one small tag
- **Don't:** Don't fill whole slides with mint
- **Don't:** Don't use the red accent (#ef4444) for positive messages
- **Don't:** Don't add heavy borders; the slides have no frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
