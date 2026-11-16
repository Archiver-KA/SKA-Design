# Design system — Automotive Services Landing Page Template

`SN-W03832` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A near-black page with a stacked uppercase headline in which the last line is set in red (#e30613), the only colour in the hero. A solid red button and an outline button sit beside a short grey paragraph, and the navigation uses a red contact button to match. The look is industrial and direct, with type alone filling the first view.

**Mood:** industrial, direct, bold, workshop

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e30613` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e30613` · `#d1d5db` · `#171717` · `#9ca3af` · `#6b7280` · `#050505` · `#b91c1c` · `#0a0a0a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hover:bg-red-700 transition-all duration-300 uppercase text-sm font-medium text-white tracking-wide bg-[#E30613] py-2 px-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e30613;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e30613',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline line in red (#e30613) in uppercase.
- **Do:** Use the red for primary buttons and the contact button only.
- **Do:** Keep the hero on black with light grey body copy.
- **Don't:** Don't use red for more than one headline line per section.
- **Don't:** Don't place imagery behind the headline; the first view is type only.
- **Don't:** Don't set display headlines in lowercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
