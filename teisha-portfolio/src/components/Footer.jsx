import Styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Wordmark>Teisha McRae</Wordmark>
      <Copyright>
        © {year} Teisha McRae. Designed &amp; built with care 🩵
      </Copyright>
      <SocialRow>
        <a
          href="https://www.linkedin.com/in/teishamcrae/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/mcraeteisha"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </SocialRow>
    </FooterBar>
  );
}

const FooterBar = Styled.footer`
  background: var(--color-aubergine);
  color: var(--color-breeze-soft);
  padding: var(--space-6) clamp(1.5rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
`;

const Wordmark = Styled.p`
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--color-white);
`;

const Copyright = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-breeze-soft);
`;

const SocialRow = Styled.div`
  display: flex;
  gap: var(--space-4);
  font-size: 1.1rem;
  color: var(--color-white);

  a:hover {
    color: var(--color-breeze);
  }
`;

export default Footer;
