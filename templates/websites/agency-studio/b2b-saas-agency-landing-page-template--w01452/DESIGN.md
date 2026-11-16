# Design system — B2B SaaS Agency Landing Page Template

`SN-W01452` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#020204]) with a sky-blue ([#38bdf8]) highlight on one phrase in a large white headline. A faint radial glow sits behind the hero, and the primary button is a white pill with dark text. The headline is tight-tracked and set over three centred lines, and the blue appears only on that phrase.

**Mood:** technical, dark, calm, precise, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#0a0b10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a0b10` · `#020204` · `#38bdf8` · `#333333` · `#444444` · `#0f1016` · `#050508` · `#000000` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow`, `shadow-2xl`, `shadow-white/5`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-brand-dark px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-medium hover:bg-brand-primary hover:text-brand-dark transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Video / media (`video-media`)
6. Call to action (`cta`)
7. Marquee (`marquee`)
8. Stats band (`stats`)
9. Bento grid (`bento-grid`)
10. Process / steps (`how-it-works`)
11. Testimonials (`testimonials`)
12. Feature grid (`features`)
13. FAQ (`faq`)
14. Booking form (`booking`)
15. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #0a0b10;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #a855f7;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#0a0b10',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use sky blue (#38bdf8) for one highlighted phrase in the headline
- **Do:** Keep the hero on #020204 with a faint radial glow
- **Do:** Set the primary call-to-action as a white pill with dark text
- **Don't:** Don't use the blue for body text
- **Don't:** Don't add a second highlight colour to the headline
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
