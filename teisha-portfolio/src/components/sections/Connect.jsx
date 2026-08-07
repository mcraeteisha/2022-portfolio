import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ButtonInverse, ButtonOutlineInverse } from "../ui/Button";
import TeishaResume from "../../assets/Teisha_McRae_Resume.pdf";

function Connect() {
  return (
    <Section id="connect" tone="ink">
      <Container>
        <Inner>
          <Eyebrow>Get in Touch</Eyebrow>
          <Heading>Let&rsquo;s build something together.</Heading>
          <Lead>
            Whether you have a role in mind, a question, or just want to talk
            shop — I&rsquo;d love to hear from you.
          </Lead>
          <CtaRow>
            <ButtonInverse href="mailto:mcraeteisha@gmail.com">Email Me</ButtonInverse>
            <ButtonOutlineInverse href={TeishaResume} download="Teisha_McRae_Resume.pdf">
              Download Résumé
            </ButtonOutlineInverse>
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

const Heading = Styled.h2`
  font-size: var(--text-4xl);
  margin-bottom: var(--space-5);
`;

const Lead = Styled.p`
  font-size: var(--text-md);
  color: var(--on-panel-soft);
  margin-bottom: var(--space-8);
`;

const CtaRow = Styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-4);
`;

export default Connect;
