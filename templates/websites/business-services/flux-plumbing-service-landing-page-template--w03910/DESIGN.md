# Design system — Flux Plumbing Service Landing Page Template

`SN-W03910` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A deep teal ground carries white sans headlines, and the closing phrase of each headline turns lime (#c9f562) for emphasis. Inter Tight sets the large centred headline with tight spacing, and lime pills handle the main actions. A small outlined status tag sits above the headline for availability. The palette is limited to teal, white and lime, so the page reads as calm and confident.

**Mood:** calm, confident, minimal, direct, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#003c41` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9f562` | Primary action and highlights |
| Second accent | `#003c41` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#c9f562` · `#222222` · `#57534e` · `#003c41` · `#78716c` · `#c8c3b9` · `#ebe9e1` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Scale (largest breakpoint):** h1 84px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-none`, `shadow-xl`
- **Content width:** `max-w-[1280px]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="justify-self-end inline-flex items-center gap-2 rounded-full bg-[#c9f562] px-5 py-3 text-sm font-normal text-[#003c41] transition duration-500 ease-in-out hover:scale-95 hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Testimonials (`testimonials`)
4. Footer (`footer`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #003c41;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #ffffff;
  --color-accent: #c9f562;
  --color-accent-2: #003c41;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#003c41',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#ffffff',
    accent: '#c9f562',
    accent2: '#003c41',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of each headline in lime (#c9f562) and the rest in white.
- **Do:** Use lime pills for the primary actions and an outlined pill for the secondary action.
- **Do:** Keep the hero on the deep teal ground with centred text.
- **Don't:** Don't use lime for body text; it is reserved for emphasis and buttons.
- **Don't:** Don't switch the background to a light grey; the teal ground is part of the identity.
- **Don't:** Don't add a second accent colour beyond teal and lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
