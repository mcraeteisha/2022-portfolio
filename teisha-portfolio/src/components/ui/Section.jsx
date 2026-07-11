import Styled from "styled-components";

const TONES = {
  paper: "var(--color-paper)",
  alt: "var(--color-paper-alt)",
  aubergine: "var(--color-aubergine)",
};

const Section = Styled.section`
  padding: var(--space-16) 0;
  background: ${({ $tone }) => TONES[$tone] || TONES.paper};
  color: ${({ $tone }) => ($tone === "aubergine" ? "var(--color-breeze-soft)" : "inherit")};

  ${({ $tone }) =>
    $tone === "aubergine" &&
    `
    h1, h2, h3, h4 { color: var(--color-white); }
    p { color: var(--color-breeze-soft); }
  `}

  @media (max-width: 640px) {
    padding: var(--space-10) 0;
  }
`;

export default Section;
