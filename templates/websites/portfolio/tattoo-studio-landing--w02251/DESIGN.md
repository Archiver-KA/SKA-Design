# Design system — Tattoo Studio Landing

`SN-W02251` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A tattoo studio page built as a dark hero under a black header, with a tan (#d1b6a1) announcement strip above it. Large uppercase serif headlines alternate regular and italic lines in white, and a greyscale portrait sits in the right column. The WhatsApp green (#25d366) circular chat button is the only saturated colour in the frame, so the tan strip and the mixed serif lines are what identify the template.

**Mood:** bold, editorial, monochrome, warm, contrasting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e0e0e` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d1b6a1` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#d1b6a1` · `#0e0e0e` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#d1d5db` · `#e5e7eb` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 14px · body 12px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#D1B6A1] text-black text-xs px-4 py-2 rounded-full font-bold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Announcement bar (`announcement-bar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0e0e0e;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #000000;
  --color-accent: #d1b6a1;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e0e0e',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#000000',
    accent: '#d1b6a1',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the tan (#d1b6a1) only for the announcement strip and thin highlights.
- **Do:** Set headline lines in uppercase serif, alternating regular and italic.
- **Do:** Reserve the WhatsApp green (#25d366) for the chat button.
- **Don't:** Don't use the green for buttons other than the chat link.
- **Don't:** Don't place the tan strip inside the dark hero; it sits above it.
- **Don't:** Don't set the headline in sans; the serif is the voice of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
