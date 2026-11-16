# Design system — PGStay PG Management Landing Page Template

`SN-W00626` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black landing page with a large serif headline in white, and one italic word in amber (#f59e0b) that is the page's only colour. Newsreader at about 128px makes the headline read like print, with grey Geist body copy and a solid amber primary button beneath.

**Mood:** calm, editorial, dark, serif, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a3a3a3` · `#737373` · `#171717` · `#262626` · `#000000` · `#fbbf24` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Geist
- **Loaded families:** Newsreader, Geist
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-16`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Dashboard preview (`dashboard-preview`)
5. Bento grid (`bento-grid`)
6. Timeline (`timeline`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #ef4444;
  --font-display: "Newsreader", serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in Newsreader at display size, white on black (#000000)
- **Do:** Use amber (#f59e0b) for one italic headline word and the primary button only
- **Do:** Keep body copy in grey Geist and centred under the headline
- **Don't:** Don't set headlines in a sans-serif; the serif carries the tone
- **Don't:** Don't use amber for more than one headline word and one button
- **Don't:** Don't add busy imagery to the hero; the type fills the space

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
