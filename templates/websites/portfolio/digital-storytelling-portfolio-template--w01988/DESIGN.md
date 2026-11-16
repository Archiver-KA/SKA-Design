# Design system — Digital Storytelling Portfolio Template

`SN-W01988` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Bold, type-led statement: a charcoal ground (#171717) with a very large, tightly leaded white sans headline across four lines, and the phrase motion-led dimmed to grey within it. Body copy sits below in light grey at a readable measure, followed by a small location line. There is no colour; the contrast between the heavy headline and the quiet grey paragraphs carries the design.

**Mood:** confident, typographic, achromatic, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#737373` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#525252` · `#262626` · `#737373` · `#171717` · `#d4d4d4` · `#050505` · `#404040` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:pr-9">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Case studies (`case-studies`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #737373;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#737373',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy, tightly leaded white sans across four lines
- **Do:** Dim one phrase in the headline to grey (#737373) to mark emphasis
- **Do:** Keep body copy in light grey at a short measure
- **Don't:** Don't add a green accent.
- **Don't:** Don't set the headline in light weights; the heaviness is the look
- **Don't:** Don't move to a light background; the ground is charcoal.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
