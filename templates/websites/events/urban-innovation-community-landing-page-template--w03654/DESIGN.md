# Design system — Urban Innovation Community Landing Page Template

`SN-W03654` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An editorial, two-column layout on a near-white ground, with a large headline in dark ink whose second line is set in muted forest green. Numbered points and hairline rules sit under a short paragraph, while the right half is a pale green panel holding white cards, each with a number, a title and a short description. The palette is green-led and calm, with a single dark green button and pill.

**Mood:** calm, organised, green-led, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8f0ec` | Cards, panels, raised areas |
| Text | `#1c1c1c` | Headings and primary copy |
| Muted text | `#3d6b57` | Secondary copy, captions |
| Border | `#d6dbd8` | Hairlines, dividers, outlines |
| Accent | `#1a3328` | Primary action and highlights |
| Second accent | `#f0d44a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a3328` · `#3d6b57` · `#c5d8ce` · `#d6dbd8` · `#4a4a4a` · `#e8f0ec` · `#254b3b` · `#f0d44a` · `#8caa98`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Syne
- **Loaded families:** Syne, DM Sans
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_2px_8px_rgba(26,51,40,0.04)]`, `shadow-[0_4px_16px_rgba(26,51,40,0.04)]`, `shadow-[0_8px_24px_rgba(26,51,40,0.08)]`
- **Content width:** `max-w-6xl`, `max-w-[90%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#1a3328] text-white font-['Syne'] text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-[#254b3b] hover:-translate-y-[0.0625rem] shadow-[0_4px_12px_rgba(26,51,40,0.15)] transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e8f0ec;
  --color-text: #1c1c1c;
  --color-muted: #3d6b57;
  --color-border: #d6dbd8;
  --color-accent: #1a3328;
  --color-accent-2: #f0d44a;
  --font-display: "Syne", sans-serif;
  --font-body: "Syne", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e8f0ec',
    ink: '#1c1c1c',
    muted: '#3d6b57',
    line: '#d6dbd8',
    accent: '#1a3328',
    accent2: '#f0d44a',
  },
  fontFamily: { display: ['Syne'], sans: ['Syne'] },
} }
```

## Do and don't

- **Do:** Set the headline large in dark ink, with the second line in muted green (#3d6b57)
- **Do:** Use the dark green (#1a3328) for the pill label and primary button only
- **Do:** Organise the right panel as numbered white cards on the pale green surface (#e8f0ec)
- **Don't:** Don't use the yellow accent (#f0d44a) for more than a single highlight
- **Don't:** Don't add photography to the hero; the cards carry the content
- **Don't:** Don't set list bullets in colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
