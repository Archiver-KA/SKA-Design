# Design system — Kickboxing Fitness Landing Page Template

`SN-W02645` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, high-energy kickboxing page on pure black with a yellow (#facc15) accent used for section labels and key words such as STORY. Headlines are large, bold, sans-serif capitals, with a yellow word inside a white line. Supporting text sits in soft grey, so the yellow stays the only warm colour. The layout is simple and centred, with a single bordered form to convert visitors.

**Mood:** energetic, stark, direct, urgent, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#71717a` · `#27272a` · `#18181b` · `#09090b` · `#000000` · `#52525b` · `#e4e4e7` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold tracking-widest uppercase px-6 py-3 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#27272a',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #facc15 for section eyebrow labels and one key word per headline.
- **Do:** Set headlines in bold uppercase sans-serif at display size.
- **Do:** Keep body copy in muted grey (#71717a) on black.
- **Don't:** Don't use yellow for large background areas or long text.
- **Don't:** Don't mix in a second bright accent colour.
- **Don't:** Don't put more than one yellow call to action in a view.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
