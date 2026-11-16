# Design system — Accounting Firm AI Acquisition

`SN-W00851` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sales-led hero on a near-black ground, with a large white Inter headline and a grey second line where 'On Autopilot.' fades back. The primary button is solid white and the secondary is a plain text link, so there is no accent colour at all. Depth comes from a faint dark glow behind the headline, and the copy stays in muted grey.

**Mood:** sober, dark, monochrome, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fafafa` · `#a1a1aa` · `#18181b` · `#71717a` · `#0ea5e9` · `#e4e4e7` · `#09090b` · `#d4d4d8` · `#0c4a6e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium text-zinc-950 bg-zinc-50 hover:bg-zinc-200 transition-colors px-4 py-1.5 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Booking form (`booking`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at 72px in white, with the second clause in grey
- **Do:** Use a solid white pill for the primary action and a text link for the secondary
- **Do:** Keep the glow faint and centred behind the headline only
- **Don't:** Don't add a bright accent colour; the design is monochrome
- **Don't:** Don't make the secondary action a filled button
- **Don't:** Don't set body copy in pure white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
