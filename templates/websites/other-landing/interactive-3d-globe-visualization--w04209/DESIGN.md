# Design system — Interactive 3D Globe Visualization

`SN-W04209` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black ground (#09090b) with a globe drawn as short white line strokes that vary in length, forming a shaded sphere. A dark zinc panel (#23232a) on the right holds the options, with light grey labels (#a3a3a3). The effect comes from the line field and its gentle breathing motion rather than from colour, so the whole piece stays monochrome.

**Mood:** monochrome, minimal, dark, kinetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#23232a` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Border | `#232329` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a3a3a3` · `#23232a` · `#18181b` · `#232329` · `#000000` · `#09090b` · `#ffffff` · `#15151a` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** semibold

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[210px]`
- **Common gaps:** `gap-1`, `gap-4`

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #23232a;
  --color-text: #a3a3a3;
  --color-border: #232329;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#23232a',
    ink: '#a3a3a3',
    line: '#232329',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Draw the globe with short white strokes on the black ground
- **Do:** Keep the options panel on zinc tones with light grey labels
- **Do:** Let motion, not colour, carry the globe's animation
- **Don't:** Don't add colour to the strokes
- **Don't:** Don't use a light background
- **Don't:** Don't place text over the globe

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
