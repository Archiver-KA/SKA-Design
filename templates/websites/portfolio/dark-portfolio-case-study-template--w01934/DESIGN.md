# Design system — Dark Portfolio Case Study Template

`SN-W01934` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with film grain and a large sans display name in white, with the surname set in grey with red and blue chromatic offsets for a glitch effect. Navigation is small, uppercase and widely spaced, and a thin rule sits above a single line of meta text. The look is raw and editorial, suited to a personal brand built on type.

**Mood:** raw, editorial, glitch, dark, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#262626` · `#d4d4d4` · `#050505` · `#a3a3a3` · `#525252` · `#000000` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 12px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #262626;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#262626',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in Inter at display size, on two lines with the surname in grey
- **Do:** Use the red (#ef4444) and blue (#3b82f6) offset only on the surname as a glitch effect
- **Do:** Keep navigation small, uppercase and widely spaced
- **Don't:** Don't apply the offset to body copy; it hurts reading
- **Don't:** Don't use a light background; the page is near-black with grain
- **Don't:** Don't add a bright hero image; the type carries the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
