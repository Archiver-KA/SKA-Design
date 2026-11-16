# Design system — Adelaide SEO & Web Agency Landing Page Template

`SN-W01352` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, purple-tinted hero carries a very large uppercase Geist headline in which one word, SALIENCE, is filled with a purple-to-blue gradient. The gradient recurs in the blue call-to-action and the glowing sub-elements. The nav is a dark translucent bar with a violet button, and the layout is centred and symmetric. It reads as a technical, glowing product rather than a light agency site.

**Mood:** technical, glowing, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a855f7` · `#d4d4d4` · `#000000` · `#262626` · `#050505` · `#525252` · `#c084fc` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_12px_rgba(168,85,247,0.8)]`, `shadow-[0_0_20px_rgba(124,58,237,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Geist at uppercase, with one word filled by the purple-to-blue gradient.
- **Do:** Use purple (#a855f7) and blue (#3b82f6) only for gradient text and primary buttons.
- **Do:** Keep the nav in a dark translucent bar with a violet call-to-action button.
- **Don't:** Don't put this style on a white ground; the design depends on the dark base.
- **Don't:** Don't use the gradient on body text or long lines.
- **Don't:** Don't add more than two accent hues to one section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
