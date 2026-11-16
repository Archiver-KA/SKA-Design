# Design system — Lumen AI Landing Page Template

`SN-W00220` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, literary light page on cream (#f2eee5), with a large black serif headline in Cormorant Garamond. The final word is set in italic olive-green (#8e9c75), the only colour in the headline. The layout is centred, with a filled near-black primary button and an outlined ghost secondary, and the palette stays almost entirely warm neutral.

**Mood:** warm, literary, calm, craft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2eee5` | Page ground |
| Surface | `#f7f4ed` | Cards, panels, raised areas |
| Text | `#171512` | Headings and primary copy |
| Muted text | `#6f6b62` | Secondary copy, captions |
| Border | `#171512` | Hairlines, dividers, outlines |
| Accent | `#8e9c75` | Primary action and highlights |

Palette by frequency of use: `#171512` · `#6f6b62` · `#8e9c75` · `#f2eee5` · `#9a948a` · `#f7f4ed` · `#3b4b34` · `#ffffff` · `#b96a4a` · `#ede8dd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[26px]` (26px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1200px]`, `max-w-[1080px]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-4`

**Primary button**

```html
<a class="rounded-full bg-[#171512] text-[#F2EEE5] text-sm font-medium px-5 py-2.5 hover:bg-[#3B4B34] transition-colors btn-lift">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Team (`team`)
9. FAQ (`faq`)
10. Dashboard preview (`dashboard-preview`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2eee5;
  --color-surface: #f7f4ed;
  --color-text: #171512;
  --color-muted: #6f6b62;
  --color-border: #171512;
  --color-accent: #8e9c75;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2eee5',
    surface: '#f7f4ed',
    ink: '#171512',
    muted: '#6f6b62',
    line: '#171512',
    accent: '#8e9c75',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond with the final word in italic olive (#8e9c75)
- **Do:** Keep the ground cream (#f2eee5) and the type near-black (#171512)
- **Do:** Make the primary button a filled near-black and the secondary an outline
- **Don't:** Don't use bright colours; the page is neutral and warm
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't use more than one italic word in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
