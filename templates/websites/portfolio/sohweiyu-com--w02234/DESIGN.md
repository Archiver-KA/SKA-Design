# Design system — sohweiyu.com

`SN-W02234` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer hero with a large bold white sans headline, where the word accelerate is set in a violet-to-indigo gradient (#6366f1). Body copy is grey on near-black, and a white solid button sits beside an outlined one. Floating cards with small stat chips over the right side make the page feel like a product dashboard in miniature, and the gradient word is the signature.

**Mood:** dark, techy, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#737373` · `#a3a3a3` · `#6366f1` · `#0a0a0a` · `#10b981` · `#f5f5f5` · `#d4d4d4` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 16px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_0_4px_rgba(23,23,23,1)]`, `shadow-black/50`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 bg-neutral-100 text-neutral-950 px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-white transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Team (`team`)
5. Case studies (`case-studies`)
6. Stats band (`stats`)
7. Sign-in form (`auth-form`)
8. Feature grid (`features`)
9. Testimonials (`testimonials`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #262626;
  --color-border: #262626;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#262626',
    line: '#262626',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in a violet-indigo gradient (#6366f1)
- **Do:** Keep the page ground at near-black (#0a0a0a) with white headline text
- **Do:** Use floating cards with small stat chips for proof instead of photos
- **Don't:** Don't use the indigo as the page background; here it is a text and accent colour
- **Don't:** Don't gradient more than one word per headline
- **Don't:** Don't set body copy in a light weight on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
