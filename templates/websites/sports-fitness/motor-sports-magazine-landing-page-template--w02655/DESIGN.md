# Design system — Motor Sports Magazine Landing Page Template

`SN-W02655` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `es`

## Direction

A dark magazine hero on near-black with bold white sans-serif headlines in capitals and a yellow (#ffb800) highlight on the second line. The yellow is the single accent and is used for the headline words and key labels, which keeps the page quick to scan. Section headings are short and direct, and the dark ground carries the whole page. The result is editorial and fast, like a motorsport publication.

**Mood:** editorial, fast, dark, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ffb800` | Primary action and highlights |

Palette by frequency of use: `#ffb800` · `#ffffff` · `#000000` · `#1a1a1a` · `#e5e7eb` · `#9ca3af` · `#ffcc33` · `#d1d5db` · `#f3f4f6` · `#1f1f1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 120px · h2 36px · h3 48px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-8`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --color-accent: #ffb800;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#444444',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#000000',
    accent: '#ffb800',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in #ffb800 and keep the first line white.
- **Do:** Use #1a1a1a as the page ground and #ffb800 for section labels.
- **Do:** Keep headings short and in uppercase to match the masthead style.
- **Don't:** Don't use yellow for paragraph text.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't place the yellow next to white buttons in the same view.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
