import Styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Button, ButtonOutline } from "../ui/Button";
import TeishaResume from "../../assets/Teisha_McRae_Resume.pdf";

function Hero() {
  return (
    <HeroSection id="hero" $tone="paper">
      <Container>
        <Eyebrow>TEISHA McRAE · SOFTWARE ENGINEER</Eyebrow>
        <Headline>
          I build software for the people on the other side of the screen.
        </Headline>
        <Lead>
          My path here wasn&rsquo;t a straight line — and four years in, I&rsquo;ve
          learned that&rsquo;s exactly what makes me good at this.
        </Lead>
        <CtaRow>
          <Button href="#connect">Get in Touch</Button>
          <ButtonOutline href={TeishaResume} download>
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
  min-height: 88vh;
  display: flex;
  align-items: center;
  padding-top: var(--space-10);
  padding-bottom: var(--space-16);
`;

const Eyebrow = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--color-breeze-deep);
  margin-bottom: var(--space-5);
`;

const Headline = Styled.h1`
  max-width: 16ch;
  font-size: var(--text-hero);
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
  color: var(--color-aubergine);

  a:hover {
    color: var(--color-breeze-deep);
  }
`;

export default Hero;
