# Design system — Security Guard Services Landing Page Template

`SN-W04093` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero set in a bordered panel on a near-black page, with a large white sans headline whose closing phrase is in gold. Gold (#c9a84c) fills the main button, and the secondary action is outlined in gold, so the colour signals authority and steadiness. Small uppercase labels and a gold button in the header add structure without adding colour.

**Mood:** authoritative, steady, dark, formal, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111526` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |
| Second accent | `#1a1f36` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c9a84c` · `#1a1f36` · `#94a3b8` · `#111526` · `#64748b` · `#cbd5e1` · `#000000` · `#b5953e` · `#1f253f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="w-full py-3.5 rounded-full text-sm transition-all duration-300 font-medium flex items-center justify-center gap-2 bg-[#c9a84c] text-[#111526] hover:bg-[#b5953e] shadow-lg shadow-[#c9a84c]/20">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Services (`services`)
7. Process / steps (`how-it-works`)
8. Stats band (`stats`)
9. Testimonials (`testimonials`)
10. About (`about`)
11. Contact form (`contact-form`)
12. FAQ (`faq`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111526;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c9a84c;
  --color-accent-2: #1a1f36;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111526',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c9a84c',
    accent2: '#1a1f36',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in gold (#c9a84c)
- **Do:** Use the gold fill for the main button and a gold outline for the secondary button
- **Do:** Keep the hero inside a dark navy panel with rounded corners
- **Don't:** Don't use gold for body copy; it marks headings and buttons
- **Don't:** Don't place the panel on a light background
- **Don't:** Don't add a second accent colour beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
