# Design system — AI Travel Landing Page Template

`SN-W03018` · travel · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A deep navy-black page (#020617) with a centred sans headline in white, where the final word fades into a grey gradient. Actions sit side by side as a white pill and a dark outlined pill, and the navigation is a rounded dark container. Colour is almost absent from the hero, so the page relies on type weight and the soft gradient rather than an accent hue.

**Mood:** futuristic, minimal, dark, tech-forward

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#0f172a` · `#34d399` · `#3b82f6` · `#10b981` · `#f59e0b` · `#a855f7` · `#e2e8f0` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,255,255,0.8)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-normal text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f1f5f9;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f1f5f9',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans at display size, with the final word in grey gradient
- **Do:** Use white pills for the primary action and dark outlined pills for secondary
- **Do:** Keep the navigation as a rounded dark pill container
- **Don't:** Don't add an accent hue to the hero; it is neutral.
- **Don't:** Don't add amber (#f59e0b); the hero is neutral.
- **Don't:** Don't set body copy in pure white; use a muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
