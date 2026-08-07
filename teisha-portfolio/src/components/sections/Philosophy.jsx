import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Teisha from "../../images/Teisha_McRae_Headshot.jpg";

function Philosophy() {
  return (
    <Section id="philosophy" tone="alt">
      <Container>
        <Grid>
          <PhotoFrame>
            <img src={Teisha} alt="Teisha McRae" />
          </PhotoFrame>
          <TextColumn>
            <Eyebrow>Philosophy</Eyebrow>
            <Quote>
              I didn&rsquo;t become an engineer because I loved code. I became
              an engineer because I loved solving problems for <em>people</em>.
            </Quote>
            <Body>
              My career hasn&rsquo;t followed a straight line — and that&rsquo;s
              become one of my greatest strengths. I&rsquo;ve always been drawn
              to understanding people: how they think, what frustrates them,
              what makes an experience feel effortless.
            </Body>
            <Body>
              What excites me most isn&rsquo;t just writing code. It&rsquo;s
              understanding the people on the other side of it. I believe the
              best products come from empathy, curiosity, and a willingness to
              ask better questions before jumping to solutions.
            </Body>
          </TextColumn>
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = Styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 360px) 1fr;
  align-items: center;
  gap: var(--space-12);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
`;

const PhotoFrame = Styled.div`
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 48px -24px rgba(123, 30, 60, 0.35);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextColumn = Styled.div`
  max-width: 60ch;
`;

const Eyebrow = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-5);

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const Quote = Styled.h2`
  font-size: var(--text-3xl);
  font-weight: 500;
  margin-bottom: var(--space-6);
`;

const Body = Styled.p`
  font-size: var(--text-md);
  color: var(--color-ink-soft);
  margin-bottom: var(--space-5);

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Philosophy;
