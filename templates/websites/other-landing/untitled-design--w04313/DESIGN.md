# Design system — Untitled Design

`SN-W04313` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark automation landing page on black with a large white sans-serif headline whose second line is set in an italic serif in bright mint [#00ffc4]. A mint primary button and a small pill label sit above the headline, and a dark video frame follows the hero. The mint is used for the one emphasised phrase and the main call to action, so the page keeps a single sharp accent.

**Mood:** confident, sharp, dark, tech-forward, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ffc4` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ffc4` · `#000000` · `#171717` · `#d4d4d4` · `#a3a3a3` · `#059669` · `#050505` · `#047857` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Montserrat, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="group relative bg-[#047857] hover:bg-[#059669] text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(4,120,87,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-[#10b981]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #00ffc4;
  --color-accent-2: #f97316;
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
    surface: '#171717',
    ink: '#e5e5e5',
    line: '#ffffff',
    accent: '#00ffc4',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis phrase in the headline in mint (#00ffc4) italic
- **Do:** Use the mint primary button only for the main call to action
- **Do:** Keep headlines in bold sans-serif with the emphasis line in italic serif
- **Don't:** Don't use the mint for body text or small labels
- **Don't:** Don't add a second bright accent colour to the hero
- **Don't:** Don't place the headline on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
