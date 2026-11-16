# Design system — Harbor Wellness Medical Clinic Template

`SN-W02385` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm, photographic clinic hero: a grey-toned stethoscope image fills the screen, with a wide-tracked uppercase white display title centred over it. The imagery carries most of the mood, and the nav sits in small tracked caps across the top. Type is light and airy, so the page reads as serene and understated rather than clinical.

**Mood:** serene, understated, photographic, airy, wide-tracked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#000000` · `#1b1b15` · `#374151` · `#0c0c09` · `#0f0f0b` · `#edeae3` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syncopate
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="w-full px-4 py-3 bg-[var(--c-dark)] text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-[var(--c-accent)] transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Booking form (`booking`)
5. Services (`services`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero title in a wide-tracked uppercase display face in white.
- **Do:** Keep the hero image in grey tones with a dark overlay behind the type.
- **Do:** Use small tracked caps for the nav and the eyebrow line.
- **Don't:** Don't set the hero title in black; it sits on a dark photograph.
- **Don't:** Don't use saturated colour on the hero imagery.
- **Don't:** Don't set the wide tracking on body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
