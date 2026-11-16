# Design system — Property Maintenance Landing Page Template

`SN-W03328` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Bold, blunt blocks of colour: a saturated yellow (#fbbf24) header bar and a deep navy (#0f172a) hero, with a tilted yellow sign in the middle that repeats the header colour. Headlines are a heavy sans in dark navy on white below the hero. The yellow carries the brand and the call to action at full strength rather than as a tint.

**Mood:** bold, blunt, trade, high-visibility

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#0f172a` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#475569` · `#fbbf24` · `#e2e8f0` · `#a3e635` · `#f8fafc` · `#f59e0b` · `#fb923c` · `#fcd34d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 text-base font-medium flex items-center justify-between gap-4 transition-all hover:bg-slate-50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Listings (`listings`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-border: #0f172a;
  --color-accent: #fbbf24;
  --color-accent-2: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#1e293b',
    line: '#0f172a',
    accent: '#fbbf24',
    accent2: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the yellow (#fbbf24) header bar full width, with the phone number in a bordered box.
- **Do:** Set the hero on deep navy (#0f172a) and use yellow for the one sign panel.
- **Do:** Set headlines in heavy sans in dark navy on white.
- **Don't:** Don't tint the yellow down; the header is full strength.
- **Don't:** Don't use green or lime; the palette is yellow and navy.
- **Don't:** Don't set body text in yellow on white; it is unreadable.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
