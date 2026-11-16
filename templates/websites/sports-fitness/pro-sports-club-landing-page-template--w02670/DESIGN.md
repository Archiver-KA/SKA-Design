# Design system — Pro Sports Club Landing Page Template

`SN-W02670` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black sports club page with huge heavy uppercase headlines in white, where the second line fades down into grey. Red (#ef4444) is the one accent and marks status labels such as NEXT UP, while the main buttons are white or outlined. The hero is a stacked poster with a sports banner and match cards below, and the dark ground carries the page while the red stays small.

**Mood:** bold, dark, sporty, poster-like, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#ef4444` · `#000000` · `#525252` · `#171717` · `#a3a3a3` · `#7f1d1d` · `#dc2626` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-[0_20px_50px_rgba(0,0,0,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-x-4`, `gap-y-3`, `gap-6`

**Primary button**

```html
<a class="px-8 py-3 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Team (`team`)
6. Timeline (`timeline`)
7. Product grid (`product-grid`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase white, with a grey fade on the lower line.
- **Do:** Use #ef4444 for status badges and one highlight per section.
- **Do:** Make primary buttons white with black text and secondary buttons outlined.
- **Don't:** Don't use the dark red (#7f1d1d) as the page background; the ground is near-black.
- **Don't:** Don't use red for large fills.
- **Don't:** Don't use green (#22c55e) except in a live or success badge.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
