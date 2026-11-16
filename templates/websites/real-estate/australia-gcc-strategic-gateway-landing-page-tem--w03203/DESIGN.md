# Design system — Australia–GCC Strategic Gateway Landing Page Template

`SN-W03203` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, gold-accented strategy page with a near-black ground, a wide outlined headline in grey and a gold label above it. Thin network lines and soft glowing dots form a background texture, and a gold status tag sits in the bottom corner. Gold is the only colour, used for the brand and the labels.

**Mood:** dark, networked, premium, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f0f0f` · `#050505` · `#000000` · `#d4af37` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syne
- **Scale (largest breakpoint):** h3 20px · body 20px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-block border border-[var(--border)] px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. About (`about`)
6. Services (`services`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) for the brand, labels and status marks only
- **Do:** Set the large headline as an outline on the dark ground
- **Do:** Keep the network-line background subtle and behind the text
- **Don't:** Don't use gold for body text
- **Don't:** Don't fill the outlined headline
- **Don't:** Don't add light sections between the dark ones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
