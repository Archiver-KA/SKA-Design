# Design system — Novi Social Automation Platform Template

`SN-W00604` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black agency page with a wide-tracked monospaced wordmark and uppercase nav, framed by a thin teal-bordered header. The hero is almost empty, with a faint teal glow filling the centre. The design rests on the nav and frame, and the cyan outline on the header button is the one accent.

**Mood:** technical, spare, monospaced, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e5ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#00e5ff` · `#000000` · `#050505` · `#0a0a0a` · `#080808` · `#02060b` · `#060606`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bricolage Grotesque
- **Body:** Bricolage Grotesque
- **Loaded families:** Bricolage Grotesque, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 12px
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,229,255,0.14)]`, `shadow-2xl`, `shadow-black/60`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-5 bg-[#00e5ff] px-7 py-3 font-mono text-xs text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Integrations (`integrations`)
6. Gallery / portfolio (`gallery-portfolio`)
7. About (`about`)
8. Logo cloud (`logo-cloud`)
9. Pricing (`pricing`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #00e5ff;
  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "Bricolage Grotesque", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#00e5ff',
  },
  fontFamily: { display: ['Bricolage Grotesque'], sans: ['Bricolage Grotesque'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in wide-tracked monospaced caps on the near-black ground (#050505).
- **Do:** Use the cyan (#00e5ff) as an outline on the header button and thin frame rules only.
- **Do:** Keep the header in a thin cyan-edged frame so the page reads as a technical console.
- **Don't:** Don't add hero copy or imagery over the faint glow.
- **Don't:** Don't fill the header button with cyan; the outline is the style.
- **Don't:** Don't set the nav in mixed case; it stays uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
