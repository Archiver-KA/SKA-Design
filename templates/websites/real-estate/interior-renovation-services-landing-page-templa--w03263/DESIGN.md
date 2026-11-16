# Design system — Interior Renovation Services Landing Page Template

`SN-W03263` · real-estate · light mode · Sinera Atlas theme `dwell` · language `pt`

## Direction

Clean and trustworthy, on an off-white ground with a sans headline in near-black and its second line in italic deep green. Deep green (#047857) is the one brand colour, used for the primary button, the small eyebrow tag and the headline emphasis. A pale panel with a stat card overlaps the hero's lower edge, signalling project scale without decoration.

**Mood:** trustworthy, clean, practical, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#57534e` · `#047857` · `#e7e5e4` · `#064e3b` · `#a8a29e` · `#059669` · `#065f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-emerald-900/5`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #047857;
  --color-accent-2: #ffedd5;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#047857',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the deep green (#047857) for the primary button and headline emphasis only.
- **Do:** Set the emphasised line of each headline in italic green.
- **Do:** Let the stat card overlap the lower edge of the hero panel.
- **Don't:** Don't use the green for long body text.
- **Don't:** Don't use the peach tone as a background behind copy.
- **Don't:** Don't fill whole sections with green; keep it to accents.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
