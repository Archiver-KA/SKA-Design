# Design system — Email Newsletter Updates

`SN-W03769` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark update card in an email-style layout, with a charcoal header row and a dim indigo-grey band that carries the title. Sections follow in order, each with a small icon in a tinted square, a short description and a date line. A single small purple tag marks new items, and hairline dividers separate the entries in a calm, neat rhythm.

**Mood:** dark, neat, informational, calm, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 16px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-2xl`

**Primary button**

```html
<a class="inline-block bg-dark-accent text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the card in dark charcoal, with the title band dimmer than the page
- **Do:** Mark new items with a single small purple tag
- **Do:** Give each section an icon, a bold title and a grey description
- **Don't:** Don't use bright fills in the title band
- **Don't:** Don't add more than one tag style
- **Don't:** Don't set body copy in white; keep it in soft grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
