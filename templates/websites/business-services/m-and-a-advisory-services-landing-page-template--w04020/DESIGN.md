# Design system — M&A Advisory Services Landing Page Template

`SN-W04020` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, editorial hero where one phrase in each headline is set in blue italic serif, against an otherwise plain sans-serif headline in dark ink. The page sits on white with a faint grid texture and a rounded hero panel. Pink and blue are used only for small tags and emphasis, which keeps the tone clear and trustworthy.

**Mood:** clear, editorial, trustworthy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#e5e7eb` · `#9ca3af` · `#3b82f6` · `#f3f4f6` · `#2563eb` · `#bfdbfe` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Manrope, Geist, Roboto
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-md`, `shadow-[0_1px_2px_rgba(0,0,0,0.02)]`, `shadow-blue-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg shrink-0 hover:shadow-blue-500/20 hover:bg-blue-700 font-medium text-white font-manrope bg-blue-500 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md text-sm md:text-base">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Gallery / portfolio (`gallery-portfolio`)
5. FAQ (`faq`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #3b82f6;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one key phrase per headline in blue italic serif
- **Do:** Keep headlines in dark ink (#111827) on white
- **Do:** Use the blue (#3b82f6) for the primary button and emphasis only
- **Don't:** Don't set whole headlines in the serif face
- **Don't:** Don't use the pale pink tag as a section colour
- **Don't:** Don't add heavy drop shadows to the hero panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
