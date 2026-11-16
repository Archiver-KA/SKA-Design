// Sinera Atlas — Tailwind preset. Works with the CDN build too:
//   <script src="https://cdn.tailwindcss.com"></script>
//   <script>tailwind.config = { presets: [sineraAtlas] }</script>
// Colours resolve to the CSS variables in atlas.css, so one markup wears any theme via data-theme.
const sineraAtlas = {
  theme: {
    extend: {
      colors: {
        ground: 'var(--sa-ground)', surface: 'var(--sa-surface)', ink: 'var(--sa-ink)', muted: 'var(--sa-muted)', line: 'var(--sa-line)',
        accent: { DEFAULT: 'var(--sa-accent)', on: 'var(--sa-on-accent)' },
        accent2: { DEFAULT: 'var(--sa-accent-2)', on: 'var(--sa-on-accent-2)' },
      },
      fontFamily: { display: 'var(--sa-font-display)', sans: 'var(--sa-font-body)' },
      borderRadius: { control: 'var(--sa-radius-control)', card: 'var(--sa-radius-card)' },
      spacing: { section: '96px', 'section-sm': '56px' },
    },
  },
};
if (typeof module !== 'undefined') module.exports = sineraAtlas;
