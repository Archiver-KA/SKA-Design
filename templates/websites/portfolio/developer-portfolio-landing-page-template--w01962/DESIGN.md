# Design system — Developer Portfolio Landing Page Template

`SN-W01962` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Terminal-style interface: an almost-black ground (#050505) with a faint green radial glow, and labels written like shell output in uppercase monospace with brackets and underscores. The green is used as light and as text, never as a filled area. Headings are set in JetBrains Mono, and the navigation reads like a command prompt.

**Mood:** terminal, technical, austere, monospaced, hacker

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#737373` · `#404040` · `#a3a3a3` · `#4ade80` · `#0a0a0a` · `#050505` · `#d4d4d4` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 36px · h3 30px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(34,197,94,0.1)]`
- **Content width:** `max-w-[1920px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-1.5 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Case studies (`case-studies`)
7. Timeline (`timeline`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #404040;
  --color-border: #ffffff;
  --color-accent: #4ade80;
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
    background: '#050505',
    ink: '#ffffff',
    muted: '#404040',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set labels and navigation in uppercase monospace (JetBrains Mono) with bracketed items
- **Do:** Keep the green (#4ade80) for prompts, status and one accent per section
- **Do:** Use rectangular outlined buttons, as in the INITIALIZE_CONTACT button
- **Don't:** Don't fill large areas with the bright green (#22c55e); the look needs a dark ground
- **Don't:** Don't mix a sans display face into headings
- **Don't:** Don't use rounded pills for primary actions

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
