# Design system — DJ Event Services Landing Page Template

`SN-W03589` · events · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

The DJ services page sits on a deep navy ground (#020617) with pale slate headings and a muted grey-blue second line. A plum-pink primary button (#b8428d) is the only saturated colour in view, and a dark outline button sits beside it. Rounded panels and small pill tags frame the copy. The mood is calm and nocturnal, with the accent kept to the call to action.

**Mood:** nocturnal, elegant, restrained, polished, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b8428d` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b8428d` · `#94a3b8` · `#0f172a` · `#020617` · `#64748b` · `#1e293b` · `#cbd5e1` · `#334155` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_#b8428d]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 bg-[#b8428d] hover:bg-[#a0367a] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_-5px_#b8428d]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #b8428d;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#b8428d',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground deep navy (#020617) with pale slate (#cbd5e1) type
- **Do:** Use the plum (#b8428d) only on the primary button
- **Do:** Set the second headline line in muted slate (#94a3b8) for contrast
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't use pure white for headings; use the slate tones
- **Don't:** Don't replace the outline button with a second solid one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
