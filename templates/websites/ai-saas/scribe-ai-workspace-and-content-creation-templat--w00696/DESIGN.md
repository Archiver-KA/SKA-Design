# Design system — Scribe AI Workspace & Content Creation Template

`SN-W00696` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, editorial sign-in page on a warm cream ground, with a serif wordmark and serif headings in near-black. The brand's 'AI' is the only red (#a12138), and the sign-in form is a plain stack of underlined fields with one solid black button. A soft gradient panel fills the left side, which keeps the page calm and literary.

**Mood:** quiet, editorial, warm, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f2ee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#090909` | Headings and primary copy |
| Border | `#efeae4` | Hairlines, dividers, outlines |
| Accent | `#a12138` | Primary action and highlights |
| Second accent | `#4eb09b` | Supporting highlights |

Palette by frequency of use: `#090909` · `#ffffff` · `#efeae4` · `#a12138` · `#f6f2ee` · `#4eb09b` · `#d1cbc4` · `#a0aec0` · `#1a1a1a` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lato
- **Body:** Lato
- **Loaded families:** Lato, Lustria
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgba(0,0,0,0.04)]`, `shadow-[0_8px_30px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#090909] text-white rounded-full py-3.5 text-sm font-medium hover:bg-[#090909]/80 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. FAQ (`faq`)
6. Bento grid (`bento-grid`)
7. Case studies (`case-studies`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f2ee;
  --color-surface: #ffffff;
  --color-text: #090909;
  --color-border: #efeae4;
  --color-accent: #a12138;
  --color-accent-2: #4eb09b;
  --font-display: "Lato", sans-serif;
  --font-body: "Lato", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f2ee',
    surface: '#ffffff',
    ink: '#090909',
    line: '#efeae4',
    accent: '#a12138',
    accent2: '#4eb09b',
  },
  fontFamily: { display: ['Lato'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the wordmark and headings in a serif in near-black (#090909), with the 'AI' in red (#a12138)
- **Do:** Use underlined fields and one solid black button for sign-in, with a text link below
- **Do:** Keep the ground warm cream (#f6f2ee) with a soft gradient panel on the left
- **Don't:** Don't set headings in a sans; they are a serif
- **Don't:** Don't use red for buttons; it marks the brand word only
- **Don't:** Don't leave the left image panel without its artwork

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
