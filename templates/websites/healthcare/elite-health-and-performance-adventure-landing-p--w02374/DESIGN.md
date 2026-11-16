# Design system — Elite Health & Performance Adventure Landing Page Template

`SN-W02374` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, luxury-performance hero on a near-black ground, set in tall uppercase Geist with the second line in a muted olive (#626041). The olive is repeated in the header button, so the palette stays tight and quiet. Thin outlined buttons and a short right-hand paragraph give it an editorial, understated feel rather than a loud sports look.

**Mood:** luxury, austere, editorial, dark, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#b8b698` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#626041` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#626041` · `#0a0a0a` · `#000000` · `#333333` · `#525035` · `#b8b698` · `#e5e5e5` · `#171717` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 36px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 bg-[#626041] hover:bg-[#525035] text-white text-xs font-medium uppercase tracking-widest px-6 py-3 transition-all duration-300 border border-transparent hover:border-white/20 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #b8b698;
  --color-border: #ffffff;
  --color-accent: #626041;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#b8b698',
    line: '#ffffff',
    accent: '#626041',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase Geist, with the second line in olive (#626041).
- **Do:** Keep the page on the near-black ground (#0a0a0a) with off-white text (#f5f5f5).
- **Do:** Use the olive for the header button and the emphasised headline line only.
- **Don't:** Don't set the page ground to the olive; it is an accent, not a background.
- **Don't:** Don't use filled bright buttons; secondary actions are outlined in white.
- **Don't:** Don't set body copy in uppercase; only headings are uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
