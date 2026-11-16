# Design system — Material Handling Landing Page Template

`SN-W00525` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy industrial page on #0d1b2a with very large, bold uppercase headlines and a yellow (#f5c400) first line for emphasis. Yellow fills the primary and secondary buttons, and a marquee of machine brand names runs in muted grey across the hero. The strong yellow-on-navy contrast gives a rugged, equipment-yard tone.

**Mood:** rugged, industrial, bold, navy, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2a` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#f5c400` | Primary action and highlights |
| Second accent | `#152436` | Supporting highlights |

Palette by frequency of use: `#f5c400` · `#ffffff` · `#9ca3af` · `#1f2937` · `#6b7280` · `#152436` · `#374151` · `#000000` · `#d1d5db` · `#0d1b2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Barlow Condensed, DM Sans
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_0_15px_rgba(245,196,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#F5C400] text-black font-semibold px-8 py-3.5 rounded text-sm text-center flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Listings (`listings`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d1b2a;
  --color-surface: #1f2937;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #f5c400;
  --color-accent-2: #152436;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2a',
    surface: '#1f2937',
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#f5c400',
    accent2: '#152436',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in yellow (#f5c400) and the rest in white.
- **Do:** Use yellow for the primary and secondary buttons.
- **Do:** Set the brand marquee in small uppercase grey beneath the hero.
- **Don't:** Don't use yellow for body copy.
- **Don't:** Don't set the page on a light background.
- **Don't:** Don't add rounded corners to the main buttons; they are square-edged.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
