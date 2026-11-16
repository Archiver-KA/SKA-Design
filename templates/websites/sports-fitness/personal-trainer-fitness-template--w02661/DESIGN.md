# Design system — Personal Trainer Fitness Template

`SN-W02661` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark navy trainer page on #050d1a with heavy uppercase white headlines in a wide sans-serif, where the final line is bright blue (#2979ff). A large faded watermark of the trainer's name sits behind the hero, and small monospace labels give a technical tone.

**Mood:** confident, direct, navy, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050d1a` | Page ground |
| Text | `#f2f2f2` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2979ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2979ff` · `#a8aaad` · `#050d1a` · `#f2f2f2` · `#1565c0` · `#0b3d91`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_40px_rgba(41,121,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-widest px-6 py-3 rounded-none transition-all duration-300 hover:border-electric/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Modal / overlay (`modal-overlay`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050d1a;
  --color-text: #f2f2f2;
  --color-border: #ffffff;
  --color-accent: #2979ff;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050d1a',
    ink: '#f2f2f2',
    line: '#ffffff',
    accent: '#2979ff',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set the last headline line in #2979ff and keep the rest white.
- **Do:** Use #050d1a as the page ground and #0b1628 for raised panels.
- **Do:** Set small eyebrow labels in monospace uppercase above each headline.
- **Don't:** Don't use blue for body text or long paragraphs.
- **Don't:** Don't use the lighter blues (#1565c0, #0b3d91) as text colour on navy.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
