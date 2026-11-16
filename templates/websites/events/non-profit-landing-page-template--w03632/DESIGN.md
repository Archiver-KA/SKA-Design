# Design system — Non-profit Landing Page Template

`SN-W03632` · events · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A dark, sports-led non-profit hero on a deep slate ground, with a large white sans-serif headline and a two-column layout that places the copy on the left and a dimmed photograph card on the right. Sky blue fills the primary button and small status markers, while secondary text is set in soft grey. The layout is compact, with a campaign panel layered over the photograph.

**Mood:** dark, sporty, direct, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#111827` · `#0ea5e9` · `#9ca3af` · `#f9fafb` · `#38bdf8` · `#e5e7eb` · `#6b7280` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 16px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[20px]` (20px), `rounded-full` (9999px), `rounded-[16px]` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_rgba(0,0,0,0.5)]`, `shadow-[0_8px_30px_rgb(0,0,0,0.03)]`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex text-white px-5 py-2.5 rounded-full text-base font-normal hover:-translate-y-0.5 shadow-lg transition-all duration-300 items-center gap-2 bg-sky-500 hover:bg-sky-600 shadow-sky-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Modal / overlay (`modal-overlay`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #d1d5db;
  --color-text: #ffffff;
  --color-muted: #111827;
  --color-border: #f3f4f6;
  --color-accent: #0ea5e9;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 20px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#d1d5db',
    ink: '#ffffff',
    muted: '#111827',
    line: '#f3f4f6',
    accent: '#0ea5e9',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans-serif on the dark slate ground (#111827)
- **Do:** Use the sky blue (#0ea5e9) for the primary button and status markers only
- **Do:** Place campaign cards over photographs on a dark translucent background
- **Don't:** Don't use a light page background for the hero
- **Don't:** Don't set body copy in black on the dark ground
- **Don't:** Don't use green as a background colour for sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
