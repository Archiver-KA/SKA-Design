# Design system — Digital Echo Content Agency Template

`SN-W01540` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A near-black navy hero with a bold white sans-serif headline and two words in glowing sky blue, which is the one accent. A sky-blue primary button sits under the copy and a dark secondary sits beside it, with a blue glow behind the headline.

**Mood:** dark, glowing, bold, bright-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2fa0e5` | Primary action and highlights |

Palette by frequency of use: `#38b6ff` · `#ffffff` · `#18181b` · `#a1a1aa` · `#000000` · `#050505` · `#27272a` · `#09090b` · `#2fa0e5` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 96px · h3 36px · body 20px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-[0_0_60px_rgba(56,182,255,0.3)]`, `shadow-[0_0_60px_rgba(56,182,255,0.2)]`, `shadow-[0_0_60px_rgba(56,182,255,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#38B6FF] text-white font-medium text-lg hover:bg-[#2fa0e5] hover:shadow-[0_0_40px_rgba(56,182,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Articles (`blog-articles`)
8. Schedule (`schedule-agenda`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #2fa0e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#2fa0e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use sky blue (#2fa0e5) for the highlighted headline words and the primary button
- **Do:** Set the headline in bold white sans-serif, with the blue words in the same weight
- **Do:** Keep the blue glow behind the headline rather than on text
- **Don't:** Don't use sky blue (#38b6ff) as a page ground
- **Don't:** Don't set body copy in blue
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
