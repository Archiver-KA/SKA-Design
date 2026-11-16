# Design system — Inline Skating Community Landing Page Template

`SN-W03612` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The skating school page is urban and high-contrast, set on black (#000000). The headline is a very heavy, tightly leaded sans in uppercase, with its last line fading from white to grey. Red (#e10600) marks the small kicker above the headline and a stat block at the lower right. The layout is blunt and athletic, and colour is used sparingly against the black.

**Mood:** urban, bold, athletic, high-contrast, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e10600` | Primary action and highlights |

Palette by frequency of use: `#e10600` · `#ffffff` · `#000000` · `#6b7280` · `#f3f4f6` · `#9ca3af` · `#4b5563` · `#f9fafb` · `#111111` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Anton, Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-[#E10600] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm hidden md:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9fafb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e10600;
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
    surface: '#f9fafb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e10600',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very heavy uppercase sans with tight leading
- **Do:** Use red (#e10600) for the kicker and stat blocks only
- **Do:** Keep the hero black (#000000) with white and grey type
- **Don't:** Don't use red for long text or large background fields
- **Don't:** Don't soften the headline with a light weight
- **Don't:** Don't add decorative shapes behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
