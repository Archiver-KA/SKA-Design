# Design system — Alberta Infill Real Estate Fund Landing Page Template

`SN-W03170` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A conservative investment page in navy and slate, with a muted gold for the headline highlight and the primary button. The hero is a blue-grey gradient with white Lora serif headings and centred text, so the page reads as private-banking calm rather than fintech. Gold is saved for emphasis: one phrase in the headline and one button.

**Mood:** calm, conservative, trustworthy, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#4b5563` · `#f9fafb` · `#374151` · `#d1d5db` · `#f3f4f6` · `#6b7280` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Lora, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-brand-gold text-brand-navy px-6 py-2.5 rounded hover:bg-brand-goldHover transition-colors font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Pricing (`pricing`)
5. Comparison (`comparison`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set headlines in Lora with the gold highlight on one phrase only
- **Do:** Use gold for the primary button and at most one accent per section
- **Do:** Keep the navy header bar and the centred hero text
- **Don't:** Don't use bright or saturated colours; the palette stays muted
- **Don't:** Don't set headlines in a sans-serif; Lora carries the page
- **Don't:** Don't add animated or glowing effects to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
