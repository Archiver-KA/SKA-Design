# Design system — Strategic Planning Summit Landing Page Template

`SN-W00742` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark navy page (#111827) with a bold Figtree headline in white on the left and a large dark rounded image panel on the right. A saturated blue (#2563eb) marks the header button and the price, and a soft blue glow sits behind the image edge. Green (#10b981) appears only as a small discount badge, so the blue carries the call to action.

**Mood:** corporate, dark, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#e5e7eb` · `#9ca3af` · `#4b5563` · `#f9fafb` · `#2563eb` · `#3b82f6` · `#6b7280` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 42px · h2 30px · h3 15px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[16px]` (16px), `rounded-[12px]` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_12px_30px_rgba(0,0,0,0.08)]`, `shadow-[0_0_20px_rgba(37,99,235,0.3)]`, `shadow-[0_12px_24px_rgba(37,99,235,0.2)]`
- **Content width:** `max-w-[1200px]`, `max-w-[720px]`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-6`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="bg-[#2563EB] hover:bg-[#60A5FA] text-white text-xs md:text-sm font-semibold py-2 md:py-2.5 px-4 md:px-5 rounded-[14px] transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-[1px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #111827;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #10b981;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#111827',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Set headlines in Figtree bold, left-aligned, in white
- **Do:** Use the blue (#2563eb) only for the header button and the price
- **Do:** Keep the discount badge small and green (#10b981), placed next to the price
- **Don't:** Don't use blue for body text on the dark ground
- **Don't:** Don't use the green badge as a button colour
- **Don't:** Don't square off the rounded image panel; its corner radius is part of the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
