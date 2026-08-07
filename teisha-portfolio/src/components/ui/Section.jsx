import { useEffect, useRef, useState } from "react";
import Styled from "styled-components";

const TONES = {
  paper: "var(--color-bone)",
  alt: "var(--color-sand)",
  burgundy: "var(--panel-burgundy)",
  green: "var(--panel-green)",
  ink: "var(--panel-ink)",
};

const DARK_TONES = ["burgundy", "green", "ink"];

function Section({ id, tone, className, children }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper id={id} $tone={tone} className={className} ref={ref}>
      <Reveal $revealed={revealed}>{children}</Reveal>
    </Wrapper>
  );
}

/* The background lives here and is never animated — fading a section's
   background in over the body colour reads as a coloured pane being laid
   on top of the page. Only the contents animate; see Reveal below. */
const Wrapper = Styled.section`
  padding: var(--space-16) 0;
  background: ${({ $tone }) => TONES[$tone] || TONES.paper};
  color: ${({ $tone }) => (DARK_TONES.includes($tone) ? "var(--on-panel-soft)" : "inherit")};

  ${({ $tone }) =>
    DARK_TONES.includes($tone) &&
    `
    h1, h2, h3, h4 { color: var(--on-panel); }
  `}

  @media (max-width: 640px) {
    padding: var(--space-10) 0;
  }
`;

const Reveal = Styled.div`
  width: 100%;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $revealed }) =>
    $revealed &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export default Section;
