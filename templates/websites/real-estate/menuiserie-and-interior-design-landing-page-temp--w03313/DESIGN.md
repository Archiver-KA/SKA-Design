# Design system — Menuiserie & Interior Design Landing Page Template

`SN-W03313` · real-estate · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A cream page with a heavy dark sans headline, where the second line is set in warm brown (#8b6f47) at the same size, so colour does the emphasis. A thin brown rule marks the intro paragraph, and the primary action is a near-black rectangle beside an outlined one. The right side is a plain grey panel for a photograph, giving a warm, plain, workshop feel.

**Mood:** warm, craft, plain, solid

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f7f2` | Page ground |
| Text | `#1c1c1c` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b6f47` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1c1c` · `#c9a961` · `#8b6f47` · `#6b7280` · `#f9f7f2` · `#4b5563` · `#e5e7eb` · `#000000` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 36px · body 14px
- **Weights in use:** semibold, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-gray-200`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2.5 bg-[#1C1C1C] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#8B6F47] transition-all duration-300 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f7f2;
  --color-text: #1c1c1c;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #8b6f47;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f7f2',
    ink: '#1c1c1c',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#8b6f47',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in brown (#8b6f47) at the same size as the first.
- **Do:** Mark the intro paragraph with a thin brown left rule.
- **Do:** Use a near-black filled button beside an outlined button of the same height.
- **Don't:** Don't use the gold (#c9a961) as a page background; it stays a secondary colour.
- **Don't:** Don't use the brown for large fields; it stays on type and rules.
- **Don't:** Don't add rounded corners to buttons; the blocks are square.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
