# Design system — Creative Design Portfolio Template

`SN-W01882` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark gallery layout on a near-black ground with a faint violet glow behind the cards. Archivo Black sets the wordmark and the large uppercase title in white, while tall cards in a horizontal row do most of the visual work, with the active card at full brightness and the rest dimmed. Filter tabs are small pill buttons, and they are the only chrome in view.

**Mood:** gallery-like, dark, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#71717a` · `#ffffff` · `#18181b` · `#09090b` · `#3f3f46` · `#27272a` · `#d4d4d8` · `#a1a1aa` · `#f4f4f5` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo Black
- **Body:** Archivo Black
- **Loaded families:** Archivo Black, Inter, Playfair Display, JetBrains Mono, Geist, Roboto
- **Scale (largest breakpoint):** h1 14px · h2 60px · h3 24px · body 10px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_8px_rgba(34,197,94,0.5)]`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-[10px] bg-zinc-100 text-zinc-950 font-semibold rounded-full shadow-sm transition-all hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Dashboard preview (`dashboard-preview`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ffffff;
  --color-accent-2: #ef4444;
  --font-display: "Archivo Black", sans-serif;
  --font-body: "Archivo Black", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ffffff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Archivo Black'], sans: ['Archivo Black'] },
} }
```

## Do and don't

- **Do:** Set the wordmark and titles in Archivo Black, uppercase, in white.
- **Do:** Dim inactive gallery cards so the active card carries the focus.
- **Do:** Keep filter controls as small pill tabs across the top.
- **Don't:** Don't add green or red accents.
- **Don't:** Don't set body text in Archivo Black; it is for display use.
- **Don't:** Don't brighten the background behind the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
