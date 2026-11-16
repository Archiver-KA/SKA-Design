# Design system — High-Velocity Engineering Agency Landing Page Template

`SN-W01597` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark engineering page on near-black (#0a0a0a) where cobalt (#0047ff) is the single action colour: the primary button glows blue and the navigation CTA is solid cobalt. The headline is a heavy uppercase sans in white, with the second word faded to grey, and a short monospaced command line under the CTA signals a developer audience. The layout is blunt and direct, with the cobalt doing the emphasis work alone.

**Mood:** blunt, technical, high-contrast, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#0047ff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0047ff` · `#ffffff` · `#262626` · `#171717` · `#737373` · `#404040` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Archivo, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_30px_-10px_#0047FF]`, `shadow-[0_0_15px_#0047FF]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0047FF] border border-[#0047FF] hover:bg-transparent hover:text-[#0047FF] transition-all rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Code / terminal (`code-terminal`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #0047ff;
  --color-accent-2: #ef4444;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#262626',
    accent: '#0047ff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cobalt (#0047ff) for the primary button and the navigation CTA only
- **Do:** Set hero headlines in heavy uppercase sans, two short lines, white and grey
- **Do:** Put one monospaced command line under the primary CTA as a signature detail
- **Don't:** Don't use cobalt for large backgrounds; the page stays near-black
- **Don't:** Don't set long paragraphs in monospace
- **Don't:** Don't add a second bright accent next to the cobalt button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
