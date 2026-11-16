# Design system — AI Property Lab - Homepage

`SN-W03169` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark navy landing page with one teal signal colour (#0ef0c8) on the eyebrow label, a status figure and the active-agent state. Large display headlines sit inside a rounded glass panel under a floating pill nav, so the page reads like an automation console rather than a brochure.

**Mood:** dark, technical, futuristic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#051016` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ef0c8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0ef0c8` · `#404040` · `#0d3443` · `#051016` · `#22c55e` · `#f5f5f5` · `#1a1a1a` · `#000000` · `#081218`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit, Space Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-[420px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Benefits (`benefits`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #051016;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #0ef0c8;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#051016',
    surface: '#f5f5f5',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#0ef0c8',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#0ef0c8) only for the eyebrow, one key figure and live status
- **Do:** Keep headlines in Outfit on the dark navy (#051016)
- **Do:** Put content in rounded glass panels with backdrop blur
- **Don't:** Don't use teal as a button fill beyond the primary call to action
- **Don't:** Don't place light grey text panels on the dark hero
- **Don't:** Don't add decorative photos; the dashboard mock-up is the imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
