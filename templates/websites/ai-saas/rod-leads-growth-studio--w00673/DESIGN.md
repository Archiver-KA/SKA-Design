# Design system — Rod Leads Growth Studio

`SN-W00673` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, centred local-services hero on a near-black ground with a faint radial glow behind the headline. The headline is a heavy sans, and its second line is set in a grey gradient, which keeps the type from competing with the blue primary button. A pill tag above the headline and a plain outlined secondary button complete a restrained, conversion-oriented layout.

**Mood:** dark, conversion-focused, restrained, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4a4aff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4a4aff` · `#a3a3a3` · `#737373` · `#0d0d0d` · `#d4d4d4` · `#0a0a0a` · `#262626` · `#525252` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_10px_#4A4AFF]`, `shadow-[0_0_40px_-10px_rgba(74,74,255,0.15)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="block w-full py-3 rounded-xl bg-[#4A4AFF] text-white text-center text-sm font-medium hover:bg-[#3838db] transition-colors shadow-lg shadow-[#4A4AFF]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #4a4aff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#4a4aff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#4a4aff) only for the primary button
- **Do:** Set the second headline line in a grey gradient and the first in white
- **Do:** Keep the glow soft and centred behind the headline
- **Don't:** Don't add a second accent colour to the buttons
- **Don't:** Don't use pure white for the grey gradient line; it loses the hierarchy
- **Don't:** Don't add more than one pill tag above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
