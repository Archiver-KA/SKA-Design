# Design system — Construction Company Landing Page Template

`SN-W03219` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A stark black page with a large white uppercase headline in a geometric sans, the second line in grey, and a thin-bordered dark card to the right holding a small status figure. Black, white and zinc greys carry everything, with no coloured accent. The look is severe and architectural, relying on type scale and hairline borders rather than decoration.

**Mood:** severe, architectural, monochrome, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#0a0a0a` · `#000000` · `#18181b` · `#52525b` · `#60a5fa` · `#1e3a8a` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex text-xs font-semibold bg-white text-black px-6 py-3 rounded-sm hover:bg-zinc-200 transition-colors tracking-wide uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in white uppercase, with the second line in grey (#71717a).
- **Do:** Keep the page to black, white and zinc greys with no coloured accent.
- **Do:** Use thin-bordered dark cards for stats and status, placed beside the copy.
- **Don't:** Don't add the navy (#1e3a8a) as a button or highlight.
- **Don't:** Don't mix in pastel or gradient fills; the look is flat black and white.
- **Don't:** Don't set body copy at headline weight; keep it small and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
