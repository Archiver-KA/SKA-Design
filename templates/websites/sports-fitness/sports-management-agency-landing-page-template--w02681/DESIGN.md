# Design system — Sports Management Agency Landing Page Template

`SN-W02681` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark black agency hero with very large white uppercase grotesque headlines stacked over three lines. The final word NOW fades into a grey gradient, which is the page's one typographic device. The blue (#1d4ed8) primary button and a small logo mark are the only colour, so the page reads as serious and high-end. Negative space around the headline gives it weight.

**Mood:** stark, serious, high-end, minimal, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1d4ed8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#171717` · `#0a0a0a` · `#525252` · `#404040` · `#d4d4d4` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-sports-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Timeline (`timeline`)
7. Team (`team`)
8. Logo cloud (`logo-cloud`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #1d4ed8;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#1d4ed8',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set each headline line in large white uppercase, with the last word in a grey gradient.
- **Do:** Use #1d4ed8 for the primary button only.
- **Do:** Keep the hero as black with generous empty space around the headline.
- **Don't:** Don't use blue for headlines or large fills.
- **Don't:** Don't add photographs behind the headline.
- **Don't:** Don't set body copy in the display face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
