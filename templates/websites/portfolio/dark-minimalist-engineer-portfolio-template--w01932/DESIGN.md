# Design system — Dark Minimalist Engineer Portfolio Template

`SN-W01932` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a serif display headline in Cormorant Garamond, large and white on the first line and brass gold (#c6a75e) on the second. Small uppercase tracked labels and a thin gold rule frame the hero, and a gold line-art compass sits on the right. Gold on near-black gives the page a formal, archival tone.

**Mood:** formal, archival, luxurious, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0d` | Page ground |
| Surface | `#1a1a1f` | Cards, panels, raised areas |
| Text | `#e8e6e3` | Headings and primary copy |
| Muted text | `#8a9197` | Secondary copy, captions |
| Border | `#0b0b0d` | Hairlines, dividers, outlines |
| Accent | `#c6a75e` | Primary action and highlights |
| Second accent | `#7a1c1c` | Supporting highlights |

Palette by frequency of use: `#c6a75e` · `#8a9197` · `#0b0b0d` · `#bfc5c9` · `#1a1a1f` · `#e8e6e3` · `#7a1c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 16px
- **Weights in use:** normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(198,167,94,0.45)]`
- **Content width:** `max-w-[1280px]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-block border border-gold/30 text-gold font-mono text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-gold/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b0d;
  --color-surface: #1a1a1f;
  --color-text: #e8e6e3;
  --color-muted: #8a9197;
  --color-border: #0b0b0d;
  --color-accent: #c6a75e;
  --color-accent-2: #7a1c1c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0d',
    surface: '#1a1a1f',
    ink: '#e8e6e3',
    muted: '#8a9197',
    line: '#0b0b0d',
    accent: '#c6a75e',
    accent2: '#7a1c1c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond, with the second line in gold (#c6a75e)
- **Do:** Use small uppercase tracked labels for navigation and eyebrows
- **Do:** Keep line-art ornaments thin and gold on black
- **Don't:** Don't set body text in gold; body copy stays pale and neutral
- **Don't:** Don't set headlines in Inter; Inter is for small text only
- **Don't:** Don't add a light background to sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
