# Design system — Model & Influencer Portfolio Website Template

`SN-W02122` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark model portfolio on near-black (#0c0a09) with a rose-red (#e11d48) accent used for small uppercase labels and the portrait's gradient frame. Headlines are large and white, with thin slate outlines framing key words, which gives the page a technical, wireframe-like edge.

**Mood:** dark, bold, editorial, fashion, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#e11d48` | Supporting highlights |

Palette by frequency of use: `#1e293b` · `#e11d48` · `#f1f5f9` · `#000000` · `#64748b` · `#cbd5e1` · `#94a3b8` · `#f43f5e` · `#475569` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Cormorant Garamond, Geist Mono, &quot
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium transition-colors font-geist-mono text-black bg-slate-100 hover:bg-slate-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Stats band (`stats`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #000000;
  --color-text: #f5f5f4;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #e11d48;
  --color-accent-2: #e11d48;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#000000',
    ink: '#f5f5f4',
    muted: '#64748b',
    line: '#334155',
    accent: '#e11d48',
    accent2: '#e11d48',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use rose (#e11d48) for eyebrow labels and one highlight per section, not for body text.
- **Do:** Frame key headline words with thin slate (#334155) outlines to keep the wireframe look.
- **Do:** Keep portrait frames square-cornered, with the rose gradient behind the photo.
- **Don't:** Don't use the slate #1e293b as an accent; it works as a surface tone, not a highlight.
- **Don't:** Don't set body copy in rose; it loses legibility on the dark ground.
- **Don't:** Don't use light section backgrounds on the first screen; the page is dark there.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
