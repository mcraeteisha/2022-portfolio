import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Button, ButtonOutline } from "../ui/Button";
import TeishaResume from "../../assets/Teisha_McRae_Resume.pdf";

function Connect() {
  return (
    <Section id="connect" $tone="paper">
      <Container>
        <Inner>
          <Eyebrow>Get in Touch</Eyebrow>
          <Heading>Let&rsquo;s build something together.</Heading>
          <Lead>
            Whether you have a role in mind, a question, or just want to talk
            shop — I&rsquo;d love to hear from you.
          </Lead>
          <CtaRow>
            <Button href="mailto:mcraeteisha@gmail.com">Email Me</Button>
            <ButtonOutline href={TeishaResume} download>
              Download Résumé
            </ButtonOutline>
          </CtaRow>
        </Inner>
      </Container>
    </Section>
  );
}

const Inner = Styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-breeze-deep);
  margin-bottom: var(--space-5);
`;

const Heading = Styled.h2`
  font-size: var(--text-4xl);
  margin-bottom: var(--space-5);
`;

const Lead = Styled.p`
  font-size: var(--text-md);
  color: var(--color-ink-soft);
  margin-bottom: var(--space-8);
`;

const CtaRow = Styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-4);
`;

export default Connect;
