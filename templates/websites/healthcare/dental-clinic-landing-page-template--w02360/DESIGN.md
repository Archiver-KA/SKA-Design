# Design system — Dental Clinic Landing Page Template

`SN-W02360` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, minimal dental page on near-black (#171717) with large white serif headlines, where the closing phrase is set in italic grey. The primary action is a solid white pill and the secondary a dark outline, with a small pill label and contact lines below. The layout is sparse and editorial, and the type does most of the work.

**Mood:** dark, minimal, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#0891b2` · `#525252` · `#fafafa` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 12px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-neutral-200/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Team (`team`)
6. Stats band (`stats`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #f5f5f5;
  --color-accent: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#525252',
    line: '#f5f5f5',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large white serif, with the closing phrase in italic grey.
- **Do:** Make the primary button a solid white pill with dark text and the secondary a dark outline.
- **Do:** Keep the first screen to one headline, two buttons and a small contact block.
- **Don't:** Don't set the page on a light ground; it is dark.
- **Don't:** Don't use the cyan (#0891b2) for controls; it appears only in a small icon.
- **Don't:** Don't set headlines in a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
