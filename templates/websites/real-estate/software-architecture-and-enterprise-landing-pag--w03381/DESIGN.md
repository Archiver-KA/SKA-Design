# Design system — Software Architecture & Enterprise Landing Page Template

`SN-W03381` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Monochrome, cinematic dark page on pure black with a floating glass-effect navbar. The headline is large and light in weight, with the second line fading into grey, which gives depth without any hue. Buttons are white pills, so the one bright element on screen is the primary action. Colour is absent from the first screen; the design is strictly black, white and grey.

**Mood:** monochrome, cinematic, austere, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#000000` · `#71717a` · `#f59e0b` · `#52525b` · `#fbbf24` · `#0a0a0a` · `#020202`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[32px]` (32px)
- **Shadows:** `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]`, `shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-3 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors rounded-full hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Bento grid (`bento-grid`)
6. Integrations (`integrations`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground at pure black (#000000) with white (#ffffff) type only.
- **Do:** Set headlines light and large, with the second line fading into grey (#a1a1aa).
- **Do:** Use white pill buttons for the primary action and float the navbar as a glass panel.
- **Don't:** Don't introduce a hue into the hero; the first screen stays monochrome.
- **Don't:** Don't fade the first line; only the second line takes the grey fade.
- **Don't:** Don't use filled coloured buttons for secondary actions.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
