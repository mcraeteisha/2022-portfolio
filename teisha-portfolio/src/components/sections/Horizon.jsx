import { useCallback, useEffect, useRef, useState } from "react";
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

const ADVANCE_MS = 5000;

function Horizon() {
  const cardRef = useRef(null);
  const tabRefs = useRef([]);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed || paused || reduceMotion) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % NOW.length),
      ADVANCE_MS
    );
    return () => clearInterval(id);
  }, [revealed, paused, reduceMotion]);

  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;
      if (key !== "ArrowRight" && key !== "ArrowLeft") return;
      event.preventDefault();
      setActive((current) => {
        const next =
          key === "ArrowRight"
            ? (current + 1) % NOW.length
            : (current - 1 + NOW.length) % NOW.length;
        tabRefs.current[next]?.focus();
        return next;
      });
    },
    []
  );

  return (
    <HorizonSection id="next" tone="burgundy">
      <Container>
        <Eyebrow>Looking Ahead</Eyebrow>
        <Quote>
          I&rsquo;m especially interested in the space where engineering,
          product thinking, and design <em>intersect</em>.
        </Quote>
        <Lead>
          Technology isn&rsquo;t just about functionality. It&rsquo;s about
          creating experiences that feel intuitive, thoughtful, and genuinely
          useful. This portfolio is a reflection of that direction — a
          collection of what I&rsquo;ve learned, what I&rsquo;m building, and
          where I&rsquo;m intentionally growing.
        </Lead>

        <NowCard ref={cardRef}>
          <NowLabel>Right Now</NowLabel>

          <Shelf
            role="tablist"
            aria-label="What I&rsquo;m into right now"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {NOW.map((item, index) => {
              const wrapped = (index - active + NOW.length) % NOW.length;
              const offset =
                wrapped > NOW.length / 2 ? wrapped - NOW.length : wrapped;

              return (
                <Cover
                  key={item.label}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`now-tab-${index}`}
                  aria-controls="now-panel"
                  aria-selected={index === active}
                  aria-label={`${item.label}: ${item.value}`}
                  tabIndex={index === active ? 0 : -1}
                  onClick={() => setActive(index)}
                  $offset={offset}
                  $revealed={revealed}
                >
                  <img src={item.image} alt="" />
                </Cover>
              );
            })}
          </Shelf>

          <Detail
            id="now-panel"
            role="tabpanel"
            aria-labelledby={`now-tab-${active}`}
          >
            <DetailLabel>{NOW[active].label}</DetailLabel>
            <DetailValue>{NOW[active].value}</DetailValue>
          </Detail>

          <Asterism aria-hidden="true">⁂</Asterism>

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
  font-weight: 500;
  font-size: var(--text-3xl);
  max-width: 34ch;
  margin-bottom: var(--space-6);
  color: var(--on-panel);
`;

const Lead = Styled.p`
  max-width: 55ch;
  font-size: var(--text-md);
  color: var(--on-panel-soft);
  margin-bottom: var(--space-12);
`;

const NowCard = Styled.div`
  --cover-w: clamp(132px, 30vw, 186px);

  background: var(--color-bone);
  border-radius: var(--radius-lg);
  padding: var(--space-8) clamp(1.5rem, 5vw, var(--space-8));
  box-shadow: 0 32px 64px -24px rgba(0, 0, 0, 0.35);
  max-width: 34rem;
  margin: 0 auto;
  text-align: center;
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

const Shelf = Styled.div`
  position: relative;
  height: calc(var(--cover-w) * 1.5);
  perspective: 1000px;
  margin-bottom: var(--space-6);
`;

const Cover = Styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--cover-w);
  border-radius: var(--radius-md);
  transform-style: preserve-3d;
  z-index: ${({ $offset }) => 10 - Math.abs($offset)};
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease;
  opacity: ${({ $revealed, $offset }) =>
    !$revealed ? 0 : $offset === 0 ? 1 : 0.45};
  transform: translateX(-50%)
    translateX(${({ $offset }) => $offset * 58}%)
    rotateY(${({ $offset }) => $offset * -24}deg)
    scale(${({ $offset, $revealed }) =>
      !$revealed ? 0.86 : $offset === 0 ? 1 : 0.78});

  img {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    display: block;
    border-radius: var(--radius-md);
    transition: filter 0.7s ease, box-shadow 0.7s ease;
    filter: ${({ $offset }) =>
      $offset === 0 ? "grayscale(0)" : "grayscale(1) brightness(0.95)"};
    box-shadow: ${({ $offset }) =>
      $offset === 0
        ? "0 22px 44px -14px rgba(30, 16, 22, 0.55)"
        : "0 10px 24px -10px rgba(30, 16, 22, 0.4)"};
  }

  &:hover img {
    filter: grayscale(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-burgundy);
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    img {
      transition: none;
    }
  }
`;

const Detail = Styled.div`
  margin-top: var(--space-6);
  min-height: 4.5rem;
`;

const DetailLabel = Styled.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-2);

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const DetailValue = Styled.div`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  line-height: 1.3;
  color: var(--color-burgundy);
  text-wrap: balance;
`;

const Asterism = Styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1;
  color: var(--color-burgundy);
  margin: var(--space-6) 0;
`;

const NowFooter = Styled.div`
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  max-width: 48ch;
  margin: 0 auto;
  text-wrap: pretty;
`;

export default Horizon;
