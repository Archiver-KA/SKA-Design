# Design system — Website Leasing Agency Landing Page Template

`SN-W01738` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A hard-edged black landing page where the headline is bold white sans with the second line in lime [#aacc00], and a lime block button carries the main call to action. A faint grid texture sits behind the hero, and small monospaced captions add a technical edge. The page is loud and direct, with lime used only for the key line, the button and a few markers.

**Mood:** hard-edged, loud, direct, technical, monochrome with lime

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#aacc00` | Primary action and highlights |
| Second accent | `#ff5f56` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#aacc00` · `#000000` · `#9ca3af` · `#6b7280` · `#050505` · `#4b5563` · `#ff5f56` · `#ffbd2e` · `#27c93f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 48px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_#ccff00]`, `shadow-[0_0_20px_rgba(204,255,0,0.3)]`, `shadow-[0_0_30px_rgba(255,255,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-brand transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Case studies (`case-studies`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #aacc00;
  --color-accent-2: #ff5f56;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#aacc00',
    accent2: '#ff5f56',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white sans with the second line in lime (#aacc00)
- **Do:** Use a solid lime button for the main call to action
- **Do:** Keep the grid texture faint behind the hero, never behind body text
- **Don't:** Don't use lime for body paragraphs
- **Don't:** Don't add soft rounded cards; the page uses hard edges
- **Don't:** Don't set the page on white or light grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
