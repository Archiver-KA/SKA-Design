# Design system — Investment Timeline Portfolio Manager Template

`SN-W02058` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark dashboard-style page on deep navy-black (#0b0f14) with a large Inter headline in which the word Timeline is set in bright blue (#2a7fff). The same blue fills the New Investment button, so the accent marks both the title and the main action. Tabs, a date ruler and timeline bars sit on a dark panel with thin grey dividers, giving an app-like, data-led surface.

**Mood:** technical, data-led, dark, precise, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f14` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2a7fff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#2a7fff` · `#d4d4d4` · `#e5e5e5` · `#1f78ff` · `#1766e8` · `#2a82ff` · `#1a6ef1` · `#0b0f14`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]`, `shadow-[0_6px_24px_-10px_rgba(0,0,0,0.6)]`, `shadow-[0_6px_20px_-6px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="period-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Stats band (`stats`)
4. Footer (`footer`)
5. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0f14;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2a7fff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f14',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#2a7fff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#2a7fff) for the highlighted headline word and the primary action only.
- **Do:** Keep panels on the dark navy ground with thin grey dividers.
- **Do:** Set headings in Inter, with the key word in the accent colour.
- **Don't:** Don't use blue for body text or large fills.
- **Don't:** Don't add a second accent colour to the timeline data.
- **Don't:** Don't introduce light backgrounds; the dashboard panels stay dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
