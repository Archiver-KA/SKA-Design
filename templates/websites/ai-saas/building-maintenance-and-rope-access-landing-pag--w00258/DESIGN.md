# Design system — Building Maintenance and Rope Access Landing Page Template

`SN-W00258` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A sober service landing page over a grey photo field: a dark charcoal-grey overlay carries large white sans headlines, with a yellow (#f5b425) subheading naming the service line. Blue (#0274be) is reserved for the primary button and the cookie consent action, and the consent panel sits as a white card on the image. Colour signals only the call to action and the key sub-claim, so the page reads as trustworthy and plain.

**Mood:** sober, trustworthy, industrial, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7f9fb` | Cards, panels, raised areas |
| Text | `#222222` | Headings and primary copy |
| Muted text | `#999999` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0274be` | Primary action and highlights |
| Second accent | `#f5b425` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0274be` · `#222222` · `#f5b425` · `#4285f4` · `#999999` · `#f7f9fb` · `#0f1a2e` · `#e7e7e7` · `#808285`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Work Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 rounded text-sm font-semibold hover:bg-white/10 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Testimonials (`testimonials`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7f9fb;
  --color-text: #222222;
  --color-muted: #999999;
  --color-border: #ffffff;
  --color-accent: #0274be;
  --color-accent-2: #f5b425;
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
    surface: '#f7f9fb',
    ink: '#222222',
    muted: '#999999',
    line: '#ffffff',
    accent: '#0274be',
    accent2: '#f5b425',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#0274be) for the primary button and the consent action
- **Do:** Set the service subheading in yellow (#f5b425) below the headline
- **Do:** Put body copy in white over the darkened photo
- **Don't:** Don't use the yellow for buttons; it is a text highlight
- **Don't:** Don't leave the photo without the grey overlay behind white text
- **Don't:** Don't add extra cards over the headline area

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
