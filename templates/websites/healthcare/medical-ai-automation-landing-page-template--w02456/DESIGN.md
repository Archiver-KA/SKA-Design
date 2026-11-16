# Design system — Medical AI Automation Landing Page Template

`SN-W02456` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A near-black hero with a large light headline whose last line is set in blue (#2563ff), under a solid blue announcement bar. Process steps sit in a bordered stack on the right, linked by small dots, so the page reads as a product diagram.

**Mood:** dark, technical, confident, sharp, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#b0b0cc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563ff` | Primary action and highlights |
| Second accent | `#ffb800` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563ff` · `#ffb800` · `#5b8aff` · `#f4f4f8` · `#0b49cd` · `#b0b0cc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-[0.08em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Section padding:** `py-[9px]`
- **Common gaps:** `gap-10`, `gap-12`

**Primary button**

```html
<a class="open-modal text-white border border-white/10 rounded-lg px-6 py-[9px] text-[13px] font-semibold transition-colors bg-white/[0.06] hover:bg-white/[0.15] font-sans cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Comparison (`comparison`)
7. Team (`team`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)
11. Contact form (`contact-form`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-muted: #b0b0cc;
  --color-border: #ffffff;
  --color-accent: #2563ff;
  --color-accent-2: #ffb800;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    muted: '#b0b0cc',
    line: '#ffffff',
    accent: '#2563ff',
    accent2: '#ffb800',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563ff) for the highlighted headline line and the primary button only
- **Do:** Stack process steps as bordered cards linked by small connector dots
- **Do:** Keep the announcement bar in solid blue at the top of the page
- **Don't:** Don't use the yellow (#ffb800) for text on the dark ground
- **Don't:** Don't switch the page to a light background; the design is dark
- **Don't:** Don't add more than one highlighted phrase per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
