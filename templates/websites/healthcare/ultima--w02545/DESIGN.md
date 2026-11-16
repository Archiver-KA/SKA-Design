# Design system — ULTIMA

`SN-W02545` · healthcare · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark, high-impact retreat page: a warm charcoal ground with white display type, where the highlighted headline word and the primary button are a saturated amber (#eca72c). Amber is the single warm signal against the dark ground, and secondary actions sit as dark outlines. The stance is cinematic and aspirational, close to an event poster, with the headline set very large.

**Mood:** aspirational, cinematic, high-impact, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eca72c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#eca72c` · `#000000` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#050505` · `#0a0a0a` · `#1f2937` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_#ECA72C]`, `shadow-none`, `shadow-[0_0_20px_rgba(236,167,44,0.3)]`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-12`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full bg-black text-white font-heading font-semibold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-[#ECA72C] hover:text-black transition-all flex items-center justify-center gap-2 group mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Schedule (`schedule-agenda`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #eca72c;
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
    ink: '#000000',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#eca72c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#eca72c) for the highlighted headline word and the primary button only
- **Do:** Set the headline very large in a heavy white sans
- **Do:** Keep secondary actions as dark outlined buttons
- **Don't:** Don't use amber for body copy; body text is light grey
- **Don't:** Don't brighten the ground; the page is dark and warm-charcoal
- **Don't:** Don't add gradient fills to the amber button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
