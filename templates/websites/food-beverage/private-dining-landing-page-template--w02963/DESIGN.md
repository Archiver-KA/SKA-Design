# Design system — Private Dining Landing Page Template

`SN-W02963` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark private-dining page with a dim, warm photograph under a near-black header, and a large white serif headline in two lines. A muted gold (#c5a059) is used for the primary Enquire Now button, and an outline button sits beside it. The page reads as warm and evening-lit.

**Mood:** evening, warm, refined, intimate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#3a3a3a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a19f9a` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a19f9a` · `#555555` · `#d1cfca` · `#2a2a2a` · `#1a1a1a` · `#777777` · `#171717` · `#000000` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cinzel, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_15px_rgba(197,160,89,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="btn-outline px-8 py-4 rounded-sm font-medium tracking-wide flex items-center justify-center bg-black/20 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Pricing (`pricing`)
6. Gallery / portfolio (`gallery-portfolio`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Timeline (`timeline`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #3a3a3a;
  --color-text: #ffffff;
  --color-muted: #a19f9a;
  --color-border: #2a2a2a;
  --font-display: "Cinzel", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#3a3a3a',
    ink: '#ffffff',
    muted: '#a19f9a',
    line: '#2a2a2a',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a white serif with generous line height
- **Do:** Use the gold button as the primary action and a dark outline button as the secondary
- **Do:** Keep the eyebrow label small, tracked and in a muted grey
- **Don't:** Don't use a light gold ground; the page is dark.
- **Don't:** Don't set the headline in dark text.
- **Don't:** Don't use the dark grey (#555555) for body text on the dark photo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
