# Design system — PRDCN Cinematic Studio Portfolio Template - Test

`SN-W02179` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark, minimal studio page: a near-black ground (#09090b) with a large off-white headline, the final word set in muted grey italic for emphasis. A small blue (#2563eb) uppercase eyebrow marks the section, and the nav is tiny uppercase text. Work is shown as tall media panels with minimal chrome, so the layout feels brutalist and quiet.

**Mood:** brutalist, minimal, dark, cinematic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#fafafa` · `#2563eb` · `#09090b` · `#18181b` · `#d4d4d8` · `#71717a` · `#f4f4f5` · `#a1a1aa` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="mt-4 w-full border border-zinc-700 bg-zinc-950 py-4 font-mono text-xs uppercase tracking-widest text-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-100 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #2563eb;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the headline in large type in off-white (#fafafa)
- **Do:** Set the last headline word in muted grey (#71717a) italic
- **Do:** Use blue (#2563eb) only for the small section eyebrow
- **Don't:** Don't use the mid grey (#a1a1aa) for headings
- **Don't:** Don't add rounded media frames; panels are square
- **Don't:** Don't use blue for the headline or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
