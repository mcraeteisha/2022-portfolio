import { useEffect, useRef, useState } from "react";
import Styled, { keyframes } from "styled-components";
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
    <HorizonSection id="next" tone="aubergine">
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
          <NowGrid>
            {NOW.map((item, index) => (
              <NowItem key={item.label}>
                <NowItemText>
                  <NowItemLabel>{item.label}</NowItemLabel>
                  <NowItemValue>{item.value}</NowItemValue>
                </NowItemText>
                <Thumbnail
                  src={item.image}
                  alt={`Cover art for ${item.value}`}
                  $revealed={revealed}
                  $delay={index * 0.15}
                />
              </NowItem>
            ))}
          </NowGrid>
          <NowFooter>
            Lately, I’ve been spending my time at OrangeTheory three days a week (learning to enjoy running more than I ever expected), finding creative outlets through pottery and sewing, dreaming about visiting Japan again, and keeping Beyoncé on heavy rotation. My cat Zuko is always nearby, making sure none of it happens without his approval 🐈‍⬛
          </NowFooter>
        </NowCard>
      </Container>
    </HorizonSection>
  );
}

const drift = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-3%, 4%) scale(1.1); }
`;

const HorizonSection = Styled(Section)`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -10%;
    z-index: 0;
    background:
      radial-gradient(circle at 25% 25%, rgba(183, 209, 234, 0.16) 0%, transparent 45%),
      radial-gradient(circle at 75% 75%, rgba(183, 209, 234, 0.1) 0%, transparent 50%);
    animation: ${drift} 30s ease-in-out infinite alternate;
    pointer-events: none;
  }
`;

const Eyebrow = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-breeze);
  margin-bottom: var(--space-5);
`;

const Quote = Styled.h2`
  font-style: italic;
  font-weight: 500;
  font-size: var(--text-3xl);
  max-width: 34ch;
  margin-bottom: var(--space-6);
  color: var(--color-white);
`;

const Lead = Styled.p`
  max-width: 55ch;
  font-size: var(--text-md);
  color: var(--color-breeze-soft);
  margin-bottom: var(--space-12);
`;

const NowCard = Styled.div`
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  padding: var(--space-8) clamp(1.5rem, 5vw, var(--space-10));
  box-shadow: 0 32px 64px -24px rgba(0, 0, 0, 0.35);
`;

const NowLabel = Styled.div`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-breeze-deep);
  margin-bottom: var(--space-5);
`;

const NowGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  padding-bottom: var(--space-6);
  margin-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;

const NowItem = Styled.div``;

const Thumbnail = Styled.img`
  width: 128px;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 24px -8px rgba(48, 23, 40, 0.35);
  margin-top: var(--space-4);
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

const NowItemText = Styled.div`
  min-height: 4.5rem;

  @media (max-width: 640px) {
    min-height: 0;
  }
`;

const NowItemLabel = Styled.div`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
  margin-bottom: var(--space-1);
`;

const NowItemValue = Styled.div`
  font-family: var(--font-display);
  font-size: var(--text-md);
  line-height: 1.3;
  color: var(--color-aubergine);
`;

const NowFooter = Styled.div`
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  max-width: 60ch;
`;

export default Horizon;
