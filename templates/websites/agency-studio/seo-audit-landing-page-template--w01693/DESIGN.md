# Design system — SEO Audit Landing Page Template

`SN-W01693` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black green ground with a white headline and a second line in muted green (#34d399). A single rounded search field sits centred under the copy, with a bright green button. The look is technical and quiet, with small monospaced labels and a soft glow behind the form.

**Mood:** technical, quiet, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020402` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#94a3b8` · `#059669` · `#064e3b` · `#020402` · `#cbd5e1` · `#000000` · `#0a120e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_15px_rgba(52,211,153,0.3)]`, `shadow-[0_0_25px_rgba(52,211,153,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020402;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020402',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with the second line in green (#34d399).
- **Do:** Keep the hero on near-black (#020402) with a soft green glow.
- **Do:** Use one rounded input with an attached green button for the primary action.
- **Don't:** Don't use the emerald (#10b981) as a background; the ground is near-black.
- **Don't:** Don't set body copy in dark green; it reads poorly on the ground.
- **Don't:** Don't add more than one glow to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
