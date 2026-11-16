# Design system — Yoka Web Media & Community Template

`SN-W03661` · events · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark news portal in near-black and charcoal, with a single cyan (#00bfc6) reserved for the logo, category tags and key links. The hero is a large grey photograph with white headline type stacked over the lower left. Navigation is a dense row of small text links, so the page reads like an editorial front page rather than a marketing site.

**Mood:** editorial, dense, dark, community-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0d` | Page ground |
| Surface | `#101113` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00bfc6` | Primary action and highlights |
| Second accent | `#101735` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00bfc6` · `#9ca3af` · `#000000` · `#00aeb5` · `#f3f4f6` · `#e5e7eb` · `#6b7280` · `#0b0b0d` · `#eeeff0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 16px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1200px]`, `max-w-[1136px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#00bfc6] px-5 py-3 text-sm font-medium text-white hover:bg-[#00aeb5]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0d;
  --color-surface: #101113;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #00bfc6;
  --color-accent-2: #101735;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0d',
    surface: '#101113',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#00bfc6',
    accent2: '#101735',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#00bfc6) for category tags, the logo and key links only
- **Do:** Set the hero headline in white over the photograph, left-aligned
- **Do:** Keep navigation as small text links in a single row
- **Don't:** Don't add cyan to large surfaces; it works as a small signal only
- **Don't:** Don't use shadows or raised cards; the page is flat
- **Don't:** Don't set body copy in cyan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
