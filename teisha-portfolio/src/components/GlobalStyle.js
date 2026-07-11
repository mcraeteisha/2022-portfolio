import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Brand */
  --color-aubergine: #301728;
  --color-breeze: #B7D1EA;

  /* Surfaces */
  --color-paper: #FBF9F7;
  --color-paper-alt: #EEF3F9;
  --color-white: #FFFFFF;

  /* Text */
  --color-ink: #241220;
  --color-ink-soft: #6B5A65;
  --color-border: rgba(48, 23, 40, 0.12);

  /* Accent variants */
  --color-breeze-soft: #E4EDF6;
  --color-breeze-deep: #3D6690;

  /* Metallic accent (buttons, borders, dividers) */
  --gradient-metallic: linear-gradient(135deg, #EFE9EC 0%, #CFC7D1 45%, var(--color-breeze) 100%);

  /* Typography */
  --font-display: "Playfair Display", "Iowan Old Style", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

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
  --text-hero: clamp(3rem, 6vw + 1rem, 6.5rem);

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

  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 28px;

  --container-max: 1120px;
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
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  color: var(--color-aubergine);
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
  color: var(--color-aubergine);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-breeze-deep);
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
`;

export default GlobalStyle;
