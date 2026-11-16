# Design system — Health Podcast Landing Page Template

`SN-W02396` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

An editorial podcast hero on a warm cream ground (#f5f2eb), with a dark serif headline and one line highlighted by a peach marker stroke. Buttons and the episode card carry hard dark outlines and offset shadows, which gives the page a hand-printed, zine-like quality. Amber (#e8a838) is the main accent, and navy (#1a2234) carries the outlines and secondary text.

**Mood:** editorial, warm, hand-printed, zine, candid

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2eb` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#e8a838` | Primary action and highlights |
| Second accent | `#1a2234` | Supporting highlights |

Palette by frequency of use: `#f5f2eb` · `#1a2234` · `#e8a838`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sketch`, `shadow-sketch-hover`, `shadow-card`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="sketchy-btn border-2 border-brand-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-white transform hover:-rotate-1">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f2eb;
  --color-text: #111111;
  --color-accent: #e8a838;
  --color-accent-2: #1a2234;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2eb',
    ink: '#111111',
    accent: '#e8a838',
    accent2: '#1a2234',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in a dark serif, with one line highlighted by a peach marker behind the text.
- **Do:** Outline buttons and cards in dark navy (#1a2234) with a hard offset shadow.
- **Do:** Use the amber (#e8a838) for the primary button and the small badge only.
- **Don't:** Don't use soft blurred shadows; the offset shadow is the depth cue.
- **Don't:** Don't set the page ground in white; the cream is part of the look.
- **Don't:** Don't use the amber for body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
