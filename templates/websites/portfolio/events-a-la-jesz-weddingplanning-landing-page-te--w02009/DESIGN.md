# Design system — Events á la Jesz Weddingplanning Landing Page Template

`SN-W02009` · portfolio · light mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A sage-grey photographic hero with a soft haze, and a large serif headline in cream that switches to an italic second line for emphasis. The nav call to action is a deep green (#2d5016) pill, and the logo sets a gold (#d4af37) word beside the serif wordmark. Body copy is small Montserrat, and the buttons pair a cream filled pill with a thin outlined one. The mood is romantic and restrained, with the green carrying the brand.

**Mood:** romantic, soft, elegant, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f1e9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d5016` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2d5016` | Primary action and highlights |
| Second accent | `#2d5016` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#2d5016` · `#ffffff` · `#f8f1e9` · `#4b5563` · `#000000` · `#9ca3af` · `#6b7280` · `#1a330d` · `#e8b4bc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="w-full bg-[#D4AF37] text-[#2D5016] py-4 rounded-xl font-semibold tracking-wide hover:bg-[#bf9b30] transition-colors mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f1e9;
  --color-surface: #ffffff;
  --color-text: #2d5016;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #2d5016;
  --color-accent-2: #2d5016;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f1e9',
    surface: '#ffffff',
    ink: '#2d5016',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#2d5016',
    accent2: '#2d5016',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with the second line in italic
- **Do:** Use the deep green (#2d5016) for the primary nav action
- **Do:** Keep body copy in Montserrat at small size, in cream over the hero
- **Don't:** Don't set the headline in a sans; the serif is the voice
- **Don't:** Don't use the gold beyond one word in the logo and small highlights
- **Don't:** Don't place cream text over a light patch of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
