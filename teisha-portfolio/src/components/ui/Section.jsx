import { useEffect, useRef, useState } from "react";
import Styled from "styled-components";

const TONES = {
  paper: "var(--color-paper)",
  alt: "var(--color-paper-alt)",
  aubergine: "var(--color-aubergine)",
};

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
    <Wrapper id={id} $tone={tone} $revealed={revealed} className={className} ref={ref}>
      {children}
    </Wrapper>
  );
}

const Wrapper = Styled.section`
  padding: var(--space-16) 0;
  background: ${({ $tone }) => TONES[$tone] || TONES.paper};
  color: ${({ $tone }) => ($tone === "aubergine" ? "var(--color-breeze-soft)" : "inherit")};
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ $revealed }) =>
    $revealed &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

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
