# Design system — Financial Services & Restructuring Landing Page Template

`SN-W00937` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A slate-grey hero with white, heavy uppercase headlines set against a dark navy contact panel on the right. Green [#8cc63f] marks the eyebrow tag and the submit button, and it is the only colour in the layout. Form fields are white boxes with small uppercase labels above them, so the panel reads as a working form rather than decoration.

**Mood:** corporate, direct, structured, slate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#4b5563` | Page ground |
| Surface | `#0b2545` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#8cc63f` | Primary action and highlights |
| Second accent | `#0b2545` | Supporting highlights |

Palette by frequency of use: `#8cc63f` · `#ffffff` · `#0b2545` · `#f3f4f6` · `#4b5563` · `#6b7280` · `#f1f5f9` · `#94a3b8` · `#9ca3af` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · body 18px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-[#8CC63F] hover:bg-[#7ab036] text-[#0B2545] font-semibold text-xl py-5 mt-4 transition-colors uppercase tracking-wide rounded-sm flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #4b5563;
  --color-surface: #0b2545;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #8cc63f;
  --color-accent-2: #0b2545;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#4b5563',
    surface: '#0b2545',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#8cc63f',
    accent2: '#0b2545',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#8cc63f) for the eyebrow tag and the submit button only
- **Do:** Set form labels in small uppercase above white input boxes
- **Do:** Keep headlines in heavy uppercase white sans
- **Don't:** Don't use a light page ground behind the hero; it is slate
- **Don't:** Don't set form labels in green
- **Don't:** Don't add a second accent beside the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
