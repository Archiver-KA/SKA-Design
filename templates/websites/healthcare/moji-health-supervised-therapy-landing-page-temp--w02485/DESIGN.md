# Design system — Moji Health Supervised Therapy Landing Page Template

`SN-W02485` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A neo-brutalist layout on a cream ground (#fffdf7), with solid black outlines around cards, buttons and a yellow highlight bar under a key headline phrase. Tilted pink and blue cards carry the two-therapist illustration, so the playful colour stays in the hero. Inter does the work at large sizes in black, with flat fills and no soft gradients.

**Mood:** playful, bold, direct, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff9ebb` | Primary action and highlights |
| Second accent | `#bfdbfe` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#52525b` · `#fafafa` · `#71717a` · `#fefce8` · `#fffdf7` · `#ff9ebb` · `#bfdbfe` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter, Playfair Display, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#ff9ebb] text-black px-6 py-2.5 text-sm font-bold rounded-lg border-2 border-black brutal-shadow hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Services (`services`)
7. Benefits (`benefits`)
8. Timeline (`timeline`)
9. Comparison (`comparison`)
10. Logo cloud (`logo-cloud`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffdf7;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #52525b;
  --color-border: #000000;
  --color-accent: #ff9ebb;
  --color-accent-2: #bfdbfe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf7',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#52525b',
    line: '#000000',
    accent: '#ff9ebb',
    accent2: '#bfdbfe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give cards and buttons a solid black outline
- **Do:** Use pink (#ff9ebb) and light blue (#bfdbfe) as card fills, not as text colour
- **Do:** Set headlines large in Inter with one yellow highlight behind a key phrase
- **Don't:** Don't use soft drop shadows; the style relies on outlines
- **Don't:** Don't set body text in colour; keep it black or dark grey
- **Don't:** Don't rotate body copy, only the decorative cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
