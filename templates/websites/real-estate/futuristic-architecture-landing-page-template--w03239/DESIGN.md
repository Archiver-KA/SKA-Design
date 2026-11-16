# Design system — Futuristic Architecture Landing Page Template

`SN-W03239` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic tech page: a near-black ground scattered with small coloured tiles, a large grey-to-white gradient headline in heavy uppercase sans, and a faint monospaced readout beneath it. Green marks status text, and purple is kept to scattered fragments, so the colour reads as a data overlay rather than a brand. The result is futuristic and deliberately low-contrast.

**Mood:** futuristic, cinematic, low-contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7b2cbf` | Primary action and highlights |
| Second accent | `#7b2cbf` | Supporting highlights |

Palette by frequency of use: `#00ff9d` · `#ffffff` · `#000000` · `#7b2cbf` · `#6b7280` · `#ff006e` · `#00fff0` · `#9ca3af` · `#1f2937` · `#0a0a0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Exo 2
- **Body:** Exo 2
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 14px
- **Weights in use:** semibold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_20px_#00FF9D]`, `shadow-[0_0_20px_#FF006E]`, `shadow-[0_0_20px_#7B2CBF]`
- **Content width:** `max-w-7xl`, `max-w-[1920px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white/10 hover:bg-[#00FF9D] hover:text-black transition-all border border-white/20 px-6 py-2 rounded-none font-rajdhani font-semibold text-sm tracking-wider backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Case studies (`case-studies`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #7b2cbf;
  --color-accent-2: #7b2cbf;
  --font-display: "Exo 2", sans-serif;
  --font-body: "Exo 2", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#7b2cbf',
    accent2: '#7b2cbf',
  },
  fontFamily: { display: ['Exo 2'], sans: ['Exo 2'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans with a grey-to-white gradient.
- **Do:** Use the green only for status text such as the system-ready label.
- **Do:** Scatter the purple (#7b2cbf) as small fragments rather than large fills.
- **Don't:** Don't use the neon green (#00ff9d) as a page background; it is a status tint.
- **Don't:** Don't put light backgrounds behind the readouts; they stay dim.
- **Don't:** Don't add more than one accent colour to the same screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
