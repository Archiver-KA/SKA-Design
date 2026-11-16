# Design system — AI Automation Consultancy Landing Page Template

`SN-W01394` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero on [#0b0c10] with a centred sans headline in white that fades to grey on the second line, giving a metallic, glossy finish rather than a colour accent. There is no visible brand hue on the first screen; the buttons are a pale grey solid and a transparent outline, so contrast comes from light on dark. The page is quiet and corporate, with generous space.

**Mood:** monochrome, metallic, quiet, corporate, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c10` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#64748b` · `#818cf8` · `#0b0c10` · `#94a3b8` · `#475569` · `#10b981` · `#334155` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_0_1px_rgba(0,0,0,1)]`, `shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-0.5`

**Primary button**

```html
<a class="hidden md:block px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_0_1px_rgba(0,0,0,1)] inset-shadow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0c10;
  --color-surface: #475569;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c10',
    surface: '#475569',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline in one sans in white, with the second line in a grey-to-white gradient.
- **Do:** Use the pale grey solid for the primary button and a transparent outline for the secondary.
- **Do:** Keep the ground at #0b0c10 and let the type carry the contrast.
- **Don't:** Don't add a saturated accent to the hero; the look is monochrome.
- **Don't:** Don't swap the pale solid button for a coloured one.
- **Don't:** Don't add bright glows or 3D scenes to the first screen; it has none.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
