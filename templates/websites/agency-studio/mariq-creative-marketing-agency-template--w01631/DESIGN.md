# Design system — Mariq Creative Marketing Agency Template

`SN-W01631` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark agency hero built on a black-and-white photograph under a heavy dark overlay, with a bold, centred uppercase sans headline in white over two lines. The steel blue (#4774b8) appears only on the primary button, giving one clear action colour against the grey photo. A small uppercase kicker sits above the headline, and the navigation is a floating dark bar with a blue CTA.

**Mood:** bold, dark, photographic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#b3b3b3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4774b8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4774b8` · `#111111` · `#b3b3b3` · `#6d6c6c` · `#050505` · `#355a90` · `#0a0a0a` · `#222222` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Montserrat, Jost, Geist
- **Scale (largest breakpoint):** h1 64px · h2 72px · h3 36px · body 18px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[1360px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="font-ui bg-[#4774B8] text-white px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#355a90] transition-colors flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #b3b3b3;
  --color-border: #ffffff;
  --color-accent: #4774b8;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#b3b3b3',
    line: '#ffffff',
    accent: '#4774b8',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use steel blue (#4774b8) on the primary button only
- **Do:** Set the headline in bold uppercase sans, white, centred
- **Do:** Dim photographs with a dark overlay so the white type reads cleanly
- **Don't:** Don't use blue for headings
- **Don't:** Don't leave photographs at full brightness behind the headline
- **Don't:** Don't add more than one blue element per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
