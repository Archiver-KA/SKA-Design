# Design system — Civil Construction Services Landing Page Template

`SN-W03210` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic civil-construction page built on a near-black ground (#0b0f14) with a deep navy haze behind a full-bleed photograph. The headline is heavy uppercase sans set very large, with a single italic serif line beneath it in warm off-white (#e8e4dc) that gives the page its signature contrast. The amber (#c07d2a) is kept for outlined calls to action and small labels, so it reads as a precise signal.

**Mood:** cinematic, industrial, restrained, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f14` | Page ground |
| Text | `#e8e4dc` | Headings and primary copy |
| Muted text | `#c8bfb0` | Secondary copy, captions |
| Border | `#e8e4dc` | Hairlines, dividers, outlines |
| Accent | `#c07d2a` | Primary action and highlights |
| Second accent | `#0d2340` | Supporting highlights |

Palette by frequency of use: `#e8e4dc` · `#c07d2a` · `#0b0f14` · `#0d2340` · `#c8bfb0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Barlow Condensed, Cormorant Garamond, IBM Plex Mono, Lora
- **Scale (largest breakpoint):** h1 112px · h2 96px · h3 20px · body 14px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[1.5rem]` (1.5rem), `rounded-full` (9999px), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#0D2340]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="btn-magnetic amber-hover bg-[#C07D2A] text-[#0B0F14] rounded-[3rem] px-6 py-2.5 font-mono text-xs font-semibold tracking-widest uppercase flex items-center gap-2 border border-[#C07D2A]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0f14;
  --color-text: #e8e4dc;
  --color-muted: #c8bfb0;
  --color-border: #e8e4dc;
  --color-accent: #c07d2a;
  --color-accent-2: #0d2340;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 1.5rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f14',
    ink: '#e8e4dc',
    muted: '#c8bfb0',
    line: '#e8e4dc',
    accent: '#c07d2a',
    accent2: '#0d2340',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans at very large sizes, with one italic serif line beneath.
- **Do:** Use the amber (#c07d2a) only for the outlined primary button and small labels.
- **Do:** Keep the hero over a dark photograph that fades to near-black (#0b0f14) at the bottom.
- **Don't:** Don't set body copy in the italic serif; it is for the single tagline line only.
- **Don't:** Don't fill buttons with bright white or amber; calls to action stay outlined.
- **Don't:** Don't introduce light section backgrounds; the first screen is entirely dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
