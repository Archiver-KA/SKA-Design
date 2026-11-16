# Design system — Medical Spa Landing Page Template

`SN-W02466` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A muted grey hero with large white serif headlines, and the phrase Natural Beauty set in pale sage italic. Sage pill buttons and a dark charcoal top bar are the only colour, and the grey ground keeps the page restrained. The sage carries both the highlighted word and the calls to action, which gives the page a calm, spa-like tone.

**Mood:** restrained, spa-like, soft, muted, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a5c0bb` | Page ground |
| Surface | `#8daea8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#a5c0bb` | Hairlines, dividers, outlines |
| Accent | `#8daea8` | Primary action and highlights |

Palette by frequency of use: `#a5c0bb` · `#27252a` · `#ffffff` · `#60381e` · `#f2e9e0` · `#fcfbf9` · `#8daea8` · `#030712` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-block bg-[#f2e9e0] text-[#27252a] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a5c0bb] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Services (`services`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #a5c0bb;
  --color-surface: #8daea8;
  --color-text: #ffffff;
  --color-border: #a5c0bb;
  --color-accent: #8daea8;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a5c0bb',
    surface: '#8daea8',
    ink: '#ffffff',
    line: '#a5c0bb',
    accent: '#8daea8',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in DM Serif Display, in white, with one italic sage phrase
- **Do:** Use sage (#8daea8) for the primary button and the highlighted phrase
- **Do:** Keep the dark top bar for the booking strip and navigation only
- **Don't:** Don't put sage on large background fields
- **Don't:** Don't add a second accent colour beyond the sage
- **Don't:** Don't set the hero copy in dark charcoal on the grey ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
