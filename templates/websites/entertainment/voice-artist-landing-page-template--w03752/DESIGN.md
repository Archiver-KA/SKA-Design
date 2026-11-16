# Design system — Voice Artist Landing Page Template

`SN-W03752` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black stage [#030303] with a centred headline in tight, bold sans-serif that fades from white to pale pink. A glowing red waveform above it is the main light source, and the same pink-red [#ff4d6d] carries into a small floating call-to-action. The page is dramatic and intimate, with a thin, minimal top bar.

**Mood:** dramatic, dark, glowing, intimate, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4d6d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#8b0000` · `#030303` · `#a3a3a3` · `#ff4d6d` · `#737373` · `#d4d4d4` · `#000000` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 20px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_15px_#8b0000]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(139,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium px-6 py-2.5 rounded-full border border-white/10 hover:border-[#8b0000]/50 hover:bg-[#8b0000]/10 transition-all duration-500 text-white uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Video / media (`video-media`)
5. Services (`services`)
6. Timeline (`timeline`)
7. Testimonials (`testimonials`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #030303;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ff4d6d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#030303',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ff4d6d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight bold sans-serif with a white-to-pink gradient
- **Do:** Use the pink-red (#ff4d6d) for the audio graphic and one call to action
- **Do:** Keep the top bar minimal, with small uppercase links
- **Don't:** Don't apply the pink gradient to body copy
- **Don't:** Don't brighten the background beyond near-black
- **Don't:** Don't add extra accent colours to the waveform

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
