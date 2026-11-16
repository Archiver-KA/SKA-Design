# Design system — Smart Irrigation & Landscape Lighting Template

`SN-W00716` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-end dark landing page: a near-black ground (#0f0f0f) with a very large uppercase white sans headline across two lines, ending in a small green square. Green (#149116) fills the primary button and the closing punctuation, and a small gold eyebrow label (#deb40f) sets the category above the headline. Little else sits on the page, so the headline does most of the work.

**Mood:** premium, dark, bold, minimal, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#141414` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#149116` | Primary action and highlights |
| Second accent | `#deb40f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#149116` · `#0f0f0f` · `#a3a3a3` · `#525252` · `#737373` · `#deb40f` · `#171717` · `#e5e5e5` · `#141414`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(20,145,22,0.3)]`, `shadow-[0_0_30px_rgba(20,145,22,0.5)]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#149116] hover:bg-[#117a12] text-white text-xs font-medium px-5 py-2.5 rounded-full uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(20,145,22,0.3)] hover:shadow-[0_0_30px_rgba(20,145,22,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #141414;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #149116;
  --color-accent-2: #deb40f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#141414',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#149116',
    accent2: '#deb40f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase white sans at display size with tight tracking.
- **Do:** Use green (#149116) for the primary button and the closing punctuation only.
- **Do:** Put the category eyebrow in small gold (#deb40f) above the headline.
- **Don't:** Don't use gold for buttons; it is the eyebrow colour only.
- **Don't:** Don't leave the logo unloaded in the header.
- **Don't:** Don't add a light section to this dark layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
