# Design system — No Cure No Pay Lead Generation Landing Page Template

`SN-W00593` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `nl`

## Direction

A white B2B landing page with a bold, tight dark sans headline and a solid orange (#ea580c) pill as the one strong colour. A faint peach glow sits in the hero corner, and small green check marks (#16a34a) list the benefits. The layout is a two-column hero with a white card on a pale grey panel, which keeps the orange on the call to action and the checks.

**Mood:** bold, direct, warm, trustworthy, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#e7e5e4` · `#f97316` · `#a8a29e` · `#57534e` · `#ea580c` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-soft`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all bg-brand-orange rounded-full hover:bg-orange-700 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Team (`team`)
5. FAQ (`faq`)
6. Footer (`footer`)
7. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ea580c;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ea580c',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold tight sans in near-black (#1c1917) on a white ground.
- **Do:** Use the solid orange (#ea580c) pill only for the primary call to action.
- **Do:** Use green (#16a34a) only for check marks and positive ratings.
- **Don't:** Don't flood the hero with the peach tint (#fed7aa); the glow is faint and corner-only.
- **Don't:** Don't use orange for body text or secondary links.
- **Don't:** Don't add a second filled button of equal weight next to the orange one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
