# Design system — AI Email Productivity Landing Page Template

`SN-W00090` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

InboxPilot is a loud, high-contrast page on a near-black ground, with heavy uppercase display type and a hot pink (#ff0080) used for the key word and a stat panel. Outlined text sits beside solid text, and the grid is made of hard-edged blocks rather than soft cards. The result is bold and editorial, with the pink doing most of the work.

**Mood:** loud, high-contrast, bold, graphic, confrontational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0e0e0e` | Cards, panels, raised areas |
| Text | `#f0ede8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff0080` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#f0ede8` · `#ffffff` · `#0a0a0a` · `#ff0080` · `#0e0e0e` · `#1a1a1a` · `#141414` · `#60a5fa` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Barlow Condensed, Barlow, Space Grotesk
- **Scale (largest breakpoint):** h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-14`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-magenta text-[#0a0a0a] font-semibold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0e0e0e;
  --color-text: #f0ede8;
  --color-border: #ffffff;
  --color-accent: #ff0080;
  --color-accent-2: #60a5fa;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0e0e0e',
    ink: '#f0ede8',
    line: '#ffffff',
    accent: '#ff0080',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in heavy uppercase, with one word in hot pink (#ff0080)
- **Do:** Use outlined text for one line of the headline, to contrast with solid text
- **Do:** Build sections from hard-edged blocks; keep corners square
- **Don't:** Don't use soft rounded cards; the layout is built from sharp blocks
- **Don't:** Don't use pink for more than one highlight per screen
- **Don't:** Don't set long body copy in the uppercase display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
