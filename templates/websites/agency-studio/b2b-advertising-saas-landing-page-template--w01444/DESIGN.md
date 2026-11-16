# Design system — B2B Advertising SaaS Landing Page Template

`SN-W01444` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground ([#ffffff]) with near-black headline text ([#111827]) and an indigo ([#4f46e5]) highlight on the key word. The headline is a large sans in tight, stacked lines, with a soft grey paragraph and a dark primary button beneath. Product UI in rounded white cards sits to the right, using small status chips.

**Mood:** clean, precise, light, commercial, b2b

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#4f46e5` · `#ffffff` · `#111827` · `#6b7280` · `#f3f4f6` · `#f9fafb` · `#9ca3af` · `#eff6ff` · `#4b5563` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica World
- **Body:** Helvetica World
- **Loaded families:** Helvetica World
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-[#111111] text-white hover:bg-[#4F46E5] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #111111;
  --color-text: #111827;
  --color-muted: #111827;
  --color-border: #f3f4f6;
  --color-accent: #4f46e5;
  --color-accent-2: #f87171;
  --font-display: "Helvetica World", sans-serif;
  --font-body: "Helvetica World", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#111111',
    ink: '#111827',
    muted: '#111827',
    line: '#f3f4f6',
    accent: '#4f46e5',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Helvetica World'], sans: ['Helvetica World'] },
} }
```

## Do and don't

- **Do:** Use indigo (#4f46e5) for the highlighted word in the headline only
- **Do:** Set the primary button as a dark solid pill with white text
- **Do:** Show product UI as rounded white cards with small status chips
- **Don't:** Don't use a dark hero, the page is light
- **Don't:** Don't use more than one highlight phrase per headline
- **Don't:** Don't use heavy drop shadows on the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
