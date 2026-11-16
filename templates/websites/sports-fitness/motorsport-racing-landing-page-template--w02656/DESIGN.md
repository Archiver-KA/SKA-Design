# Design system — Motorsport Racing Landing Page Template

`SN-W02656` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black motorsport hero on a cool dark ground (#111318) with bold white sans-serif headlines in capitals. A red triangle and the word SPEED in red anchor the composition, so red is the signal colour. The small eyebrow label and the thin scroll cue stay quiet by comparison, and headlines are set in a bold sans-serif.

**Mood:** technical, dark, fast, stark, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111318` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111318` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-mono)
- **Body:** var(--font-mono)
- **Loaded families:** Geist Mono, Space Grotesk
- **Letter spacing:** `tracking-area`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-top`, `shadow-bot`

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** GSAP, Three.js, Lenis smooth scroll, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #111318;
  --color-text: #ffffff;
  --font-display: "var(--font-mono)", sans-serif;
  --font-body: "var(--font-mono)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111318',
    ink: '#ffffff',
  },
  fontFamily: { display: ['var(--font-mono)'], sans: ['var(--font-mono)'] },
} }
```

## Do and don't

- **Do:** Use #111318 as the page ground for the whole site.
- **Do:** Set the key word of each headline in red and keep the rest white.
- **Do:** Keep the eyebrow label small and above the headline.
- **Don't:** Don't use red for large areas or body text.
- **Don't:** Don't use a light background for sections.
- **Don't:** Don't set headlines in monospace; use the bold sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
