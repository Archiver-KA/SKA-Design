# Design system — Arthur Creative Portfolio Website Template

`SN-W01812` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Expressive dark creative portfolio: a near-black ground (#0a0a0a) with a very large white display headline in a silver gradient fill, and a lilac accent (#c084fc) for small labels. A framed image sits in the centre, with floating skill bars at the lower left. It is bold and interactive, relying on gradients and a violet glow rather than flat colour.

**Mood:** expressive, dark, bold, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#831843` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#71717a` · `#a1a1aa` · `#c084fc` · `#000000` · `#3f3f46` · `#0a0a0a` · `#6b7280` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Manrope
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 12px · body 12px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(168,85,247,0.4)]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="px-6 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/10 transition-all hover:scale-105 interactable relative overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #831843;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#831843',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headlines in white with a silver gradient fill
- **Do:** Use lilac (#c084fc) for small labels and eyebrow text
- **Do:** Keep skill bars and stat cards floating over the dark ground
- **Don't:** Don't use the purple (#a855f7) as a full page background
- **Don't:** Don't add flat coloured blocks; the look comes from gradients and glow
- **Don't:** Don't remove the violet glow from the hero; it is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
