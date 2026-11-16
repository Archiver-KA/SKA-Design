# Design system — JustStartAI 

`SN-W00477` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft, pastel AI-community page: a blue-to-peach gradient fills the hero, with a glass navigation pill and a dark navy headline on top. The word Trades is set in italic to give the headline its warmth. Hero buttons are white glass pills with small icons, and the copy is short and friendly. The stance is approachable and optimistic rather than corporate.

**Mood:** approachable, pastel, optimistic, warm, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e79f84` | Primary action and highlights |
| Second accent | `#a5c9f2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#475569` · `#64748b` · `#334155` · `#e79f84` · `#a5c9f2` · `#1e293b` · `#f1f5f9` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1680px]`, `max-w-2xl`
- **Section padding:** `py-28`, `py-20`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-5 py-3 glass-nav text-slate-800 text-lg font-medium rounded-full hover:bg-white/80 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Team (`team`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)
7. Services (`services`)
8. Feature grid (`features`)
9. Footer (`footer`)
10. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e79f84;
  --color-accent-2: #a5c9f2;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e79f84',
    accent2: '#a5c9f2',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero on the soft gradient from blue to peach
- **Do:** Use white glass pills with small icons for the hero actions
- **Do:** Set the key word of the headline in italic
- **Don't:** Don't use a flat white ground behind the hero
- **Don't:** Don't set the headline in Geist sans; the headline is a serif
- **Don't:** Don't add sharp-cornered boxes; use rounded pills and cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
