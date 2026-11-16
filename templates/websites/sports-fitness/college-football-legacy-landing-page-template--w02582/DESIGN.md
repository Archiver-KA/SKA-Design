# Design system — College Football Legacy Landing Page Template

`SN-W02582` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cinematic, dark archive page on pure black with a huge white sans-serif headline and one gold line (#f1c500) that carries the accent. The gold phrase is the only colour in the hero, and a small italic grey quotation sits below in a serif. Thin pill badges and nav text in small caps give a formal, archival tone, with motion implied by the timeline layout.

**Mood:** cinematic, archival, formal, dark, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#8b7355` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f1c500` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f1c500` · `#a3a3a3` · `#171717` · `#8b7355` · `#737373` · `#262626` · `#404040` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Lora, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 128px · h3 48px · body 14px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_white]`, `shadow-[0_0_20px_#f1c500]`, `shadow-[0_0_100px_rgba(241,197,0,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-48`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 bg-[#f1c500] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #8b7355;
  --color-border: #ffffff;
  --color-accent: #f1c500;
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
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#8b7355',
    line: '#ffffff',
    accent: '#f1c500',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in the gold (#f1c500) and keep the rest white
- **Do:** Use the small italic serif quotation below the headline as a secondary voice
- **Do:** Keep the header and nav in small uppercase sans-serif labels
- **Don't:** Don't use gold for body text or large fills; it marks emphasis only
- **Don't:** Don't add light-coloured backgrounds; the page stays black
- **Don't:** Don't drop the pill badge above the headline; it anchors the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
