# Design system — Tattoo Artist Portfolio Landing Page Template

`SN-W02250` · portfolio · light mode · Sinera Atlas theme `workshop` · language `sl`

## Direction

A tattoo studio page that pairs a near-black header and hero (#0e0e0e) with a tan (#d1b6a1) announcement bar above them. Uppercase serif headlines mix regular and italic lines across the left column, and a greyscale portrait sits on the right. The WhatsApp green (#25d366) circular chat button is the only saturated colour on the page, so the tan bar and the mixed serif lines identify it.

**Mood:** bold, editorial, monochrome, warm, contrasting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d1b6a1` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d1b6a1` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#d1b6a1` · `#000000` · `#ffffff` · `#0e0e0e` · `#e5e7eb` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#f9fafb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Manrope, Cormorant Garamond
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 14px · body 12px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-xl`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-8 py-4 rounded-none md:rounded-full w-full md:w-auto text-center text-sm tracking-widest uppercase font-bold hover:bg-[#D1B6A1] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Announcement bar (`announcement-bar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #d1b6a1;
  --color-surface: #e5e7eb;
  --color-text: #000000;
  --color-muted: #374151;
  --color-border: #000000;
  --color-accent: #d1b6a1;
  --color-accent-2: #25d366;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d1b6a1',
    surface: '#e5e7eb',
    ink: '#000000',
    muted: '#374151',
    line: '#000000',
    accent: '#d1b6a1',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the tan (#d1b6a1) only for the announcement bar and thin highlights.
- **Do:** Set headline lines in uppercase serif, alternating regular and italic.
- **Do:** Reserve the WhatsApp green (#25d366) for the chat button.
- **Don't:** Don't use the green for buttons other than the chat link.
- **Don't:** Don't place the tan bar inside the dark hero; it stays a strip above it.
- **Don't:** Don't set the headline in sans; the serif is the voice of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
