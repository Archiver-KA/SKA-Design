# Design system — AI Resume Builder Web App Template

`SN-W01782` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page ([#fdfbf7]) with a large serif headline in black, where the second line is set in italic grey. A dark rounded card with a white serif mock resume gives the hero a physical, tactile feel, and a solid orange-red button leads the actions. The orange (#ff4f00) is the only accent, and the serif carries the editorial voice.

**Mood:** warm, editorial, tactile, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e2dc` | Hairlines, dividers, outlines |
| Accent | `#ff4f00` | Primary action and highlights |

Palette by frequency of use: `#121212` · `#525252` · `#ffffff` · `#e5e2dc` · `#ff4f00` · `#fdfbf7` · `#4b5563` · `#e5e7eb` · `#000000` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Geist
- **Loaded families:** Geist, Newsreader
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-sharp`, `shadow-sm`, `shadow-soft`
- **Content width:** `max-w-[1400px]`, `max-w-[90vw]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-ink text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-signal transition-colors duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Logo cloud (`logo-cloud`)
7. Code / terminal (`code-terminal`)
8. Dashboard preview (`dashboard-preview`)
9. Contact form (`contact-form`)
10. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #121212;
  --color-text: #111111;
  --color-muted: #525252;
  --color-border: #e5e2dc;
  --color-accent: #ff4f00;
  --font-display: "Newsreader", serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#121212',
    ink: '#111111',
    muted: '#525252',
    line: '#e5e2dc',
    accent: '#ff4f00',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in Newsreader, with the second line in italic grey.
- **Do:** Use the orange (#ff4f00) for the primary button only.
- **Do:** Keep the mock resume card dark (#121212) with white serif type.
- **Don't:** Don't use orange for body text or for large fills beyond the button.
- **Don't:** Don't set body copy in the serif; Geist carries the body.
- **Don't:** Don't use a pure white page; the warm off-white ground is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
