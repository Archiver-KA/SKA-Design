# Design system — Digital Agency & Development Landing Page Template

`SN-W01520` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy page where the hero is a white sans-serif headline on the left and a dashboard-style mock on the right, with health metrics in green on a dark card. Blue (#2563eb) is kept for the top-right button and status accents, and green (#22c55e) signals positive numbers. The look reads as a monitoring tool, built from bordered panels rather than shadows.

**Mood:** technical, dark, data-led, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f19` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#1f2937` · `#111827` · `#2563eb` · `#0b0f19` · `#22c55e` · `#1d4ed8` · `#eab308` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_0_8px_#0B0F19]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(37,99,235,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] px-4 py-2 rounded-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0f19;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #2563eb;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f19',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563eb) for the primary button and key status accents only
- **Do:** Use green (#22c55e) for positive metrics and status labels
- **Do:** Build panels on #111827 with #1f2937 borders
- **Don't:** Don't use green for decoration or headings
- **Don't:** Don't use gradient backgrounds
- **Don't:** Don't set body text in pure white; use the muted grey (#9ca3af)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
