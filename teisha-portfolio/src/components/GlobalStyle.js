import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* ---- Reading palette. These FLIP between light and dark. ---- */

  /* Ground */
  --color-bone: #F5F0E7;
  --color-sand: #EDE5D8;

  /* Ink */
  --color-wine-black: #1E1016;
  --color-ink-soft: #5C4650;
  --color-ink-faint: #8B7680;

  /* Brand accents — text, links, marks */
  --color-burgundy: #7B1E3C;
  --color-rose: #E4607E;
  --color-green: #1E4B3A;

  --color-border: rgba(30, 16, 22, 0.12);
  --nav-bg: rgba(245, 240, 231, 0.82);

  /* ---- Panels. Always dark in BOTH themes, so anything sitting on top
     of them stays light. Never use --color-burgundy/green as a surface;
     as an accent it gets lighter in dark mode, which is backwards for a
     background. ---- */
  --panel-burgundy: #7B1E3C;
  --panel-burgundy-hover: #5A1730;
  --panel-green: #1E4B3A;
  --panel-ink: #1E1016;
  --on-panel: #F5F0E7;
  --on-panel-soft: rgba(245, 240, 231, 0.82);

  color-scheme: light;

  /* Typography */
  --font-display: "Newsreader", "Iowan Old Style", Georgia, serif;
  --font-body: "General Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.375rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.25rem;
  --text-3xl: 2.75rem;
  --text-4xl: clamp(2.5rem, 4vw + 1rem, 3.75rem);
  --text-5xl: clamp(3.25rem, 5vw + 1rem, 5rem);
  --text-hero: clamp(2.5rem, 4vw + 1rem, 4.5rem);

  /* Spacing (4px base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 6rem;
  --space-16: 8rem;
  --space-20: 10rem;

  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;

  --container-max: 1120px;
}

/* Dark mode. Follows the OS by default; [data-theme] on <html> overrides it
   in either direction, so a manual toggle can be added without touching this. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bone: #170D12;
    --color-sand: #22131A;

    --color-wine-black: #EFE7DC;
    --color-ink-soft: #B7A6AC;
    --color-ink-faint: #8A757D;

    --color-burgundy: #D4587E;
    --color-rose: #F08AA2;
    --color-green: #5FA98B;

    --color-border: rgba(239, 231, 220, 0.16);
    --nav-bg: rgba(23, 13, 18, 0.82);

    --panel-burgundy: #5E1630;
    --panel-burgundy-hover: #7B1E3C;
    --panel-green: #16382B;
    --panel-ink: #0C0709;

    color-scheme: dark;
  }
}

:root[data-theme="dark"] {
  --color-bone: #170D12;
  --color-sand: #22131A;

  --color-wine-black: #EFE7DC;
  --color-ink-soft: #B7A6AC;
  --color-ink-faint: #8A757D;

  --color-burgundy: #D4587E;
  --color-rose: #F08AA2;
  --color-green: #5FA98B;

  --color-border: rgba(239, 231, 220, 0.16);
  --nav-bg: rgba(23, 13, 18, 0.82);

  --panel-burgundy: #5E1630;
  --panel-burgundy-hover: #7B1E3C;
  --panel-green: #16382B;
  --panel-ink: #0C0709;

  color-scheme: dark;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  background: var(--color-bone);
  color: var(--color-wine-black);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1.1;
  color: var(--color-wine-black);
}

h1 { font-size: var(--text-hero); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-lg); font-weight: 500; }

p {
  font-family: var(--font-body);
  color: var(--color-ink-soft);
}

a {
  color: var(--color-burgundy);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-rose);
  }
}

button {
  font-family: var(--font-body);
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;
