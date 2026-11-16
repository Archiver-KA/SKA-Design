# Design system — Mining Commercial Services Landing Page Template

`SN-W04026` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy page with a bold white sans-serif headline in two lines, where the closing word is set in a grey-blue gradient. Blue tags and the primary action carry the accent, and secondary buttons are outlined pills. Body copy in light slate keeps the tone confident and corporate, with a centred layout and very little decoration.

**Mood:** corporate, confident, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#94a3b8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#3b82f6` · `#020617` · `#cbd5e1` · `#0f172a` · `#64748b` · `#1e293b` · `#475569` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Space Grotesk, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-900/10`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 text-sm text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-geist font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #94a3b8;
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
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#94a3b8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans-serif with one key word in slate
- **Do:** Use the blue (#3b82f6) for tags and the primary button
- **Do:** Keep buttons as pills: solid for primary, outlined for secondary
- **Don't:** Don't set body copy in pure white; use light slate (#cbd5e1)
- **Don't:** Don't add light backgrounds to sections
- **Don't:** Don't use amber or other warm colours in this layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
