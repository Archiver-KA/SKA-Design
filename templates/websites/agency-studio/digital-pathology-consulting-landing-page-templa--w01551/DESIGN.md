# Design system — Digital Pathology Consulting Landing Page Template

`SN-W01551` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, faintly blue-lit hero with a white centred headline and a blue gradient on the second line, which names the subject. Both buttons are dark translucent pills with thin borders, and a grey-white lead line sits under the headline. Blue is the only accent, so the page feels clinical and calm.

**Mood:** clinical, dark, calm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fee2e2` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#60a5fa` · `#171717` · `#ef4444` · `#f87171` · `#fee2e2` · `#3b82f6` · `#06b6d4` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-2xl`, `shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="border-gradient relative inline-flex h-11 min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 px-6 text-sm font-medium tracking-tight text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Process / steps (`how-it-works`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #fee2e2;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #60a5fa;
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
    ink: '#ffffff',
    muted: '#fee2e2',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a blue gradient (#3b82f6 to #60a5fa)
- **Do:** Use dark translucent pills with thin borders for both buttons
- **Do:** Keep the background near-black with a soft blue light behind the hero
- **Don't:** Don't use red as an accent in the hero
- **Don't:** Don't add warm colours to the hero
- **Don't:** Don't set the gradient on body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
