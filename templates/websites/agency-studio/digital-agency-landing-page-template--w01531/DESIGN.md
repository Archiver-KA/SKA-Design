# Design system — Digital Agency Landing Page Template

`SN-W01531` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page where the headline uses a stroke-only middle line, PRODUCTS, set between solid white lines, and that outline is the signature. Small monospace labels and a thin left rule frame the copy, and status readouts at the bottom right add a technical note. White type does all the work, with no hue in the first screen.

**Mood:** technical, outlined, monochrome, severe

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#888888` · `#555555` · `#050505` · `#000000` · `#0a0a0a` · `#222222` · `#111111` · `#333333` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_50px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-[90rem]`, `max-w-[50ch]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black px-10 py-5 text-sm font-medium uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 btn-angular flex items-center gap-3 border border-white">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Services (`services`)
7. Case studies (`case-studies`)
8. Logo cloud (`logo-cloud`)
9. Feature grid (`features`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#888888',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline line as outlined text between solid white lines
- **Do:** Use monospace for labels, status readouts and the navigation
- **Do:** Keep every surface black (#0a0a0a) with white as the only foreground colour
- **Don't:** Don't build this on a white ground
- **Don't:** Don't add colour accents to the hero
- **Don't:** Don't use the outline effect on body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
