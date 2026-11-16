# Design system — Premium Audio & Sound Systems Landing Page Template

`SN-W02180` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

Dark luxury intro: a near-black screen (#0a0a0a) with a faint white waveform animation at the centre, a small white pill button in the top right and a tiny uppercase scroll cue. The design relies on monochrome black and white. Typography is DM Sans, and the restraint suits a premium audio brand.

**Mood:** premium, monochrome, restrained, dark, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#222222` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0a0a0a` · `#ffffff` · `#222222` · `#9ca3af` · `#6b7280` · `#333333` · `#d1d5db` · `#111111` · `#4b5563` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium transition-all hover:bg-gray-200 hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Team (`team`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
  --color-text: #0a0a0a;
  --color-muted: #6b7280;
  --color-border: #222222;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e7eb',
    ink: '#0a0a0a',
    muted: '#6b7280',
    line: '#222222',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#0a0a0a) with white type
- **Do:** Use the white pill button for the single primary action in the header
- **Do:** Animate thin vertical waveform lines as the signature motion
- **Don't:** Don't add colour; the palette is black, white and grey
- **Don't:** Don't put body copy over the waveform animation
- **Don't:** Don't use rounded corners beyond pills on buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
