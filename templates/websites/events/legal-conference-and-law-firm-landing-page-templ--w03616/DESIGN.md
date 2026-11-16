# Design system — Legal Conference and Law Firm Landing Page Template

`SN-W03616` · events · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A dark, high-contrast landing page with a near-black ground and white display type set large and tightly tracked in Inter. Blue (#2563eb) is reserved for the primary call to action and a few highlights, while the rest of the colour stays neutral grey and white. Headlines are centred and dominant, and the supporting line is set small in muted grey beneath them.

**Mood:** authoritative, high-contrast, modern, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#050505` · `#60a5fa` · `#737373` · `#1e3a8a` · `#3b82f6` · `#2563eb` · `#171717` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(29,78,216,0.3)]`, `shadow-[0_0_30px_rgba(29,78,216,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-blue-700 text-white text-xs font-medium tracking-wide hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(29,78,216,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #2563eb;
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
    surface: '#050505',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at a large size with tight tracking
- **Do:** Use the blue (#2563eb) only for the primary button and key highlights
- **Do:** Keep body copy in muted grey (#a3a3a3) on the near-black ground
- **Don't:** Don't use a light background for content sections
- **Don't:** Don't add decorative imagery that competes with the headline
- **Don't:** Don't use more than one accent colour within a single section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
