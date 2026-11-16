# Design system — Twyft Demo

`SN-W00781` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, retro-terminal webinar page. The headline is large Space Grotesk, with its second line in a warm orange-brown gradient (#bf6a45) as the single highlight, and terminal-style prompt lines in monospace sit beneath it. The ground is a deep navy-black, and the orange is kept to the main call to action.

**Mood:** retro, technical, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#bf6a45` | Primary action and highlights |
| Second accent | `#bf6a45` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e293b` · `#0f172a` · `#020617` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#334155` · `#475569` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(191,106,69,0.1)]`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-[0_0_15px_rgba(191,106,69,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full block text-center py-3 bg-slate-800 text-white font-mono text-xs uppercase hover:bg-slate-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #bf6a45;
  --color-accent-2: #bf6a45;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#334155',
    accent: '#bf6a45',
    accent2: '#bf6a45',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the orange-brown gradient (#bf6a45)
- **Do:** Use monospace for terminal-style prompt lines under the headline
- **Do:** Keep the orange for the primary button and one highlight per section
- **Don't:** Don't add gradient text beyond the headline
- **Don't:** Don't use bright blues or greens; the palette is navy and warm brown
- **Don't:** Don't set body copy in monospace

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
