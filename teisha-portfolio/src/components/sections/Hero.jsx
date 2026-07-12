import Styled, { keyframes } from "styled-components";
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
        <Headline>
          I build software for the people on the other side of the screen.
        </Headline>
        <Lead>
          My path here wasn&rsquo;t a straight line — and four years in, I&rsquo;ve
          learned that&rsquo;s exactly what makes me good at this.
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

const drift = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(3%, -4%) scale(1.08); }
`;

const shimmer = keyframes`
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
`;

const HeroSection = Styled(Section)`
  position: relative;
  overflow: hidden;
  min-height: 88vh;
  display: flex;
  align-items: center;
  padding-top: var(--space-10);
  padding-bottom: var(--space-16);

  &::before {
    content: "";
    position: absolute;
    inset: -10%;
    z-index: 0;
    background:
      radial-gradient(circle at 22% 28%, rgba(183, 209, 234, 0.4) 0%, transparent 45%),
      radial-gradient(circle at 78% 68%, rgba(183, 209, 234, 0.28) 0%, transparent 50%);
    animation: ${drift} 26s ease-in-out infinite alternate;
    pointer-events: none;
  }
`;

const Eyebrow = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--color-breeze-deep);
  margin-bottom: var(--space-5);
`;

const NameAccent = Styled.span`
  background-image: linear-gradient(
    100deg,
    var(--color-breeze-deep) 35%,
    var(--color-breeze) 50%,
    var(--color-breeze-deep) 65%
  );
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 6s ease-in-out infinite;
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
