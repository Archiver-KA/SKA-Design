# Design system — Premium Taxi Service Landing Page Template

`SN-W04063` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A bold orange page where the hero is a warm gradient field, with a framed car photograph and a white booking card set on top. Type is white on orange, and the booking card stays white with dark ink so the form is the clearest block on the screen. A large circular badge with curved text and offset translucent panels give the layout a playful, poster-like energy.

**Mood:** bold, warm, playful, poster-like, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ff7f36` | Page ground |
| Text | `#10212b` | Headings and primary copy |
| Muted text | `#4a5c68` | Secondary copy, captions |
| Border | `#cdd5da` | Hairlines, dividers, outlines |
| Accent | `#f26b1d` | Primary action and highlights |
| Second accent | `#ff7f36` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4a5c68` · `#cdd5da` · `#10212b` · `#1f5f8b` · `#c9d3d9` · `#ff7f36` · `#f26b1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 104px · h2 60px · h3 24px · body 15px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[8px_8px_0_#10212B]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center min-h-[52px] px-8 bg-ink text-white font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ff7f36;
  --color-text: #10212b;
  --color-muted: #4a5c68;
  --color-border: #cdd5da;
  --color-accent: #f26b1d;
  --color-accent-2: #ff7f36;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ff7f36',
    ink: '#10212b',
    muted: '#4a5c68',
    line: '#cdd5da',
    accent: '#f26b1d',
    accent2: '#ff7f36',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero on the orange gradient (#ff7f36) with white navigation and headline text
- **Do:** Keep the booking card white with dark ink (#10212b) so it is the one solid white block
- **Do:** Frame photographs in offset panels with a translucent overlay
- **Don't:** Don't use the navy (#1f5f8b) on orange; it does not appear on the hero
- **Don't:** Don't replace the orange field with a plain white hero background
- **Don't:** Don't cover the booking form with decorative shapes or badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
