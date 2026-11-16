# Design system — AI CSR Matching Landing Page Template

`SN-W00080` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A split layout with a pale grey-green left column carrying a dark green heavy sans headline and a lighter green second line, and a right column with small white cards on the grey ground. Dark green (#1a3328) is the accent for headlines and tags, and a soft yellow (#f0d44a) is used once, on the primary button. The palette and card grid suggest a sober, trustworthy tone.

**Mood:** sober, trustworthy, green, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8f0ec` | Cards, panels, raised areas |
| Text | `#1c1c1c` | Headings and primary copy |
| Muted text | `#4a4a4a` | Secondary copy, captions |
| Border | `#d6dbd8` | Hairlines, dividers, outlines |
| Accent | `#1a3328` | Primary action and highlights |
| Second accent | `#f0d44a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a3328` · `#3d6b57` · `#c5d8ce` · `#d6dbd8` · `#4a4a4a` · `#254b3b` · `#f0d44a` · `#e8f0ec` · `#8caa98`.

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
- **Shadows:** `shadow-[0_2px_8px_rgba(26,51,40,0.04)]`, `shadow-[0_0_0_4px_#e8f0ec]`, `shadow-[0_8px_24px_rgba(26,51,40,0.08)]`
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
4. Process / steps (`how-it-works`)
5. Case studies (`case-studies`)
6. Stats band (`stats`)
7. Call to action (`cta`)
8. Footer (`footer`)

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
  --color-muted: #4a4a4a;
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
    muted: '#4a4a4a',
    line: '#d6dbd8',
    accent: '#1a3328',
    accent2: '#f0d44a',
  },
  fontFamily: { display: ['Syne'], sans: ['Syne'] },
} }
```

## Do and don't

- **Do:** Set headlines in dark green (#1a3328), second line in mid green (#3d6b57)
- **Do:** Use the yellow (#f0d44a) for the primary button only
- **Do:** Arrange feature points as small white cards on the grey ground
- **Don't:** Don't use yellow for text on white
- **Don't:** Don't add a dark hero band; the page is light
- **Don't:** Don't use more than one card size per row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
