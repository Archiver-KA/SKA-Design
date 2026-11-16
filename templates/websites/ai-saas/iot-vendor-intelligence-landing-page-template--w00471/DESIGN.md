# Design system — IoT Vendor Intelligence Landing Page Template

`SN-W00471` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A blunt, type-led vendor-intelligence page on an off-white ground (#f8f8f7), with heavy uppercase near-black headlines and an outlined middle phrase. Vermilion (#ff3300) appears only on the small status line and the thin marker before body text. A black top strip and square corners give the page a stark, technical look.

**Mood:** blunt, type-led, technical, stark, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#5a5a5c` | Secondary copy, captions |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#ff3300` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#ff3300` · `#ffffff` · `#5a5a5c` · `#333333` · `#111111` · `#f8f8f7` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_50px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-[90rem]`, `max-w-[55ch]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Benefits (`benefits`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f7;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #5a5a5c;
  --color-border: #0a0a0a;
  --color-accent: #ff3300;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f7',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#5a5a5c',
    line: '#0a0a0a',
    accent: '#ff3300',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first and last headline lines in solid black and the middle phrase in outline
- **Do:** Use vermilion (#ff3300) only for the status line and the small marker
- **Do:** Keep the top announcement bar black with white uppercase text
- **Don't:** Don't use rounded corners or pill buttons
- **Don't:** Don't add gradients or glows to the off-white ground
- **Don't:** Don't add more than one vermilion element per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
