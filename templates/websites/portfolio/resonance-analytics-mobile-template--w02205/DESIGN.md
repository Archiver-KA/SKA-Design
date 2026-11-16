# Design system — Resonance Analytics Mobile Template

`SN-W02205` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained, mobile-first dark screen where a classical serif (Cinzel) sits in warm cream (#ede7d2) on a near-black indigo ground (#0a0a0f). The onboarding is one centred column with a thin vertical line illustration, a row of pager dots and a dark violet button, so the mood is quiet and a little mysterious. The signature is the cream serif headline on the dark field, paired with that single fine line.

**Mood:** quiet, mysterious, refined, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#12121a` | Cards, panels, raised areas |
| Text | `#ede7d2` | Headings and primary copy |
| Muted text | `#d4c9a6` | Secondary copy, captions |
| Accent | `#1e1b2e` | Primary action and highlights |
| Second accent | `#b8a4ff` | Supporting highlights |

Palette by frequency of use: `#ede7d2` · `#b8a4ff` · `#12121a` · `#7b5cff` · `#d4c9a6` · `#1e1b2e` · `#0a0a0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · h2 20px · body 10px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="pill-btn mt-6 w-full rounded-full border border-[#B8A4FF]/30 bg-[#7B5CFF]/15 px-8 py-3 text-sm font-medium tracking-wide text-[#EDE7D2]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Footer (`footer`)
4. Navigation bar (`navbar`)
5. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #12121a;
  --color-text: #ede7d2;
  --color-muted: #d4c9a6;
  --color-accent: #1e1b2e;
  --color-accent-2: #b8a4ff;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#12121a',
    ink: '#ede7d2',
    muted: '#d4c9a6',
    accent: '#1e1b2e',
    accent2: '#b8a4ff',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set headings in Cinzel in cream (#ede7d2) on the near-black ground
- **Do:** Keep the primary button dark (#1e1b2e) with cream text
- **Do:** Use the thin line illustration and the dot pager as the only decoration
- **Don't:** Don't fill buttons with bright violet; the violet belongs to the background glow
- **Don't:** Don't set long body copy in Cinzel
- **Don't:** Don't lay out wide desktop grids; this is a phone-width template

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
