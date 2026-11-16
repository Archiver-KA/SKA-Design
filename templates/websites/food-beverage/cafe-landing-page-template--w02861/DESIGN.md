# Design system — Cafe Landing Page Template

`SN-W02861` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, moody and photographic. A warm photo of coffee on a wooden board sits under a heavy brown overlay, and a white high-contrast serif headline carries a gold italic second line (#c8922a). The primary button is a gold pill beside a dark outlined secondary. A small green chat bubble in the corner is the one cool colour, and it reads as the WhatsApp contact rather than part of the palette.

**Mood:** moody, photographic, warm, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a0f0a` | Page ground |
| Surface | `#1a0f0a` | Cards, panels, raised areas |
| Text | `#f5f0e8` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8922a` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8922a` · `#0d0d0d` · `#1a0f0a` · `#f5f0e8` · `#000000` · `#333333` · `#a0721c` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(200,146,42,0.1)]`, `shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mobile-link mt-4 px-8 py-3 rounded-full bg-[#c8922a] text-[#0d0d0d] font-sans text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Team (`team`)
5. Menu list (`menu-list`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a0f0a;
  --color-surface: #1a0f0a;
  --color-text: #f5f0e8;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c8922a;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a0f0a',
    surface: '#1a0f0a',
    ink: '#f5f0e8',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c8922a',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a high-contrast serif with the second line in gold italic
- **Do:** Use the gold (#c8922a) for the primary button and the italic emphasis only
- **Do:** Keep the green chat bubble in the corner as the only contact colour
- **Don't:** Don't place the headline over bright parts of the photo without the overlay
- **Don't:** Don't use the green outside the chat button
- **Don't:** Don't use white buttons on the dark photo; gold is the action colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
