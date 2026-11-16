# Design system — Aviation Flight School Landing Page Templatee

`SN-W03026` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photography-led hero: a dark-toned aircraft image fills the top of the page, with a bold uppercase sans headline in white and its second line in pale sky-blue italic (#38bdf8). An enquiry form sits on a white card over the lower edge of the photo, and a red primary button marks the action. The sky-blue carries the brand, while the red is used for the one action that matters.

**Mood:** aviation, photographic, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#38bdf8` · `#94a3b8` · `#0ea5e9` · `#1e293b` · `#cbd5e1` · `#0c4a6e` · `#64748b` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 20px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="bg-white text-slate-900 px-5 py-2.5 rounded hover:bg-sky-50 transition-colors font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Timeline (`timeline`)
5. Marquee (`marquee`)
6. Listings (`listings`)
7. Call to action (`cta`)
8. Process / steps (`how-it-works`)
9. Feature grid (`features`)
10. Gallery / portfolio (`gallery-portfolio`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans, with the second line in sky-blue italic
- **Do:** Use sky blue (#38bdf8) for headline accents, not for buttons
- **Do:** Place enquiry forms on a white card over the lower edge of the hero
- **Don't:** Don't use sky blue for buttons; the primary button is red
- **Don't:** Don't put small text on the aircraft photograph without the dark wash
- **Don't:** Don't set hero headlines small; they are large display type.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
