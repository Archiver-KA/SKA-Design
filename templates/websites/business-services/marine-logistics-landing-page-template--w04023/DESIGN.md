# Design system — Marine Logistics Landing Page Template

`SN-W04023` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, operational page with a near-black ground and a large white sans-serif headline set in two tones, the second line fading to grey. Small monospace labels with a green status dot and a radar-style graphic give it a control-room feel. Teal glows are kept to the graphic, so the text stays crisp and the page stays restrained.

**Mood:** technical, austere, operational, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#2dd4bf` · `#a1a1aa` · `#14b8a6` · `#09090b` · `#d4d4d8` · `#3f3f46` · `#52525b` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_0_12px_rgba(45,212,191,0.8)]`, `shadow-[0_0_8px_rgba(45,212,191,0.4)]`, `shadow-[0_0_32px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-[50ch]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group px-8 py-4 rounded-full text-sm font-medium tracking-tight active:scale-[0.98] transition-all shadow-[0_0_32px_rgba(255,255,255,0.1)] flex items-center gap-3 bg-white text-zinc-950 hover:bg-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Listings (`listings`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #3f3f46;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#3f3f46',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#2dd4bf',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in muted grey for contrast
- **Do:** Use monospace capitals for status labels and metadata
- **Do:** Keep the teal glow limited to the graphic
- **Don't:** Don't add light section backgrounds
- **Don't:** Don't use more than one accent colour in a view
- **Don't:** Don't set headlines in all capitals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
