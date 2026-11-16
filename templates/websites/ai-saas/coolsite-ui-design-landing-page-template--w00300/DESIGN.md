# Design system — CoolSite UI Design Landing Page Template

`SN-W00300` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, glowing page on black, where the large white headline ends in the phrase 'speed of thought' set in a blue-to-violet gradient. The primary action is a solid green [#10b981] button beside a dark outlined video button. Inter at display size and a faint green glow in one corner add depth without decoration.

**Mood:** dark, polished, bold, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#f9fafb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#6b7280` · `#facc15` · `#1f2937` · `#d1d5db` · `#111827` · `#374151` · `#10b981` · `#f9fafb` · `#34d399` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-emerald-500/25`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Sign-in form (`auth-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #f9fafb;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #10b981;
  --color-accent-2: #10b981;
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
    surface: '#111827',
    ink: '#f9fafb',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#10b981',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set primary buttons in solid green (#10b981) and secondary buttons as dark outlined
- **Do:** Use the blue-to-violet gradient on one headline phrase only
- **Do:** Keep the background black with at most one faint glow in a corner
- **Don't:** Don't use yellow (#facc15) as the accent; green is the accent
- **Don't:** Don't put the gradient on body text
- **Don't:** Don't insert a light section between the dark sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
