# Design system — Hair Salon Landing Page Template

`SN-W02754` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

Two-tone hero: a charcoal header bar sits above a pale grey section where a large bold white sans headline is centred, and the photograph fades to black at its base. White type on the pale field is low in contrast, so the layout depends on the dark header and the dark fade to anchor it. The design is stark and minimal, with no accent colour.

**Mood:** stark, minimal, tonal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#262626` · `#0a0a0a` · `#171717` · `#f8fafc` · `#050505` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#555555',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a charcoal header bar (#262626) above the hero
- **Do:** Set the headline in large bold sans, white and centred
- **Do:** Fade the hero photograph to black at the base so the section ends in a dark band
- **Don't:** Don't set the white headline on the pale field without the dark fade behind it
- **Don't:** Don't add an accent colour; the page is grey and black
- **Don't:** Don't treat the page as dark throughout; the hero is pale grey below a dark header

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
