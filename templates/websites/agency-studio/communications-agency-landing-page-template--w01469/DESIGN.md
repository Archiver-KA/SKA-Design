# Design system — Communications Agency Landing Page Template

`SN-W01469` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#0a0a0a]) over a dimmed grey photograph, with a very large uppercase sans headline in white. One word, EFFECTIVE, takes a pale mint ([#bfffb8]) that fades into grey. Body copy is small and light grey, and the layout is left-aligned with generous margins.

**Mood:** bold, manifesto, dark, uppercase, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bfffb8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#bfffb8` · `#050505` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_rgba(255,255,255,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="magnetic text-white/70 hover:text-white transition-all duration-500 flex items-center gap-3 font-extralight text-xs tracking-wide z-10 px-5 py-2.5 border border-white/5 hover:border-white/10 rounded-full bg-white/[0.02] backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #bfffb8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#050505',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#bfffb8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase sans in white at very large size
- **Do:** Use the mint (#bfffb8) for one word per headline, fading to grey
- **Do:** Keep the photograph dimmed under the headline
- **Don't:** Don't set body copy in uppercase
- **Don't:** Don't put the mint on light backgrounds
- **Don't:** Don't add a second highlight colour to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
