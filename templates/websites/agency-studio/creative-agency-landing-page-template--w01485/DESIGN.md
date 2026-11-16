# Design system — Creative Agency Landing Page Template

`SN-W01485` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, photographic hero where a portrait of a man in glasses sits under a full-frame orange duotone, so the photograph and the orange (#ff6a1a) form one colour treatment. The nav is set light over the photo, with an orange button at top right repeating the accent. A thin horizontal rule crosses the frame at mid-height as a structural line. The stance is cinematic and editorial.

**Mood:** cinematic, editorial, warm, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111213` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f2ed` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6a1a` | Primary action and highlights |
| Second accent | `#6bd3ed` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff6a1a` · `#000000` · `#111213` · `#e9e7e1` · `#f4f2ed` · `#ff8444` · `#f06a18` · `#191a1b` · `#f0ede5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="group hidden min-h-11 items-center gap-2 rounded-md bg-[#ff6a1a] px-5 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#ff8444] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Case studies (`case-studies`)
9. Logo cloud (`logo-cloud`)
10. Articles (`blog-articles`)
11. FAQ (`faq`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111213;
  --color-surface: #000000;
  --color-text: #f4f2ed;
  --color-border: #ffffff;
  --color-accent: #ff6a1a;
  --color-accent-2: #6bd3ed;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111213',
    surface: '#000000',
    ink: '#f4f2ed',
    line: '#ffffff',
    accent: '#ff6a1a',
    accent2: '#6bd3ed',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Treat portraits as an orange duotone (#ff6a1a) so the photo and the accent share one colour.
- **Do:** Keep the nav light on the photograph and use the orange only for the top-right button.
- **Do:** Use a single thin horizontal rule across the hero as the structural line.
- **Don't:** Don't place unfiltered full-colour photos beside the orange; the treatment is the identity.
- **Don't:** Don't add cyan; the palette has no cyan.
- **Don't:** Don't put body text over the busiest part of the photo.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
