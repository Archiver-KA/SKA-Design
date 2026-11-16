# Design system — B2B Lead Generation & Sales Systems Template

`SN-W00243` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An editorial-leaning dark hero: a near-navy ground (#10172a) carries large white Archivo headlines, with the key phrase set in amber (#e8a33d). The amber doubles as the single primary action colour, while the cream nav bar (#f7f4ed) and a dashboard-style calendar card show the product rather than decoration. Structure comes from solid blocks of colour and a heavy grotesque, not from shadows or gradients.

**Mood:** editorial, confident, dark, grotesque-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#10172a` | Page ground |
| Surface | `#fffaf0` | Cards, panels, raised areas |
| Text | `#10172a` | Headings and primary copy |
| Muted text | `#475066` | Secondary copy, captions |
| Border | `#10172a` | Hairlines, dividers, outlines |
| Accent | `#e8a33d` | Primary action and highlights |
| Second accent | `#4fae82` | Supporting highlights |

Palette by frequency of use: `#e8a33d` · `#10172a` · `#475066` · `#f7f4ed` · `#7c8aa8` · `#d9694f` · `#ffffff` · `#fffaf0` · `#4fae82` · `#f4c77b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, Archivo Expanded, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 16px · body 16px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_1px_0_rgba(0,0,0,0.05)]`, `shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]`, `shadow-[inset_0_0_0_1.5px_#F4C77B]`
- **Content width:** `max-w-[1180px]`, `max-w-[720px]`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2.5`, `gap-2`, `gap-3.5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2.5 bg-[#E8A33D] text-[#10172A] font-['Archivo',sans-serif] font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-[1px] hover:bg-[#F4C77B] shadow-[0_1px_0_rgba(0,0,0,0.05)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#10172A] focus-visible:outline-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Schedule (`schedule-agenda`)
5. Services (`services`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #10172a;
  --color-surface: #fffaf0;
  --color-text: #10172a;
  --color-muted: #475066;
  --color-border: #10172a;
  --color-accent: #e8a33d;
  --color-accent-2: #4fae82;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#10172a',
    surface: '#fffaf0',
    ink: '#10172a',
    muted: '#475066',
    line: '#10172a',
    accent: '#e8a33d',
    accent2: '#4fae82',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #10172a and headlines in white Archivo at heavy weight
- **Do:** Use the amber (#e8a33d) only for the primary button and one highlighted phrase per section
- **Do:** Show product UI as flat solid-colour tiles on a dark card
- **Don't:** Don't add drop shadows; depth comes from solid colour blocks
- **Don't:** Don't use the amber for body text or large background fills
- **Don't:** Don't set the nav in dark type on the dark hero; keep it on the cream bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
