# Design system — Dark Developer Portfolio Template

`SN-W01931` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An entry screen on near-black with a single white sentence centred in a large sans, and a small red monospaced prompt beneath it. Red is the only colour and is used sparingly, so the page reads as a hard-edged intro that opens onto the portfolio. JetBrains Mono sets the small labels, and Inter sets the statements.

**Mood:** stark, intro, monochrome, hard-edged, cryptic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cb1a1d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#9ca3af` · `#0f0f0f` · `#cb1a1d` · `#6b7280` · `#d1d5db` · `#090909`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 30px · h2 14px · h3 36px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-5xl`, `max-w-screen-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Awards / press (`awards-press`)
3. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #0f0f0f;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #cb1a1d;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#0f0f0f',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#cb1a1d',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre one white statement on a near-black field as the opening screen
- **Do:** Set small prompts and labels in JetBrains Mono, in red (#cb1a1d)
- **Do:** Keep the red to one prompt per screen
- **Don't:** Don't use red as a background; it is a text and marker colour
- **Don't:** Don't add imagery to the intro screen; the empty field is the design
- **Don't:** Don't set the statement in mono; mono is for labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
