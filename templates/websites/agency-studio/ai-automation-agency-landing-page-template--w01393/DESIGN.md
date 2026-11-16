# Design system — AI Automation Agency Landing Page Template

`SN-W01393` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The hero is dark and near-black ([#020204]) with a white-to-teal gradient on the second headline line, which carries the page's one strong colour. The headline is a semibold sans set large and centred, with a grey paragraph and a solid light button beside an outlined dark button. Below the fold a dark product window shows a dashboard, so the page reads as software rather than a brochure.

**Mood:** dark, technical, gradient-led, centred, software

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#64748b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#94a3b8` · `#64748b` · `#34d399` · `#cbd5e1` · `#020204` · `#6ee7b7` · `#000000` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_20px_rgba(16,185,129,0.1)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-white bg-white/10 hover:bg-white/15">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #64748b;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #ef4444;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#64748b',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the white-to-teal gradient (#34d399 and #6ee7b7) and keep other text plain.
- **Do:** Keep the page ground at near-black (#020204) with a soft glow behind the headline.
- **Do:** Use the dark product window as the only illustration in the first screen.
- **Don't:** Don't use the light mode tokens for this look; the surfaces are dark.
- **Don't:** Don't set the headline in a serif; it is a sans.
- **Don't:** Don't use the teal for button fills; buttons stay white or outlined.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
