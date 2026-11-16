# Design system — Design Studio Landing Page Template

`SN-W01515` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a single neon lime accent (#bfff00) used on the second headline line, the primary button and the section label. Headlines are uppercase and very large, with a white first line and a lime second line. Small labels are letter-spaced, and the grey body copy is set in Inter, so the page reads as a technical studio.

**Mood:** bold, high-contrast, technical, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#bfff00` | Primary action and highlights |

Palette by frequency of use: `#bfff00` · `#ffffff` · `#888888` · `#1a1a1a` · `#333333` · `#050505` · `#000000` · `#0a0a0a` · `#111111` · `#020202`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 24px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 bg-[#BFFF00] text-black px-8 py-4 font-mono-custom text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #1a1a1a;
  --color-accent: #bfff00;
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
    surface: '#111111',
    ink: '#ffffff',
    muted: '#888888',
    line: '#1a1a1a',
    accent: '#bfff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#bfff00) for one headline line, the primary button and the section label only
- **Do:** Set headlines in uppercase with the second line in lime
- **Do:** Keep backgrounds at #050505 and borders at #1a1a1a
- **Don't:** Don't use lime for body text or large filled areas
- **Don't:** Don't add gradients; the page uses flat black and lime only
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
