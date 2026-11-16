# Design system — Mon IA, ma voix

`SN-W03508` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A split layout with a dark chocolate panel (#3d3028) on the left and a cream column (#f7f3ed) on the right. Playfair Display sets the headline, with the second line in italic terracotta (#c4622d), and DM Sans carries the body. Stats and quotes sit in white cards with terracotta rules and numerals, so the warm palette reads as one editorial system.

**Mood:** refined, warm, editorial, humane

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f3ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3d3028` | Headings and primary copy |
| Muted text | `#7a6f65` | Secondary copy, captions |
| Border | `#2e2822` | Hairlines, dividers, outlines |
| Accent | `#c4622d` | Primary action and highlights |

Palette by frequency of use: `#c4622d` · `#f7f3ed` · `#7a6f65` · `#3d3028` · `#ffffff` · `#2e2822` · `#c9a84c` · `#8a8078` · `#e2d9ce` · `#a39990`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** Playfair Display, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-[108px]`
- **Common gaps:** `gap-2.5`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-4 bg-[#C4622D] text-white px-10 py-[18px] text-xs font-normal tracking-[0.2em] uppercase no-underline transition-colors duration-300 hover:bg-[#E8856A] group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Schedule (`schedule-agenda`)
4. Logo cloud (`logo-cloud`)
5. FAQ (`faq`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f3ed;
  --color-surface: #ffffff;
  --color-text: #3d3028;
  --color-muted: #7a6f65;
  --color-border: #2e2822;
  --color-accent: #c4622d;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f3ed',
    surface: '#ffffff',
    ink: '#3d3028',
    muted: '#7a6f65',
    line: '#2e2822',
    accent: '#c4622d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with the second line in italic terracotta (#c4622d)
- **Do:** Use terracotta (#c4622d) for the primary button, the numerals and the quote rules
- **Do:** Keep the left panel dark brown and the right column cream, split at the centre
- **Don't:** Don't set body copy in the serif face
- **Don't:** Don't add cool blues or greens to the warm palette
- **Don't:** Don't use the gold tone (#c9a84c) as text colour on the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
