# Design system — CoffeeOS Desktop Experience Template

`SN-W01871` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A Catppuccin Mocha desktop mockup on a dark navy-violet ground, with a terminal window, a clock widget and a calendar, all in one muted palette. Text is a soft lavender-blue (#cdd6f4), green (#a6e3a1) marks the shell prompt and peach (#fab387) picks out highlights. Monospace type runs through every panel, so the interface reads as a real terminal.

**Mood:** technical, calm, themed, cozy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#313244` | Page ground |
| Surface | `#181825` | Cards, panels, raised areas |
| Text | `#cdd6f4` | Headings and primary copy |
| Muted text | `#a6adc8` | Secondary copy, captions |
| Accent | `#a6e3a1` | Primary action and highlights |
| Second accent | `#fab387` | Supporting highlights |

Palette by frequency of use: `#313244` · `#a6e3a1` · `#cba6f7` · `#fab387` · `#6c7086` · `#cdd6f4` · `#a6adc8` · `#11111b` · `#45475a` · `#f38ba8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono, Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors hover:bg-[#313244] text-left">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Code / terminal (`code-terminal`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #313244;
  --color-surface: #181825;
  --color-text: #cdd6f4;
  --color-muted: #a6adc8;
  --color-accent: #a6e3a1;
  --color-accent-2: #fab387;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#313244',
    surface: '#181825',
    ink: '#cdd6f4',
    muted: '#a6adc8',
    accent: '#a6e3a1',
    accent2: '#fab387',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Use the Catppuccin Mocha tokens consistently for surfaces, text and accents
- **Do:** Set all interface text in JetBrains Mono
- **Do:** Keep green (#a6e3a1) for the prompt and status, and peach (#fab387) for highlights
- **Don't:** Don't mix in colours outside the Catppuccin set
- **Don't:** Don't use pure white text; the text is lavender-blue
- **Don't:** Don't use light surfaces; every panel sits on the dark tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
