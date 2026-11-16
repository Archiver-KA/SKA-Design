# Design system — Real Estate Marketing Landing Page Template

`SN-W03365` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black marketing page where a very large, tightly leaded bold sans-serif headline is set flush right across four lines and dominates the screen. The brand's red-orange (#fc3b00) appears only in the wordmark and a status dot, and a faint warm glow sits in the top-right corner. Body copy is small and grey on the left, opposite the headline, above a thin rule.

**Mood:** bold, dark, confident, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fcfbf9` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#fc3b00` | Primary action and highlights |

Palette by frequency of use: `#fc3b00` · `#ffffff` · `#262626` · `#737373` · `#050505` · `#a3a3a3` · `#171717` · `#000000` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px)
- **Shadows:** `shadow-[0_20px_40px_-15px_rgba(252,59,0,0.3)]`, `shadow-2xl`, `shadow-[0_0_10px_#fc3b00]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-x-3`

**Primary button**

```html
<a class="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fc3b00] hover:text-white hover:border-[#fc3b00] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #fcfbf9;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #fc3b00;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#fcfbf9',
    muted: '#737373',
    line: '#262626',
    accent: '#fc3b00',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large, bold and right-aligned across four lines
- **Do:** Use red-orange (#fc3b00) only for the wordmark and the status dot
- **Do:** Keep body copy small and grey on the left, opposite the headline
- **Don't:** Don't use the red-orange for buttons or large fills
- **Don't:** Don't set headlines in light weights
- **Don't:** Don't add imagery behind the headline; the glow is the only background effect

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
