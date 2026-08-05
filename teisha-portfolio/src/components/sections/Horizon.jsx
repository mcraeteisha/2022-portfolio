import { Fragment, useEffect, useRef, useState } from "react";
import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";
import bookCover from "../../images/thiscouldbeus.jpg";
import showCover from "../../images/apothecarydiaries.jpg";
import gameCover from "../../images/paralives.jpg";

const NOW = [
  { label: "Reading", value: "This Could Be Us by Kennedy Ryan", image: bookCover },
  { label: "Watching", value: "The Apothecary Diaries", image: showCover },
  { label: "Playing", value: "Paralives", image: gameCover },
];

function Horizon() {
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <HorizonSection id="next" tone="burgundy">
      <Container>
        <Eyebrow>Looking Ahead</Eyebrow>
        <Quote>
          I&rsquo;m especially interested in the space where engineering,
          product thinking, and design intersect. Technology isn&rsquo;t just
          about functionality — it&rsquo;s about creating experiences that
          feel intuitive, thoughtful, and genuinely useful.
        </Quote>
        <Lead>
          This portfolio is a reflection of that direction — a collection of
          what I&rsquo;ve learned, what I&rsquo;m building, and where
          I&rsquo;m intentionally growing.
        </Lead>

        <NowCard ref={cardRef}>
          <NowLabel>Right Now</NowLabel>
          <NowList>
            {NOW.map((item, index) => (
              <Fragment key={item.label}>
                <NowRow>
                  <Thumbnail
                    src={item.image}
                    alt={`Cover art for ${item.value}`}
                    $revealed={revealed}
                    $delay={index * 0.15}
                  />
                  <NowItemText>
                    <NowItemLabel>{item.label}</NowItemLabel>
                    <NowItemValue>{item.value}</NowItemValue>
                  </NowItemText>
                </NowRow>
                {index < NOW.length - 1 && <RowDivider>⁂</RowDivider>}
              </Fragment>
            ))}
          </NowList>
          <NowFooter>
            Lately, I’ve been spending my time at OrangeTheory three days a week (learning to enjoy running more than I ever expected), finding creative outlets through pottery and sewing, dreaming about visiting Japan again, and keeping Beyoncé on heavy rotation. My cat Zuko is always nearby, making sure none of it happens without his approval 🐈‍⬛
          </NowFooter>
        </NowCard>
      </Container>
    </HorizonSection>
  );
}

const HorizonSection = Styled(Section)``;

const Eyebrow = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-rose);
  margin-bottom: var(--space-5);

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const Quote = Styled.h2`
  font-style: italic;
  font-weight: 500;
  font-size: var(--text-3xl);
  max-width: 34ch;
  margin-bottom: var(--space-6);
  color: var(--color-bone);
`;

const Lead = Styled.p`
  max-width: 55ch;
  font-size: var(--text-md);
  color: rgba(245, 240, 231, 0.82);
  margin-bottom: var(--space-12);
`;

const NowCard = Styled.div`
  background: var(--color-bone);
  border-radius: var(--radius-lg);
  padding: var(--space-8) clamp(1.5rem, 5vw, var(--space-10));
  box-shadow: 0 32px 64px -24px rgba(0, 0, 0, 0.35);
`;

const NowLabel = Styled.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--color-border);
`;

const NowList = Styled.div``;

const NowRow = Styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);

  @media (max-width: 640px) {
    gap: var(--space-4);
  }
`;

const RowDivider = Styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-rose);
  margin: var(--space-6) 0;
`;

const Thumbnail = Styled.img`
  width: 180px;
  max-width: 32%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 24px -8px rgba(123, 30, 60, 0.35);
  filter: grayscale(1) brightness(1.1) contrast(0.9);
  transform: translateY(10px) scale(0.92);
  opacity: 0.3;
  transition: filter 1.1s ease, transform 1.1s ease, opacity 1.1s ease;
  transition-delay: ${({ $delay }) => $delay}s;

  ${({ $revealed }) =>
    $revealed &&
    `
    filter: grayscale(0) brightness(1) contrast(1);
    transform: translateY(0) scale(1);
    opacity: 1;
  `}
`;

const NowItemText = Styled.div``;

const NowItemLabel = Styled.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
  margin-bottom: var(--space-2);

  &::before {
    content: "* ";
    color: var(--color-rose);
  }
`;

const NowItemValue = Styled.div`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  line-height: 1.3;
  color: var(--color-burgundy);
`;

const NowFooter = Styled.div`
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  max-width: 60ch;
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
`;

export default Horizon;
