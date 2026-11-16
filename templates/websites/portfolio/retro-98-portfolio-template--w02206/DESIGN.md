# Design system — Retro '98 Portfolio Template

`SN-W02206` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A DOS-style boot screen in monospace: light grey text (#c0c0c0) on pure black, with yellow (#ffff00) reserved for the key prompts. The entry is a text-mode gate with a press-Enter line, so the Windows 98 idea is carried by the type and the boot-screen layout rather than by bevelled grey chrome. The recognisable move is the yellow key letters set inside a plain character grid.

**Mood:** retro, terminal, nostalgic, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#dedede` | Cards, panels, raised areas |
| Text | `#c0c0c0` | Headings and primary copy |
| Muted text | `#808080` | Secondary copy, captions |
| Accent | `#ffff00` | Primary action and highlights |
| Second accent | `#ffff00` | Supporting highlights |

Palette by frequency of use: `#000000` · `#c0c0c0` · `#ffffff` · `#808080` · `#1a00ff` · `#ffff00` · `#00ff00` · `#000080` · `#dedede` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Handjet, Inter, VT323

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-1.5`

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Sign-in form (`auth-form`)
3. Modal / overlay (`modal-overlay`)
4. Navigation bar (`navbar`)
5. Menu list (`menu-list`)
6. Hero (`hero`)
7. Awards / press (`awards-press`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #dedede;
  --color-text: #c0c0c0;
  --color-muted: #808080;
  --color-accent: #ffff00;
  --color-accent-2: #ffff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#dedede',
    ink: '#c0c0c0',
    muted: '#808080',
    accent: '#ffff00',
    accent2: '#ffff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set all screen text in the monospace face on black (#000000)
- **Do:** Mark keys and calls to action in yellow (#ffff00) only
- **Do:** Keep body text in light grey (#c0c0c0) and align lines to a character grid
- **Don't:** Don't use a proportional sans for text on the boot screen
- **Don't:** Don't fill large areas with yellow; it is for key labels only
- **Don't:** Don't add photos or gradients to the boot screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
