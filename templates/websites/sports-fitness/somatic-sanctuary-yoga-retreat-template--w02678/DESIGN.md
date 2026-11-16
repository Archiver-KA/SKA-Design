# Design system — Somatic Sanctuary Yoga Retreat Template

`SN-W02678` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet retreat page on warm sand (#e8ddcc) with very large dark brown serif headlines, set in three lines with a thin rule beside the second. Small, widely letter-spaced uppercase labels frame the top and bottom edges, which gives a gallery-like, archival tone. Brown (#8a6f4d) is the accent for rules and small details, and the page feels calm and printed rather than digital.

**Mood:** quiet, archival, warm, contemplative, printed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8ddcc` | Page ground |
| Surface | `#d5dbd1` | Cards, panels, raised areas |
| Text | `#3a2f24` | Headings and primary copy |
| Muted text | `#3a2f24` | Secondary copy, captions |
| Border | `#c4cfc0` | Hairlines, dividers, outlines |
| Accent | `#8a6f4d` | Primary action and highlights |

Palette by frequency of use: `#2a3324` · `#e3e7e0` · `#c4cfc0` · `#3a2f24` · `#5c715e` · `#d5dbd1` · `#e8ddcc` · `#8a6f4d` · `#d2c2aa` · `#ddd1be`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter, Fraunces, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-[#2A3324] text-[#E3E7E0] p-3 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Process / steps (`how-it-works`)
7. Video / media (`video-media`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8ddcc;
  --color-surface: #d5dbd1;
  --color-text: #3a2f24;
  --color-muted: #3a2f24;
  --color-border: #c4cfc0;
  --color-accent: #8a6f4d;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8ddcc',
    surface: '#d5dbd1',
    ink: '#3a2f24',
    muted: '#3a2f24',
    line: '#c4cfc0',
    accent: '#8a6f4d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif in dark brown (#3a2f24) on the sand ground.
- **Do:** Frame the page with small uppercase letter-spaced labels at top and bottom.
- **Do:** Use thin rules in brown (#8a6f4d) to divide sections.
- **Don't:** Don't use the sage (#e3e7e0) as the page ground; the ground is sand.
- **Don't:** Don't add bright colours or photographic overlays on the headline.
- **Don't:** Don't set body copy in the display serif at large sizes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
