# Design system — BridgeChat Speech-to-Text Landing Page Template

`SN-W00254` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black, quiet dark hero: a warm charcoal ground (#141615) with a very large uppercase Space Grotesk headline in off-white, the last word fading into grey. Sage (#94b5a0) fills the primary button and is the only colour in the first screen, which keeps the page calm and privacy-led. Small monospaced caps in the nav and status line sit beside the headline, so the type and the one tint do the work.

**Mood:** calm, dark, privacy-led, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141615` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94b5a0` | Primary action and highlights |

Palette by frequency of use: `#94b5a0` · `#ffffff` · `#e6e4dd` · `#141615` · `#6b7280` · `#9ca3af` · `#4b5563` · `#000000` · `#181a19` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 20px
- **Weights in use:** bold, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_50px_rgba(148,181,160,0.1)]`, `shadow-[0_0_15px_rgba(230,228,221,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="border border-white/10 px-6 py-2 text-xs font-bold uppercase tracking-wider text-surface hover:bg-surface hover:text-black transition-all hover-trigger btn-magnetic rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Feature grid (`features`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #141615;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #94b5a0;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141615',
    ink: '#000000',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#94b5a0',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #141615 and headlines in uppercase Space Grotesk
- **Do:** Use the sage (#94b5a0) only for the primary button and the key highlight
- **Do:** Set nav labels and status text in small monospaced caps
- **Don't:** Don't use a bright or saturated colour; the sage is the only tint
- **Don't:** Don't set the headline in lowercase or mixed case; the uppercase is the voice
- **Don't:** Don't turn the outline secondary button into a second filled button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
