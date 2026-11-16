# Design system — Framewise AI Cinematography Landing Page Template

`SN-W00402` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black brown loading screen with a thin ring, a widely letterspaced wordmark and a peach underline with a small percentage counter. The palette is warm and cinematic, with the peach used for thin rules and small labels.

**Mood:** warm, cinematic, minimal, dark, provisional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#140a05` | Page ground |
| Surface | `#211107` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fdba74` · `#ef4444` · `#fb923c` · `#ffb366` · `#140a05` · `#fed7aa` · `#1c0e06` · `#211107` · `#1f1107`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Mono
- **Body:** DM Mono
- **Loaded families:** DM Mono, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 14px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.28rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_1rem_rgba(253,186,116,0.8)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="magnetic inline-flex min-w-40 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-6 py-3 text-xs font-medium text-white transition hover:border-orange-300/30 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. FAQ (`faq`)
9. Articles (`blog-articles`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #140a05;
  --color-surface: #211107;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fdba74;
  --font-display: "DM Mono", sans-serif;
  --font-body: "DM Mono", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#140a05',
    surface: '#211107',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#fdba74',
  },
  fontFamily: { display: ['DM Mono'], sans: ['DM Mono'] },
} }
```

## Do and don't

- **Do:** Use the warm near-black ground (#140a05) and the peach (#fdba74) for thin rules and small labels.
- **Do:** Set the wordmark in small, widely spaced uppercase in off-white.
- **Do:** Keep any loader minimal: a thin ring and a line, with no filled shapes.
- **Don't:** Don't use bright colours in the loader; the palette is warm and muted.
- **Don't:** Don't invent a hero layout beyond the loader.
- **Don't:** Don't add a bright background; the page stays dark brown.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
