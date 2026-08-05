import Styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Button, ButtonOutline } from "../ui/Button";
import TeishaResume from "../../assets/Teisha_McRae_Resume.pdf";

function Hero() {
  return (
    <HeroSection id="hero" tone="paper">
      <Container>
        <Eyebrow>
          <NameAccent>TEISHA McRAE</NameAccent> · SOFTWARE ENGINEER
        </Eyebrow>
        <Headline>From writing essays to writing <em>code</em>.</Headline>
        <Lead>
          Four years building software, after six in marketing, QA, and product. I
          still read like an English major and debug like one too. My path here
          wasn&rsquo;t a straight line — that&rsquo;s exactly what makes me good at
          this.
        </Lead>
        <CtaRow>
          <Button href="#connect">Get in Touch</Button>
          <ButtonOutline href={TeishaResume} download="Teisha_McRae_Resume.pdf">
            Download Résumé
          </ButtonOutline>
        </CtaRow>
        <SocialRow>
          <a href="https://www.linkedin.com/in/teishamcrae/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/mcraeteisha" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <FaGithub />
          </a>
        </SocialRow>
      </Container>
    </HeroSection>
  );
}

const HeroSection = Styled(Section)`
  min-height: 78vh;
  display: flex;
  align-items: center;
`;

const Eyebrow = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-burgundy);
  margin-bottom: var(--space-5);

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const NameAccent = Styled.span`
  font-weight: 700;
`;

const Headline = Styled.h1`
  max-width: 18ch;
  font-size: var(--text-hero);
  line-height: 1;
  letter-spacing: -0.015em;
  margin-bottom: var(--space-6);
`;

const Lead = Styled.p`
  max-width: 46ch;
  font-size: var(--text-lg);
  color: var(--color-ink-soft);
  margin-bottom: var(--space-8);
`;

const CtaRow = Styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
`;

const SocialRow = Styled.div`
  display: flex;
  gap: var(--space-5);
  font-size: 1.35rem;
  color: var(--color-burgundy);

  a:hover {
    color: var(--color-rose);
  }
`;

export default Hero;
