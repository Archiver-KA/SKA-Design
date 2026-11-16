# Design system — Ubuntu Guesthouse Landing Page Template

`SN-W03153` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A soft, editorial guesthouse page on a sage-green ground (#cbd0b5), with large dark slate serif headlines and the second word set in italic. A small rotated serif note sits to the right as a playful aside, and a wide photograph strip sits lower on the page. The palette is two tones, sage and slate, with no accent, so the page feels calm and warm.

**Mood:** calm, editorial, warm, earthy, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#cbd0b5` | Page ground |
| Text | `#202a2d` | Headings and primary copy |
| Border | `#202a2d` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#202a2d` · `#cbd0b5` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Serif Display
- **Loaded families:** DM Serif Display, IBM Plex Sans, Reenie Beanie
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px), `rounded-[3rem]` (3rem)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-6`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #cbd0b5;
  --color-text: #202a2d;
  --color-border: #202a2d;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Serif Display", serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#cbd0b5',
    ink: '#202a2d',
    line: '#202a2d',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Serif Display'] },
} }
```

## Do and don't

- **Do:** Set headlines large in a serif in dark slate (#202a2d), with one italic word
- **Do:** Keep the ground in sage (#cbd0b5) and use the slate for text and rules
- **Do:** Use one rotated serif note as the only playful gesture
- **Don't:** Don't introduce a bright accent colour
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't put the photograph above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
