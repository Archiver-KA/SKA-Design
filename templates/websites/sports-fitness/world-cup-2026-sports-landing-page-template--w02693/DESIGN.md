# Design system — World Cup 2026 Sports Landing Page Template

`SN-W02693` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A sports campaign page on a near-black field carries an italic, heavy uppercase sans headline that switches between white and orange (#ffaa33) gradient words. The orange also marks the active nav tab, and prize panels are framed by an orange edge on one side and red on the other. The energy comes from colour edges rather than photography.

**Mood:** high energy, campaign, dark, italic display

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffaa33` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff8800` · `#737373` · `#000000` · `#a3a3a3` · `#ffaa33` · `#525252` · `#d4d4d4` · `#0a0a0a` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 24px · body 16px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,136,0,0.5)]`, `shadow-[0_8px_32px_rgba(0,0,0,0.4)]`, `shadow-[0_0_20px_rgba(255,136,0,0.5)]`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="whitespace-nowrap text-black px-7 py-2.5 bg-gradient-to-r from-[#ff8800] to-[#ffaa33] shadow-[0_0_20px_rgba(255,136,0,0.4)] hover:shadow-[0_0_30px_rgba(255,136,0,0.6)] transition-all duration-300 font-black uppercase tracking-widest text-xs">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Comparison (`comparison`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #ffaa33;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#ffaa33',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on near-black (#000000) with white uppercase headlines in heavy italic sans.
- **Do:** Use the orange gradient (#ffaa33) on one or two words per headline, not the whole line.
- **Do:** Frame prize-pool panels with an orange edge on one side and a second accent on the other.
- **Don't:** Don't set the hero as a solid orange (#ff8800) field; the ground is dark.
- **Don't:** Don't set body copy in orange; it is for headline words and edges.
- **Don't:** Don't add photographs behind the headline; the glow shapes are the only background detail.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
